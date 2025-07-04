module.exports = {
  semi: false, // 句末不使用分号
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  singleQuote: true, // 单引号
  printWidth: 140, // 单行最大长度
  tabWidth: 2,
  arrowParens: 'always', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
  endOfLine: 'lf', // 结束行形式
  htmlWhitespaceSensitivity: 'css', // 对 HTML 标签空白敏感
  insertPragma: false, // 在已被 prettier 格式化的文件顶部加上标注
  jsxBracketSameLine: false, // 多属性html标签的 '>' 不折行放置
  jsxSingleQuote: false, // jsx中使用单引号
  proseWrap: 'preserve',
  quoteProps: 'as-needed', // 仅在必需时为对象的 key 添加引号
  useTabs: false, // 使用空格代替tab缩进
}
