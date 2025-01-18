const fs = require('fs');
const http = require('http')
const url = require('url')
const hostname='localhost';
const port='5000'
const isValid = require('./modules/isValid.js')
const fileReader = require('./modules/readCSVFile.js')
const dataArray = require('./modules/stringToJSONArray.js')
const filterValid = require('./modules/filterValid.js')
const filterById = require('./modules/filterById.js');
const filterByUserId = require('./modules/filterByUserId.js');
const path = require('path');
const server = http.createServer((req,res)=>{
    const {query, pathname} = url.parse(req.url, true);
    const urlParts = pathname.split('/');
    let data;
    let validRecords;
    let body = '';
    console.log(urlParts[2])
    console.log(`${urlParts[1]}/${urlParts[2]}`)
    switch(pathname){
        case '/users':
            res.writeHead(200,{
                'Content-Type': 'application/json'
            });
            fileReader('./data/users.csv').then((data)=>{
                validRecords = filterValid(dataArray(data), isValid)
                res.end(JSON.stringify(validRecords))
            })
            break;
        case `/user/${urlParts[2]}`:
                res.writeHead(200,{
                    'Content-Type': 'application/json'
                });
                fileReader('./data/users.csv').then((data)=>{
                    validRecords = filterValid(dataArray(data), isValid)
                    res.end(JSON.stringify(filterById(validRecords,urlParts[2])))
                })     
            break;
        case `/user/${urlParts[2]}/payments`:
            if(req.method === "GET"){
                res.writeHead(200,{
                    'Content-Type': 'application/json'
                });
                fileReader('./data/payments.csv').then((data)=>{
                    validRecords = filterValid(dataArray(data), isValid)
                    res.end(JSON.stringify(filterByUserId(validRecords,urlParts[2])))
                })
            }
            break;
        case `/payment/${urlParts[2]}`:
            if(req.method === "GET"){
                res.writeHead(200,{
                    'Content-Type': 'application/json'
                });
                fileReader('./data/payments.csv').then((data)=>{
                    validRecords = filterValid(dataArray(data), isValid)
                    res.end(JSON.stringify(filterById(validRecords,urlParts[2])))
                })
            }
            break;
    }
})
server.listen(port, hostname=>{
    console.log(`Server is listening on ${port}`)
})