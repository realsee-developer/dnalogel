export const addHoverImage = '//vrlab-static.ljcdn.com/release/web/measure/add-hover.944fffad.png'
export const addNormalImage = '//vrlab-static.ljcdn.com/release/web/measure/add-normal.39e967e9.png'
export const cancelHoverImage = '//vrlab-static.ljcdn.com/release/web/measure/canale-hover.74b37e24.png'
export const cancelNormalImage = '//vrlab-static.ljcdn.com/release/web/measure/cancle-normal.77bb326c.png'
export const doneHoverImage = '//vrlab-static.ljcdn.com/release/web/measure/done-hover.9e09438b.png'
export const doneNormalImage = '//vrlab-static.ljcdn.com/release/web/measure/done-normal.4fcddd73.png'
export const exitImage = '//vrlab-static.ljcdn.com/release/web/measure/exit.6693ad51.png'
export const revokeImage = '//vrlab-static.ljcdn.com/release/web/measure/revoke.3e424843.png'

export const uiWrapperStyle: Partial<CSSStyleDeclaration> = {
  display: 'none',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  opacity: '0',
  transform: 'translate(0, 10px)',
  transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
}

export const operatingSpaceStyle: Partial<CSSStyleDeclaration> = {
  position: 'absolute',
  left: '50%',
  bottom: '32px',
  transform: 'translateX(-50%)',
  height: '89px',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '16px',
  pointerEvents: 'all',
  color: '#fff',
  zIndex: '10',
}

export const buttonGroupStyle: Partial<CSSStyleDeclaration> = {
  height: '100%',
  width: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}

// 操作区下方的背景
export const controllerBackgroundStyle: Partial<CSSStyleDeclaration> = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  opacity: '0.5',
  width: '100%',
  height: '184px',
  background: `linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #000000 100%)`,
  zIndex: '0',
}

// item
export const mainItemStyle: Partial<CSSStyleDeclaration> = {
  margin: '0 80px',
  opacity: '0.7',
}

export const newMainItemStyle: Partial<CSSStyleDeclaration> = {
  margin: '0 80px',
}

export const exitItemStyle: Partial<CSSStyleDeclaration> = {
  opacity: '0.7',
}

// icon
export const mainIconStyle: Partial<CSSStyleDeclaration> = {
  width: '60px',
  height: '60px',
  backgroundSize: '100%',
  cursor: 'pointer',
}
export const newMainIconStyle: Partial<CSSStyleDeclaration> = {
  width: '72px',
  height: '72px',
  backgroundSize: '100%',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
}
export const exitIconStyle: Partial<CSSStyleDeclaration> = {
  width: '40px',
  height: '40px',
  marginTop: '10px',
  backgroundSize: '100%',
  cursor: 'pointer',
}

// text
export const textStyle: Partial<CSSStyleDeclaration> = {
  cursor: 'default',
  userSelect: 'none',
}
