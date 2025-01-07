import express from 'express';
import { createComment, getCommentById, getComments } from '../../controllers/commentController.js';

const router = express.Router(); //Create the router object

router.get('/', getComments);

router.get('/:id', getCommentById);

router.post('/', createComment);

export default router; //Export the router object