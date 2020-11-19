const db = require('../models');
const generateTokens = require('../middleware/generateTokens');
const passwordMiddleware = require('../middleware/password');
const userQuerie = require('../queries/usersQueries');
const jwt = require('jsonwebtoken');

module.exports.registrationUser = async (req, res, next) =>{
    try{
        const user = req.body;
        user.password = req.hashPass;
        tokens = generateTokens.generateTokens(user);
        const newUser = await db.User.create({...user, ...tokens});
        res.send({...tokens, id:newUser.id});
    }
    catch (e){
        next(e);
    }
    
};

module.exports.loginUser = async (req, res, next) =>{
    try{
        const user = await db.User.findOne({where:{email: req.body.email}});
        if (!user) throw new Error('Ooops');
        await passwordMiddleware.passwordCompare(req.body.password, user.password);
        tokens = generateTokens.generateTokens(user);
        await userQuerie.updateUserTokens(tokens, user.id)
        res.send({
            firstName: user.firstName,
            userId: user.id,
            lastName: user.lastName,
            displayName: user.displayName,
            accessToken: tokens.accessToken
        });
    }
    catch (e){
        next(e);
    }
    
};

module.exports.getUser = async (req, res, next) =>{
    console.log(req.headers);
    const accessToken = req.headers.authorization;
    if ( !accessToken) {
      next(new Error('need token'));
    }
    try {
      const tokenData = jwt.verify(accessToken, 'SECRET_FOR_TOKEN');
      const userId = tokenData.userId;
      const user = await db.User.findOne({where:{id: userId}});
      res.send({
        firstName: user.firstName,
        userId: user.id,
        lastName: user.lastName,
        displayName: user.displayName,
        accessToken: tokens.accessToken
    });
    } catch (err) {
      next(err);
    }
    
};