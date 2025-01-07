import express from 'express';
import { getTweetById, getTweets, createTweet } from '../../controllers/tweetController.js';

const router = express.Router(); //Create the router object

router.get('/', getTweets);

router.get('/:id', getTweetById);

router.post('/', createTweet);

export default router; //Export the router object