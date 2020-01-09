const jwt=require('jsonwebtoken')

let data={
    id:10,
    name:'erfn'

};

let token = jwt.sign(data ,'123321');

console.log(token)


let decode=jwt.verify(token,'123321')

console.log(decode)