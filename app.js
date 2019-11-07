const express = require('express');

require('dotenv').config()

const app = express();

var cors= require('cors')
app.use(cors())

let staticMiddleware = express.static('public');

app.use(staticMiddleware);

app.use(express.json());

const {routerIndex} = require('./routes/index.js')
app.use('/api',routerIndex)

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: __dirname});
})

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
    console.log("Server listening on ", app.get('port'))
})
