const User = require('../models/UserModels')
const Client = require('../models/ClientModels')

class ClientController {

    static async registerClient (req,res) {
        try {
            let client = new Client(req.body);
            await client.save()
            return res.status(201).send({
                status: 201,
                message: 'Client successfully added',
                client
            });
  
        res.send(
            { 
              status: 200,
              message: 'client registered successfully',
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

    static async allClients (req,res) {
        try {
            const data = await Client.find({});
            return res.status(200).send(
              { 
                status: 200,
                message: 'All available Clients',
                data
              });
          } catch(error) {
            return res.status(400).send(
              { 
                status: 400,
                message: 'Oops failed to fetch clients',
                error
              });
          }
    }
 }

module.exports = ClientController;
