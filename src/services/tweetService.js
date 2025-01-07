import { Filter } from "bad-words";
import { createTweet as createTweetRepo  } from "../repositories/tweetRepository.js";

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