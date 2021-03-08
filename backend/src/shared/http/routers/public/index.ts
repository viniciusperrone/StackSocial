import { Router } from 'express';

import { UserController } from '../../../../controllers/UserController';

const router = Router();

const userController = new UserController();

router.post('/', userController.show);

router.post('/signup', userController.create);

export default router;