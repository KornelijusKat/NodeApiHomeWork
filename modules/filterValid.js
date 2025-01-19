/**
 * @param {array} records 
 * @param {function} isValid
 * @returns {array}
 */
module.exports = (records, isValid) => {
    return records.filter(isValid);
};