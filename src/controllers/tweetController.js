export const getTweets = (req, res) => {
    return res.json(
        {
            message: "Welcome to the tweet route v1"
        }
    );
}


export const getTweetById = (req, res) => {
    return res.json(
        {
            message: "Welcome to the tweet route v1",
            id: req.params.id
        }
    );
}


export const createTweet = (req, res) => {
    return res.json(
        {
            message: "Welcome to the tweet route v1",
            body: req.body
        }
    );
}