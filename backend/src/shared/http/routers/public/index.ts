import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.json({
    "router": "login"
  });
});

router.get('/signup', (req, res) => {
  return res.json({
    "router": "register"
  });
});

export default router;