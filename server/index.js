const cors = require('cors')
const {json} = require('body-parser')
const express = require('express')
const massive = require('massive')
const bcrypt = require ('bcrypt')

const controller = require("./controller.js")

const port = 3001;

const app = express()
app.use(cors())
app.use(json())
app.set("bcrypt", bcrypt)

const massiveConnection = massive(process.env.connectionString) // tell massive to make the connection
.then(db => app.set("db", db)) // if connection exists, set 'db' to db
.catch(console.log)


app.put('/api/hereComesThePWTest', controller.passwordChecker)
app.put('/api/hereComesTheNewUser', controller.accountCreation)


app.listen(port, () => console.log(`You are now listening to ${port}FM.`))