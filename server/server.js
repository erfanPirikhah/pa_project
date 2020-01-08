process.env.NODE_CONFIG_DIR = __dirname + '/config';
const {User}=require('./model/user')
const config=require('config');

console.log(`*** ${String(config.get('LEVEL')).toUpperCase()}***`);


let newUser=new User({
    fullname:'Erfan pirikhah',
    email:'erfan.com',
    password:'123456'
})

newUser.save().then((User)=>{
    console.log(User)
})