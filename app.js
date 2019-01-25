import express from 'express';
import bodyParser from 'body-parser';
import { readJSON }  from './db';
const PORT = 5555;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.get('/wszystkie', (req, res) => res.send( readJSON()) );
app.get('/wszystkie', (req, res) => res.send( readJSON()) );

/*app.get('/db.js', (req, res) => {
  res(readJSON();
});
var fs = require('fs');
var obj;
fs.readFile('/package.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(obj);
});
*/

/*app.get('/package.json', (req, res) => res.send('Hello World!'))*/

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

