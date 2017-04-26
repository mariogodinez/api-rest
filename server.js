'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// app.get('/hola/:name', function(req,res){
// 	res.send({message: `Hello ${req.params.name}`})
// })

app.get('/api/product', (req, res)=>{
	res.status(200).send({ products: []})
})

app.delete('/api/product/:productName', (req, res)=>{

})
app.put('/api/product/:productName', (req, res)=>{

})

app.post('/api/product', (req, res)=>{
	console.log(req.body)
	res.status(200).send({message: 'Se ha agregado uno nuevo'})
})




app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`))