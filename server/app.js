const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
// enable cors

// also ok
//app.use(cors());

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));


// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb://shaun:123456a@ds233323.mlab.com:33323/gql-ninja');
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
});


// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4001, () => {
    console.log('now listening for requests on port 4001');
});
