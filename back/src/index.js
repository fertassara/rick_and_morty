const http = require('http');
const characters = require('./utils/data')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")  ){
        let id = req.url.split('/').at(-1);

        let characterFind = characters.find((char)=> char.id === Number(id));

        res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(characterFind))
    }



}).listen(3001, 'localhost')