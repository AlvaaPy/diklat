import express from 'express';
import { create, index } from '../controllers/postController.js';


const router = express.Router();

// POST
router.post("/book", create)

//Get
router.get("/book", index)


export default router;