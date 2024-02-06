export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived: ${str}.`);
    }

    return str
        .split('')
        .reverse()
        .join('');
};