if (typeof window !== 'undefined') {
  Object.defineProperty(window, '$five', {
    get: () => {
      const fives = window['__FIVE_DEBUG__'].instances
      let five
      Object.values(fives).forEach((f: any) => {
        if (f.getElement()) five = f
      })
      return five
    }
  })
}