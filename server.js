const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(process.cwd() + '/views'));

function parseDate(unix) {
  const format = { 
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }
  
  if (isNaN(unix)) {
    const date = new Date(unix);
    const naturalDate = date.toLocaleString("en-US", format);
    return { "unix": unix, "natural": naturalDate }
  }
}

app.get('/:str', (req, res) => {
  const string = req.params.str;
  res.json(parseDate(string));
});

app.listen(process.env.PORT, () => {
  console.log('Node.js listening ...');
});

