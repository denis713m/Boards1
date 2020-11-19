const express = require('express');
const router = express.Router();
const test = require('../middleware/test');
const userController = require('../controllers/userController');
const passwordMiddleware = require ('../middleware/password');


router.get('/', (req, res) => {
   res.send('Hello World')
 });

//router.get('/1', registrartion);

router.get('/2', (req, res) => {
    res.send('3Hello World')
  });

router.use('/registration', 
  passwordMiddleware.hashPass,
  userController.registrationUser);
router.use('/login', 
  userController.loginUser);

router.use('/getUser', 
  userController.getUser);

module.exports = router;