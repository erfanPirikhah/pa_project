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
        (user)=>{res.status(200).send('ثبت نام با موفقیت انجام شد');
    },  (err) =>{res.status(400).send(`مشکلی پیش آمده لطفا دوباره ثبت نام نمایید`)}
    
    )
});

app.post('/api/login',(req,res)=>{
    const body=_.pick(req.body,['email','password']);
    

    User.checkPass(body.email,body.password).then((user)=>{
        user.generateAuthToken().then((token)=>{
            res.header('x-auth',token).status(200).send('احرازهویت با موفقیت انجام شد')
        },(err) => {
            res.status(400).json({
                Error: `Something went wrong. ${err}`
            });
        });
    });
})


app.listen(config.get('PORT'),()=>{
    console.log(`The Server runnig on Port: ${config.get('PORT')}`);
})