import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';


dotenv.config();

const router = express.Router();

router.post('/posts', async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const newPost = new Post({ name, prompt, photo });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

export default router;
