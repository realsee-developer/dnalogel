type UniqueSymbol = ReturnType<(a: string) => { readonly 0: unique symbol }[0]>

function createSymbol(description: string): UniqueSymbol {
  // @ts-ignore
  return typeof Symbol === 'undefined' ? `$Symbol<${description}>$` : Symbol(description)
}

export { createSymbol }
export type { UniqueSymbol }
