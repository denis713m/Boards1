const db = require('../models');

// module.exports = test = async (req, res, err) =>{
//     try{
//         const users = await db.User.findAll({raw:true});
//         console.log(users);
//         res.send({...users[0], test: 'test'});}
//     catch (e){
//         next(e)
//     }
// };

module.exports = test = async (req, res, err) =>{

        const users = await db.User.findAll({raw:true});
        console.log(users);
        res.send(users);

};