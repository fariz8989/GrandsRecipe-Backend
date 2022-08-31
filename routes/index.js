const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const postRouter= require('./post')

/* GET home page. */

router.use('/users', usersRouter);
router.use('/post',postRouter)


module.exports = router;
