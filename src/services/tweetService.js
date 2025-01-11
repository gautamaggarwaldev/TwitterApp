import { Filter } from "bad-words";
import { 
    createTweet as createTweetRepo,
    getTweets as getTweetRepo,  
    getTweetById as getTweetByIdRepo,
    deleteTweet as deleteTweetRepo,
    updateTweet as updateTweetRepo
} from "../repositories/tweetRepository.js";

export const createTweet = async({ body }) => {
    // try to find blocked wwords in the tweet body and if any exists don't create the tweet and return an error message

    const filter = new Filter();

    if(filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message: "Tweet contain blocked words",
            status: 400
        }
    }

    const tweet = await createTweetRepo({ body });

    return tweet
}

export const getTweets = async(req, res) => {
    const tweets = await getTweetRepo();

    return tweets;
}

export const getTweetById = async(id) => {
    const tweet = await getTweetByIdRepo(id);

    if(!tweet) {
        throw{
            message: "Tweet not found",
            status: 404
        }
    }

    return tweet;
}

export const deleteTweet = async(id) => {
    const response = await deleteTweetRepo(id);

    if(!response) {
        throw{
            status: 404,
            message: 'tweet was not found'
        }
    }

    return response;
}

export const updateTweet = async(id, body) => {
    const response = await updateTweetRepo(id, body);

    if(!response) {
        throw{
            status: 404,
            message: 'tweet was not found'
        }
    }
    return response;
}