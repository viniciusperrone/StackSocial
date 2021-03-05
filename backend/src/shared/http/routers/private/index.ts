import { Router } from 'express';

const router = Router();

router.get('/dashboard', (req, res) => {
  return res.json({
    "router": "dashboard"
  });
});

router.get('/post', (req, res) => {
  return res.json({
    "router": "post"
  });
});

router.get('/profile', (req, res) => {
  return res.json({
    "router": "profile"
  });
});

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
