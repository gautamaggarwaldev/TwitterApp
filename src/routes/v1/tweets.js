import express from 'express';

const router = express.Router(); //Create the router object

router.get('/', (req, res) => {
    return res.json(
        {
            message: "Welcome to the tweet router from v1"
        }
    );
});


router.get('/:id', (req, res) => {
    return res.json(
        {
            message: "Welcome to the tweet router from v1",
            id: req.params.id
        }
    );
});

export default router; //Export the router object