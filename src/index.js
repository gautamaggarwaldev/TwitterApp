import express from 'express';
import morgan from 'morgan';
import path from 'path';
import apiRouter from './routes/apiRoutes.js';
import { PORT } from './config/serverConfig.js';

// create a new express app/server object
const app = express();

app.use(express.json()); // middleware for parsing json body
app.use(express.text()); // middleware for parsing text body
app.use(express.urlencoded()); // middleware for parsing form data

app.use(morgan('combined'));

app.set('view engine', 'ejs')
app.set('views', path.join(import.meta.dirname, '/views'))

console.log(import.meta)

app.get('/', (req, res) => {
    res.render('home', {name: "Garima"})
})

app.get('/ping', (req, res) => { // normal url
    return res.json(
        {
            status: "success",
            message: "pong",
        }
    );
}); // what to do if the user access the /ping endpoint




app.use('/api', apiRouter); //if the req url start with /api use apiRouter





app.all('*', (req, res) => {
    return res.status(404).json(
        {
            message: "NOT FOUND"
        }
    );
});

// define a port and attach it to the express
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
