import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

export const tweetMannualValidator = (req, res, next) => {
    if(!req.body.tweet) {
        return res.status(StatusCodes.BAD_REQUEST).json(
            {
                message: "Tweet must be required"
            }
        );
    }

    if(req.body.tweet.length > 250) {
        return res.status(StatusCodes.BAD_REQUEST).json(
            {
                message: "Tweet length must be smaller or equal to 250 characters",
                success: false
            }
        )
    }

    next();
}

export const getTweetByIdMannualValidator = (req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!isValidId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'Invalid tweet id'
        });
    }

    next();
}