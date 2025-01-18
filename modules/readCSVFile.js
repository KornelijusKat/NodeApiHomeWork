const fs = require('fs');


module.exports = (filePath) =>{
    return new Promise((resolve, reject)=>{
        try{
            const data = fs.readFileSync(filePath, 'utf-8');
            resolve(data)   
        }catch(error){
           
        }
    })
}
