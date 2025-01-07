import express from 'express';
import tweetRouter from './tweets.js';
import commentRouter from './comments.js'

const router = express.Router(); // create the router object

router.use('/tweets', tweetRouter);
router.use('/comments', commentRouter);

export default router; // export the router object