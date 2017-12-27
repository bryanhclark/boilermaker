const router = require('express').Router();



// matches GET requests to /api/user/
router.get('/', function (req, res, next) { /* etc */ });
// matches POST requests to /api/user/
router.post('/', function (req, res, next) { /* etc */ });
// matches PUT requests to /api/user/:userId
router.put('/:userId', function (req, res, next) { /* etc */ });
// matches DELTE requests to /api/user/:userId
router.delete('/:userId', function (req, res, next) { /* etc */ });



module.exports = router;