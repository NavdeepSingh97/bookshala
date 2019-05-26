const route = require('express').Router()
var request = require('request');

route.post('/contacts',(req, res)=>{
  conn.apex.post("/services/apexrest/v1/createContacts/", req.body, function(res) {
    console.log(res);
    });
  })
  // console.log(conn.accessToken)

route.post('/feedback',(req, res)=>{
  conn.apex.post("/services/apexrest/v1/createFeedback/", req.body, function(res) {
    console.log(res);
    // the response object structure depends on the definition of apex class
  });
  

})
exports = module.exports = route