const path = require('path');
const router = require('express').Router();

// GET /notes returns the notes.html file

router.get("/notes", (req, res) => { // is this set up so that *any* url ending in '/notes' returns this page?
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
})

// GET * returns the index.html file

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
})

module.exports = router