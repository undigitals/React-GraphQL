const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const app = express();


// connect to mlab database
// make sure to replace my db string & creds with your own

mongoose.connect('mongodb://shaun:123456a@ds233323.mlab.com:33323/gql-ninja');
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () =>{
    console.log('now listening to port 4000');
});