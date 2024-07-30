const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 3001;

// Read SSL/TLS certificates
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');

const credentials = { key: privateKey, cert: certificate };

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
