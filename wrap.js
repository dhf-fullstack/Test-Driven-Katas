function wrap (str, maxCol){
    if (maxCol <= 0) {
        throw new Error('maxCol should be greater than 0');
    }
    if (str.length <= maxCol) {
        return str;
    }
    else {
        const finalSpace = str.lastIndexOf(' ', maxCol)
        if (finalSpace > -1){
            return str.slice(0, finalSpace) + '\n' + wrap(str.slice(finalSpace + 1), maxCol);
        } else {
            throw new Error('Word cannot be longer than maxCol');
        }
    }
}

module.exports = wrap;
