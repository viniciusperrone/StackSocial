import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.json({
    "message": "page signin"
  })
});

router.post('/signup', (req, res) => {

  return res.json({
    "message": "page signup"
  });
});

export default router;