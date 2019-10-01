const express = require('express');
const moongose = require('mongoose');
const routes = require('./routes');

const app = express();

moongose.connect('mongodb+srv://vitor2233:vitor33736767@aircnc-z4l3e.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3333);