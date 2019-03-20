const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');

mongoose.connect('mongodb://admin:admin123@ds111765.mlab.com:11765/gql-test', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connection is open')
})

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('now live at port 4000')
});