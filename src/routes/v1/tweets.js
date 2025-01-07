import express from 'express';
import { getTweetById, getTweets, createTweet } from '../../controllers/tweetController.js';
// import { tweetMannualValidator } from '../../validators/tweetMannualValidator.js';
import { validate } from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';

const router = express.Router(); //Create the router object

router.get('/', getTweets);

router.get('/:id', getTweetById);

router.post('/', validate(tweetZodSchema) ,createTweet);

export default router; //Export the router object