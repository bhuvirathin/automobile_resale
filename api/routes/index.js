var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({ type: 'application/*+json'});
var fs = require('fs') 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const dataPath = '../public/data.json'
const readFile = (
  callback,
  returnJson = false,
  filePath = dataPath,
  encoding = 'utf8'
) => {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err;
    }

    callback(returnJson ? JSON.parse(data) : data);
  });
};

const writeFile = (
  fileData,
  callback,
  filePath = dataPath,
  encoding = 'utf8'
) => {
  fs.writeFile(filePath, fileData, encoding, (err) => {
    if (err) {
      throw err;
    }

    callback();
  });
};

router.post('/users', jsonParser, (req, res) => {

  readFile((data) => {

    adddata = [...data,req.body];
 console.log(data)
 console.log(req.body)
 console.log(adddata)
    writeFile(JSON.stringify(adddata, null, 2), () => {
      res.status(200).send('new user added');
    });
    
 // res.render('index', {title : 'Success' })
  }, true);
});

module.exports = router;
