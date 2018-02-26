
const   express               = require('express'),
        router                = express.Router();


// Catch all other routes and return the index file
router.get('*', (req, res) => {
    console.log("* operator");
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = router;