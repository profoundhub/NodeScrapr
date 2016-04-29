var request = require("request");

request({
  uri: "http://www.google.com",
}, function(error, response, body) {
  console.log(body);
});