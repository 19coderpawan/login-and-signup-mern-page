const express=require('express');
const app=express();

const port=9000;
const connect=require('./database');
connect();

const Router=require('./Routes/Signup_route');
const Router2=require('./Routes/login_route');
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
//middlewares.
app.use(express.json());
app.use('/api',Router);
app.use('/api',Router2);

app.get('/',(req,res)=>{
    res.send(`<h1>pawan kushwaha</h1>`);
})

app.listen(port,()=>{
    console.log(`server is listining on port ${port}`);
})