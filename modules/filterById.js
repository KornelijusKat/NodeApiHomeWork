module.exports = (records, id) => {
    return records.filter((record) => record.id == id)
}