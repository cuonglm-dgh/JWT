const jwt = require('jsonwebtoken')
module.exports.getIndex = (req, res, next) => {
  res.sendStatus(200);
};
module.exports.getUser = (req, res, next) => {
  console.log(req.body);
  let key = jwt.sign({},'cuong',{ expiresIn:'1h' })
  res.send(key)
};
