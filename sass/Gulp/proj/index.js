const express = require('express')
const app = express()

const port = process.env.PORT || 4040

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(port, (req,res)=>{
    console.log(`Sever runing in port ${port}`)
})