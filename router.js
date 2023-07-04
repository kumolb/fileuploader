const route = require("express").Router();
const fs = require("fs");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9)
        console.log(file.filename);
        cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.originalname.split(".")[1])
    }
})

const upload = multer({ storage: storage, limits: { fileSize: 1000 * 1000 * 1000 } });
route.post("/upload/file", upload.array("file"), (req, res, next) => {
    // console.log(req.file)
    // console.log(req.files[0]);
    try {
        let uploadedFile = [];
        req.files.map(f => {
            uploadedFile.push("uploads/" + f.filename)
        })
        // console.log(upload);
        console.log(uploadedFile)
        fs.appendFileSync("logs/_42I34016O373730QPO.txt", '\n\n' + uploadedFile.length + " files uploaded " + Date.now());
        return res.json({
            "status": "Success",
            bolb: uploadedFile
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            success: false,
            err: err.stack
        })
    }
})

module.exports = route;