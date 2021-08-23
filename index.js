import express from 'express';
import mongoose from 'mongoose';

import list from './models/list.js';

const app = express();
const mon = mongoose;

mon.connect("mongodb://mongo:27017/testup",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('------Connected to Mongodb------');
}).catch(error => {
    console.log("------Error connecting Mongodb------");
})

app.use(express.json());

const tasks = list;

app.get('/',(req,res)=>{
    tasks.find({},(err,data)=>{
        res.json(data);
    });
});

app.post('/add',(req,res)=>{
    tasks.create({
        title:req.body.title
    });    
});

app.listen(8081,()=>{
    console.log('------listening on 8081------');
});