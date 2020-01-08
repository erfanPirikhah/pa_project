process.env.NODE_CONFIG_DIR = __dirname + '/config';
const {User}=require('./model/user')

const config=require('config');
const _=require('lodash');
const express=require('express');



console.log(`*** ${String(config.get('LEVEL')).toUpperCase()}***`);

const app=express();
app.use(express.json());

app.post('/api/user',(req,res)=>{
    const body=_.pick(req.body,['fullname','email','password']);

    
    let user= new User(body);

    user.save().then(
        (user)=>{res.status(200).send(user);
    },  (err) =>{res.status(400).send(`Somthing wrong`)}
    
    )
})


app.listen(config.get('PORT'),()=>{
    console.log(`The Server runnig on Port: ${config.get('PORT')}`);
})