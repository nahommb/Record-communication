import express from 'express';
import { createBlogController,getBlogsController } from '../controllers/blogController.js';

const router = express.Router();

// Create a new blog post
router.post('/createblogs', createBlogController);

// Get all blog posts
router.get('/getblogs', getBlogsController);

export default router;