function objectToQueryString(object) {
    if (typeof object !== 'object') return '';
    if (object.length < 1) return '';
    const paramsArray = Object.keys(object).map((key) => `${key}=${object[key]}`);
    const queryString = paramsArray.join('&');
    return `?${queryString}`
}

function cardValueToNb(cardValue) {
    const heads = ['JACK', 'QUEEN', 'KING'];
    const specialCards = [...heads, 'ACE'];
    if (specialCards.includes(cardValue)) {
        if (heads.includes(cardValue)) return 10;
        if (cardValue === 'ACE') return 0;
    }
    return parseInt(cardValue);
}

export {objectToQueryString, cardValueToNb};