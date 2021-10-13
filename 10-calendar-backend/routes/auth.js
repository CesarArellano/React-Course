/*
  Ruta de Usuarios / Auth
  host + api/auth/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, userLogin, revalidateToken } = require('../controllers/auth');

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
  ],
  userLogin
);

router.get('/renew', revalidateToken);

module.exports = router;