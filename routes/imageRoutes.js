
const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const path = require('path');
module.exports = function (app) {
  const s3Config = new AWS.S3({
    accessKeyId: process.env.AWS_IAM_USER_KEY,//
    secretAccessKey: process.env.AWS_IAM_USER_SECRET,//
    bucket: AWS_YOUR_BUCKET,
    region: process.env.REGION_NAME//"us-west-2"
  });
  // Set The Storage Engine
  const multerS3Config = multerS3({
    s3: s3Config,
    bucket: process.env.AWS_BUCKET_NAME,//process.env.AWS_BUCKET_NAME
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      console.log(file)
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))//new Date().toISOString() + '-' + file.originalname
    }
  });
  // // Set The Storage Engine
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "./public/uploads/")
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  //   }
  // });

  // Init Upload
  const upload = multer({
    // storage: storage,
    storage: multerS3Config,
    limits: { fileSize: 1024 * 1024 * 1 },//we are allowing only 1 MB image
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    }
  }).single('myImage');
  // var upload = multer({ dest: 'uploads/' })
  // Check File Type
  function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }
  app.get("/upload", function (req, res) {
    res.render("upload");
  });
  //   app.post('/api/upload', upload.single('myImage'), (req, res, next) => {
  //     // here in the req.file you will have the uploaded avatar file
  //     console.log("another : "+req.file);
  //  })
  app.post('/upload', (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        // res.json({ success: false, message: err });
        res.render("upload", {
          msg: err
        });
      }
      else {
        if (req.file == undefined) {
          console.log("no image file upload");
          // res.send(JSON.stringify(req));
          res.render("upload", {
            msg: 'Error: No File Selected!'
          });
        } else {
          console.log(req.file);
          console.log("path: "+req.file.location);
          // res.json(req.file);
          // res.send(`/uploads/${req.file.filename}`);
          res.render("upload", {
            msg: 'File Uploaded!',
            // filePath: `/uploads/${req.file.filename}`
            filePath: req.file.location
          });
        }
      }
    });
  });
}
