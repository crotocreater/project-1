import express from 'express';
import bodyParser from 'body-parser';

const post = 8080;
const app = express();


app.get("/", (req, res)=>{
    res.send(data);
});


app.listen(post, ()=>{
    console.log('sever run');
});