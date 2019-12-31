const express=require('express')
const bodyParser=require('body-parser')
const bcrypt=require('bcrypt-nodejs')
const cors=require('cors')
const knex=require('knex')

const register=require('./controllers/register');
const signin=require('./controllers/signin');
const profile=require('./controllers/profile');
const image=require('./controllers/image');
 const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'test',
    database : 'smartbraindb'
  }
});

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>
{
	res.json(database.users)

})



app.post('/signin',(req,res)=>{signin.handlesignin(req,res,db,bcrypt)})

app.post('/register',(req,res)=>{register.handleregister(req,res,db,bcrypt)})
app.get('/profile/:id',(req,res)=>{profile.handleprofileget(req,res,db)})

app.put('/image',(req,res)=>{image.handleimageput(req,res,db)})
app.post('/imageurl',(req,res)=>{image.handleapicall(req,res)})

app.listen(3001,()=>
{
	console.log("app is running is 3001")
})