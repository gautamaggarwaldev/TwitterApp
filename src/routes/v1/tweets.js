import express from 'express';
import { getTweetById, getTweets, createTweet, deleteTweet, updateTweet } from '../../controllers/tweetController.js';
// import { tweetMannualValidator } from '../../validators/tweetMannualValidator.js';
import { validate } from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { getTweetByIdMannualValidator } from '../../validators/tweetMannualValidator.js';

const router = express.Router(); //Create the router object

router.get('/', getTweets);

router.get('/:id', getTweetByIdMannualValidator ,getTweetById);

router.post('/', validate(tweetZodSchema) ,createTweet);

router.delete('/:id', getTweetByIdMannualValidator, deleteTweet);

router.put('/:id', getTweetByIdMannualValidator,updateTweet);

export default router; //Export the router object