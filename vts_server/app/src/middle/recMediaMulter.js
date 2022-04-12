const multer = require('multer')
const path = require('path')
const uploadDir = path.join(
  __dirname,
  '../uploads/GUIDE/streaming/rec/meidaSource',
)

console.log(uploadDir)
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDir)
  },
  filename: (req, file, callback) => {
    callback(
      null,
      'media_' + Date.now() + '.' + file.mimetype.split('/')[1],
    )
  },
})

module.exports = multer({ storage: storage })
