const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let receivedValue = '';

app.post('/empfangen', (req, res) => {
  receivedValue = req.body.data;
  console.log('Empfangener Wert:', receivedValue);
  res.send('Wert empfangen und gespeichert.');
});

app.get('/wert', (req, res) => {
  res.send(receivedValue);
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
