const express = require('express')
const app = express()
var proxy = require('express-http-proxy');

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/resources/', proxy('sapui5.hana.ondemand.com/resources/', {
  https: true
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))