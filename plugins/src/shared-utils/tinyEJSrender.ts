const _DEFAULT_OPEN_DELIMITER = '<'
const _DEFAULT_CLOSE_DELIMITER = '>'
const _DEFAULT_DELIMITER = '%'
const _REGEX_STRING = '(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)'
const _ENCODE_HTML_RULES = {
  '&': '&amp',
  '<': '&lt',
  '>': '&gt',
  '"': '&#34',
  "'": '&#39'
}
const TemplateModes = {
  EVAL: 'eval',
  ESCAPED: 'escaped',
  RAW: 'raw',
  COMMENT: 'comment',
  LITERAL: 'literal',
}
const _DEFAULT_LOCALS_NAME = 'locals'

interface RenderData {
	[key: string]: string
}

function stripSemi (str: string): string {
  return str.replace(/;(\s*$)/, '$1')
}

export default function render (template: string, data: RenderData): string {
	const templ = new Template(template)
  return templ.compileFunction()(data)
}

class Template {
	private templateText: string
	private mode = null
	private truncate = false
	private currentLine = 1
	private source = ''
	private regex = new RegExp(_REGEX_STRING)

	constructor (text) {
	  this.templateText = text
	}

	public compileFunction () {
    let src
    const prepended = 
    	'  var __output = "";\n' +
      '  function __append(s) { if (s !== undefined && s !== null) __output += s }\n' +
    	'  with (' + _DEFAULT_LOCALS_NAME + ' || {}) {' + '\n'
    const appended = '  }' + '\n  return __output;' + '\n'
    const escapeFn = function (markup) {
		  return markup == undefined
		    ? ''
		    : String(markup)
		      .replace(/[&<>'"]/g, function (c) {
			  return _ENCODE_HTML_RULES[c] || c
			})
		}

    this._generateSource()
    this.source = prepended + this.source + appended

    src = this.source
    src = 'escapeFn = escapeFn || ' + escapeFn.toString() + ';' + '\n' + src

    return new Function(_DEFAULT_LOCALS_NAME + ', escapeFn', src)
  }

  private _generateSource () {
    this.templateText =
      this.templateText.replace(/[ \t]*<%_/gm, '<%_').replace(/_%>[ \t]*/gm, '_%>')

    const matches = this._parseTemplateText()
    const d = _DEFAULT_DELIMITER
    const o = _DEFAULT_OPEN_DELIMITER
    const c = _DEFAULT_CLOSE_DELIMITER

    if (matches && matches.length) {
      matches.forEach((line, index) => {
        let closing
        if ( line.indexOf(o + d) === 0
          && line.indexOf(o + d + d) !== 0) {
          closing = matches[index + 2]
          if (!(closing == d + c || closing == '-' + d + c || closing == '_' + d + c)) {
            throw new Error('Could not find matching close tag for "' + line + '".')
          }
        }
        this._scanLine(line)
      })
    }
  }

  private _parseTemplateText () {
    let str = this.templateText
    const pat = this.regex
    let result = pat.exec(str)
    const arr = []
    let firstPos

    while (result) {
      firstPos = result.index

      if (firstPos !== 0) {
        arr.push(str.substring(0, firstPos))
        str = str.slice(firstPos)
      }

      arr.push(result[0])
      str = str.slice(result[0].length)
      result = pat.exec(str)
    }

    if (str) {
      arr.push(str)
    }

    return arr
  }

  private _addOutput (line) {
    if (this.truncate) {
      line = line.replace(/^(?:\r\n|\r|\n)/, '')
      this.truncate = false
    }
    if (!line) return line

    line = line.replace(/\\/g, '\\\\')
    line = line.replace(/\n/g, '\\n')
    line = line.replace(/\r/g, '\\r')
    line = line.replace(/"/g, '\\"')
    this.source += '    ; __append("' + line + '")' + '\n'
  }

  private _scanLine (line) {
    const d = _DEFAULT_DELIMITER
    const o = _DEFAULT_OPEN_DELIMITER
    const c = _DEFAULT_CLOSE_DELIMITER
    const newLineCount = line.split('\n').length - 1

    switch (line) {
	    case o + d:
	    case o + d + '_':
	      this.mode = TemplateModes.EVAL
	      break
	    case o + d + '=':
	      this.mode = TemplateModes.ESCAPED
	      break
	    case o + d + '-':
	      this.mode = TemplateModes.RAW
	      break
	    case o + d + '#':
	      this.mode = TemplateModes.COMMENT
	      break
	    case o + d + d:
	      this.mode = TemplateModes.LITERAL
	      this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")' + '\n'
	      break
	    case d + d + c:
	      this.mode = TemplateModes.LITERAL
	      this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")' + '\n'
	      break
	    case d + c:
	    case '-' + d + c:
	    case '_' + d + c:
	      if (this.mode == TemplateModes.LITERAL) {
	        this._addOutput(line)
	      }

	      this.mode = null
	      this.truncate = line.indexOf('-') === 0 || line.indexOf('_') === 0
	      break
	    default:
	      if (this.mode) {
	        switch (this.mode) {
	        case TemplateModes.EVAL:
	        case TemplateModes.ESCAPED:
	        case TemplateModes.RAW:
	          if (line.lastIndexOf('//') > line.lastIndexOf('\n')) {
	            line += '\n'
	          }
	        }
	        switch (this.mode) {
	        case TemplateModes.EVAL:
	          this.source += '    ; ' + line + '\n'
	          break
	        case TemplateModes.ESCAPED:
	          this.source += '    ; __append(escapeFn(' + stripSemi(line) + '))' + '\n'
	          break
	        case TemplateModes.RAW:
	          this.source += '    ; __append(' + stripSemi(line) + ')' + '\n'
	          break
	        case TemplateModes.COMMENT:
	          break
	        case TemplateModes.LITERAL:
	          this._addOutput(line)
	          break
	        }
	      }
	      else {
	        this._addOutput(line)
	      }
    }
  }
}
