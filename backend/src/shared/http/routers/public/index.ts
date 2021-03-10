import { Router } from 'express';

import { celebrate, Joi } from 'celebrate';

import { UserController } from '../../../../controllers/UserController';

const router = Router();

const userController = new UserController();

router.post('/', userController.show);

router.post('/signup', celebrate({
  body: Joi.object().keys({
    username: Joi.string().required().min(5).max(15),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).max(25)
  })
}), userController.create);

export default router;