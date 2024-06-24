import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

var app = express();
var port = 3000;

app.use(express.static("public"));
app.use(express.static("src"));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res)=>{
    res.send(user);
})
// login - logout

var user = [
    {'name':'uesra', 'passwork': 123},
    {'name':'uesrb', 'passwork': 223}
];
app.post('/sign-in', (req, res, next)=>{
    let infor = req.query;
    let data = {'name':infor.name, 'passwork': infor.passwork};
    user.push(data);
    next();
});


app.post('/login', (req, res, next)=>{
    let infor = req.query;
    
    user.forEach(element => {
        if(infor.name == element.name && infor.passwork == element.passwork){
            res.send(200,element);
            next()
        }else{
            res.send(404, 'not found');
        }
    });


    next();
});




app.listen(port, ()=>{
    console.log('sever is ok');
})