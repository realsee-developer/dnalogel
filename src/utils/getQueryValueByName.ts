/**
 * 从 url 中获取指定参数的值
 * */
const getQueryValueByName = (param: string) => {
    const queryArr = window.location.search.slice(1).split('&')
    const queryPair = queryArr.find(query => query.split('=')[0] === param);
    return queryPair ? queryPair.split('=')[1] : undefined
}

export default getQueryValueByName
