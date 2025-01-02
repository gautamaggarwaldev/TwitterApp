import express from 'express';
import morgan from 'morgan';

// create a new express app/server object
const app = express();
/*
function mid1(req, res, next) { // middleware function
    console.log('mid1', next); // next ---> mid2
    next();
}

function mid2(req, res, next) {// next ---> mid3
    console.log('mid2');
    next();
}

function mid3(req, res, next) {// next ---> callback
    console.log('mid3');
    next();
}

function commonMiddleware(req, res, next) {
    console.log('commonMiddleware');
    next();
}

app.use(commonMiddleware);

const middlewares = [mid1, mid2, mid3];
*/

app.use(express.json()); // middleware for parsing json body
app.use(express.text()); // middleware for parsing text body
app.use(express.urlencoded()); // middleware for parsing form data

app.use(morgan('combined'));

app.get('/ping', (req, res) => { // normal url
    return res.json(
        {
            status: "success",
            message: "pong",
        }
    );
}); // what to do if the user access the /ping endpoint


app.post('/hello/*', (req,res) => {
    console.log("Query params:", req.query); // for query params
    console.log("Request Body:",req.body); // for request body
    return res.json(
        {
            status: "success",
            message: "Hello World!",
        }
    );
});

app.get('/tweets/:tweet_id/comments/:commment_id', (req, res) => {
    console.log(req.params); // for path or url params
    return res.json(
        {
            status: "success",
            messagae: "Tweets and comments", 
        }
    )
});

app.all('*', (req, res) => {
    return res.status(404).json(
        {
            message: "NOT FOUND"
        }
    );
});

// define a port and attach it to the express
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
