import express from 'express';
import mongoose from 'mongoose';

const app = express();
const mon = mongoose;

mon.Promise = global.Promise;
mon.connect('mongodb://mongo:27017/test', { useNewUrlParser: true }, (err) => {

    if (err) {
        console.log('=======Can not connect to the database=======' + err);
    } else {
        console.log('=======Connection established to the database=======');
    }
});
app.get('/',(req,res)=>{
    res.json({'name':'Harry'});
});


app.listen(8081,()=>{
    console.log('------listening on 8081------');
});