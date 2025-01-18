module.exports = (record) =>{
    return Object.values(record).some(value => value && value !== '')
}