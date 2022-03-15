const User = require('../models/UserModels')

class UserController {

    static async login (req,res) {
        try {
          // findone is a mongoose function
            let user = await User.findOne({email: req.body.email }).exec();
        // if(!user) {
        //     return res.status(400).send(
        //       { 
        //         status: 400,
        //         message: '',
        //         error 
        //       }
        //     );
        // }
  
        res.send(
            { 
              status: 200,
              message: 'Logged in successfully',
              data: user 
            }
          );
        } catch (error) {
            return res.status(400).send(
                { 
                  status: 400,
                  message: 'The email does not exist',
                  error
                });      
        }
    }

    static async register (req,res) {
        let user = new User(req.body);
        await user.save()
        return res.status(201).send({
            status: 201,
            message: 'User successfully added',
            user
        });
    
    }
 }

module.exports = UserController;
