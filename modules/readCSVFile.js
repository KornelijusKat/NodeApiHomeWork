const fs = require('fs');

/**
 * @param {string} filePath 
 * @returns {Promise<string>}
 */
module.exports = (filePath) =>{
    return new Promise((resolve, reject)=>{
        try{
            const data = fs.readFileSync(filePath, 'utf-8');
            resolve(data)   
        }catch(error){
           reject(`Error reading file: ${error}`)
        }
    })
}
