import { Router } from 'express';

import { PostController } from '../../../../controllers/PostController';
import { UserController } from '../../../../controllers/UserController';
const router = Router();

const postController = new PostController();
const userController = new UserController();
router.get('/dashboard', postController.getPost);

// http://localhost:3333/post?id=1

router.post('/post', postController.create);

router.put('/post/update/', postController.update);

router.put('/profile/:id', userController.update);

router.get('/about', (req, res) => {
  return res.json({
    "router": "about"
  });
});

router.get('/logout', (req, res) => {
  return res.json({
    "router": "logout"
  });
});

export default router;
