const express = require("express");
const cors = require('cors')
const  { graphqlHTTP } = require('express-graphql');
require('dotenv').config()
const schema= require('./schema/schema')
const mongoose=require('mongoose')
const app = express()
app.use(cors())
mongoose.connect(process.env.URL).
catch(error => consol.log(error));
mongoose.connection.once('open',()=>{
    console.log('conect with mongo db');
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(process.env.PORT||4000,()=>{
    console.log('app running on 4000');
})

