const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(process.cwd() + '/views'));

function parseDate(val) {
  const format = { 
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }
  
  if (isNaN(val)) {
    const date = new Date(val);
    const unixDate = date.getTime() / 1000;
    const naturalDate = date.toLocaleString("en-US", format) !== "Invalid Date" ? date.toLocaleString("en-US", format) : null;
    return { "unix": unixDate, "natural": naturalDate }
  } else {
    const date = new Date(val * 1000);
    const naturalDate = date.toLocaleString("en-US", format) !== "Invalid Date" ? date.toLocaleString("en-US", format) : null;
    return { "unix": val, "natural": naturalDate };
  }
}

app.get('/:str', (req, res) => {
  const string = req.params.str;
  res.json(parseDate(string));
});

app.listen(process.env.PORT, () => {
  console.log('Node.js listening ...');
});

