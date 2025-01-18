module.exports = (records, isValid) => {
    return records.filter(isValid);
};