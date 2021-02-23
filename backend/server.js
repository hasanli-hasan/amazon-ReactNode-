import express from 'express';
import data from './data.js'


const app=express();

app.get('/api/products',(req,res)=>{

res.send(data)
})










app.get('/',(req,res)=>{
res.send('server is ready boy!');
});

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is working port http://localhost:${port}`);
})