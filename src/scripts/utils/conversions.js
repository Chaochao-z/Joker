function objectToQueryString(object) {
    if (typeof object !== 'object') return '';
    if (object.length < 1) return '';
    const paramsArray = Object.keys(object).map((key) => `${key}=${object[key]}`);
    const queryString = paramsArray.join('&');
    return `?${queryString}`
}

export {objectToQueryString};