const express = require('express');
const http = require('http');
const app = express();

if (!process.env.DISABLE_XORIGIN) {
  app.use((req, res, next) => {
    var allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
    var origin = req.headers.origin || '*';
    if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
         console.log(origin);
         res.setHeader('Access-Control-Allow-Origin', origin);
         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });
}

app.use('/public', express.static(process.cwd() + '/public'));

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log('Node.js listening ...');
});

