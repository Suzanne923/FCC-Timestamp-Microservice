const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(process.cwd() + '/views'));

function parseDate(iso) {
  const format = { 
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }
  const date = new Date(unix);
  return date.toLocaleString("en-US", format);
}

app.get('/:str', (req, res) => {
  const string = req.params.str;
  const naturalDate = parseDate(string);
  res.json({ "unix": 1450137600, "natural": naturalDate });
});

app.listen(process.env.PORT, () => {
  console.log('Node.js listening ...');
});

