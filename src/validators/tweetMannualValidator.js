export const tweetMannualValidator = (req, res, next) => {
    if(!req.body.tweet) {
        return res.status(400).json(
            {
                error: "Tweet must be required"
            }
        );
    }

    if(req.body.tweet.length > 250) {
        return res.status(400).json(
            {
                error: "Tweet length must be smaller or equal to 250 characters"
            }
        )
    }

    next();
}