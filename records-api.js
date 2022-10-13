const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// record collection
let records = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Post new record entry
app.post('/record', (req, res) => {
  const record = req.body;

  console.log(record);
  records.push(record);

  res.send('Record is added to the database');
});

// Get list of all records
app.get('/records', (req, res) => {
  res.json(records);
});

// Get record by ID
app.get('/record/:id', (req, res) => {
  const id = req.params.id;

  for (let record of records) {
    if (record.id == id) {
      res.json(record);
      return;
    }
  }

  res.status(404).send('Record not found')
});

app.delete('/record/:id', (req, res) =>{
  const id = req.params.id;

  records = records.filter(i => {
    if (i.id !== id) {
      return true;
    }
    return false;
  });
  res.send('Record is deleted.');
});

app.listen(port, () => console.log(`👂 App listening on port ${port}.`));