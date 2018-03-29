const cors = require('cors')
const {json} = require('body-parser')
const express = require('express')
const massive = require('massive')
const bcrypt = require ('bcrypt')

const port = 3001;

const app = express()
app.use(cors())
app.use(json())




app.listen(port, () => console.log(`You are now listening to ${port}FM.`))