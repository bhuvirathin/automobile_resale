var express = require('express');
const fs = require('fs');

var router = express.Router();
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

router.post('/users', (req, res) => {
  readFile((data) => {
    // Note: this needs to be more robust for production use.
    // e.g. use a UUID or some kind of GUID for a unique ID value.
    const newUserId = Date.now().toString();

    // add the new user
    data[newUserId] = req.body;

    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send('new user added');
    });
  }, true);
});
module.exports = router;
