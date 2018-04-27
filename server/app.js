import express from 'express'
import bodyParcer from 'body-parser'
import * as db from './utils/DataBaseUtils'
import { serverPort } from '../etc/config.json'

const app =  express();

app.use(bodyParcer.json())

db.setUpConnection();

app.get('/notes', (req, res) => {
    db.getTests().then(data=> res.send(data));
})

const server =  app.listen(serverPort, ()=>{
    console.log("server run")
})