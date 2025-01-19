/**
 * @param {array} records 
 * @param {string} id
 * @returns {array}
 */
module.exports = (records, id) => {
    return records.filter((record) => record.id == id)
}