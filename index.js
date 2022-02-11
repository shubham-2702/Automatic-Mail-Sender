const sg= require("@sendgrid/mail");
const express=require('express');
const ejs=require('ejs');
const bodyParser=require('body-parser');
const path=require('path');
const cors=require('cors');
const dotenv=require("dotenv");

dotenv.config();
const API=process.env.APIKEY;

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(cors());
sg.setApiKey(API);

app.route("/").get((req,res)=>{
   res.send("<h1>Welcome to my Rest Api for sending mail</h1>")
})
.post((req,res)=>{
ejs
    .renderFile(`views/template.ejs`, {
        cName : req.body.cName,
        url : req.body.url,
        role : req.body.role,
}).then(result => {
    const emailTemplate = result;
    const mail=req.body.mail;
const message={
    to:mail,
    from:{
        name: 'Job-O-Mania',
        email:'006infinitystones@gmail.com',
    },
    subject:'Knock Knock !!',
    text:'We have found a new job for You :|)',
    html: emailTemplate
};

sg.send(message)
    .then(()=>{
        console.log("Email Sent Successfully");
        res.send("Ok");
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    });
});

});

app.listen(process.env.PORT||3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Actively listening on port 3000");
    }
});