const { Router } = require('express');

const router = Router();

const { createPost, getPosts, getPost, getPostsByCategory, getPostsByAuthor, editPost, deletePost} = require('../controllers/postControllers.js')

const authMiddleware = require('../middleware/authMiddleware.js')

router.post('/create', authMiddleware, createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/categories/:category', getPostsByCategory);
router.get('/users/:id', getPostsByAuthor);
router.patch('/:id', authMiddleware, editPost);
router.delete('/:id', authMiddleware, deletePost);


module.exports = router;