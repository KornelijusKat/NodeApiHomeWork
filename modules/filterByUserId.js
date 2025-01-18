module.exports = (records, id) => {
    return records.filter((record) => record.userId == id)
}