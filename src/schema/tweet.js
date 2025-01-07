import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true, // Remove whitespaces from the begnning and ending from the tweet
        maxlength: 250
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema); //Tweet collection

export default Tweet;