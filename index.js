const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");


app.use(express.static(__dirname))
app.use(bodyParser.json())
const URL = "/usr";
app.get("/", function(req, res){
    const html = fs.readFileSync(__dirname+"/public/index.html")
    res.type('html');
    res.send(html)
})

app.post('/test', function(req, res){
    res.send(200);
})
app.listen(3001);