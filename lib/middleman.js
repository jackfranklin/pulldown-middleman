var request = require("request");

var middleMan = {
  apiBase: "http://pulldown-api.herokuapp.com",
  set: function(search, callback) {
    request(this.apiBase + "/set/" + search, function(error, response, body) {
      if(!error) {
        callback(JSON.parse(body));
      }
    });
  }
};

module.exports = middleMan;
