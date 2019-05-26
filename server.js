const express = require('express')
const path = require('path')
var sf = require('node-salesforce');
var router = express.Router();

const app = express();
var multer  = require('multer')
let storage = multer.diskStorage({
  destination: function(req,file,cb){
       cb(null, path.join(__dirname,'images'));
  },
  filename: function(req,file,cb){
    cb(null, file.originalname+path.extname(file.originalname))
  }

})
let upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
     if ((file.mimetype == 'image/jpeg') || (file.mimetype == 'image/png') || (file.mimetype == 'image/bmp')) {
        cb(null, true);
     }else{
        cb(null, false)
     }
  }
})

let ImageUpload = upload.fields(
  [
     {name:"fileName", maxCount: 1 }
  ]
);

global.conn =  conn = new sf.Connection({
   oauth2 : {
     loginUrl : 'https://ap8.salesforce.com',
     clientId : '3MVG9pe2TCoA1Pf5l1jJl1eytYX0nBwDkwjgWMvFkwfWVJmjheZFw5TeQQKlg35PTDtAAh2HQkM7vTQsa__oK',
     clientSecret : '0B6B89605E5B2694058ADC6F68373543822770360DD229225EC1EDD005F6D021',
     redirectUri : 'https://localhost:8080'
   }
});




app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(function  (req,  res,  next) {
    res.header("Access-Control-Allow-Origin",  "*");
    res.setHeader('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', express.static(path.join(__dirname, 'public')))
app.post('/image',
function (req, res, next) {
  ImageUpload(req, res, function (err) {
     if (err) {
        return res.status(500).json({
           "status": "ERROR",
           "error_message": JSON.stringify(err)
        });
     }else{
        return res.status(201).send("File uploaded.");
     }
  })
});

	
app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/refreshlogin', (req, res)=>{
   conn.login('deeptest@cloudcertitude.com','navdeep@54698730', 
         function(err, userInfo) {
            if (err) { return console.error('18',err); }
            console.log(conn.accessToken);
            console.log(conn.instanceUrl);
            console.log("User ID: " + userInfo.id);
            console.log("Org ID: " + userInfo.organizationId);
            res.send('done');
});

})
app.use('/api', require('./routes/api').route)

app.use('/myimage',express.static(path.join(__dirname, 'images')))

app.use(function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

app.listen(2000, () => console.log('Server started at http://localhost:2000'))