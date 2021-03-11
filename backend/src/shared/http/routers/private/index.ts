import { Router } from 'express';

import { celebrate, Joi } from 'celebrate';

import { PostController } from '../../../../controllers/PostController';
import { UserController } from '../../../../controllers/UserController';

import isAuthenticated from '../../../../middlewares/isAuthenticated';

const router = Router();

const postController = new PostController();
const userController = new UserController();

router.use(isAuthenticated);

router.get('/dashboard', postController.getPost);

// http://localhost:3333/post?id=1


router.post('/post', celebrate({
  body: Joi.object().keys({
    title: Joi.string().required().min(1).max(15),
    content: Joi.string().required().min(1).max(30)
  })
}), postController.create);

router.put('/post/update/', celebrate({
  body: Joi.object().keys({
    title: Joi.string().required().min(1).max(15),
    content: Joi.string().required().min(1).max(30)
  })
}), postController.update);

router.put('/profile/:id', celebrate({
  body: Joi.object().keys({
    username: Joi.string().required().min(5).max(15),
    email: Joi.string().required().email(),
  })
}), userController.update);

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
