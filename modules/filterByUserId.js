/**
 * @param {array} records 
 * @param {string} userId
 * @returns {array}
 */
module.exports = (records, userId) => {
    return records.filter((record) => record.userId == userId)
}