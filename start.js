const express = require('express')
const path = require('path');
const app = express()
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/',(req,res)=>{
    res.sendFile('Home.html',{root:__dirname})
})

app.get('/home',(req,res)=>{
    res.redirect('/')
})   

app.get('/central',(req,res)=>{
    res.sendFile('Central.html',{root:__dirname})
})

app.get('/tsimshatsui',(req,res)=>{
    res.sendFile('TsimShaTsui.html',{root:__dirname})
})

app.get('/mongkok',(req,res)=>{
    res.sendFile('Mongkok.html',{root:__dirname})
})   

app.use((req,res)=>{
    res.status(404).sendFile('error.html',{root:__dirname})
})  

app.listen(3000)
