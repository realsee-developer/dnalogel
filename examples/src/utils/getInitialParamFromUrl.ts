/**
 * 从 url 中获取初始化参数
 * */

const getInitialParamFromUrl = (): Record<string, any> => {
    let queryString = window.location.search
    if (!queryString) return {}
    if (queryString.slice(-1) === '/') {
        queryString = queryString.slice(0, -1)
    }
    const queryArr: any[] = queryString.slice(1)?.split('&')
    let initialParam: Record<string, any> = {}
    if (!queryArr) return {}
    queryArr.forEach(query => {
        const queryKeyValue = query.split('=')
        if( queryKeyValue[0] !== 'renderCode' && queryKeyValue[0] !== 'spaceType'){
            let obj: Record<string, any> = {}
            try {
                obj[queryKeyValue[0]] = JSON.parse(queryKeyValue[1])
            } catch(e) {
                obj[queryKeyValue[0]] = queryKeyValue[1]
            }
            Object.assign(initialParam, obj)
        }
    })

    console.log("__debug__: ", initialParam)
    return initialParam
}


export default getInitialParamFromUrl
