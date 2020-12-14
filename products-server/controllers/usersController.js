const usuariosModel = require("../models/usersModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


module.exports = {

 
    register: async function(req, res, next) {

        
        try{
            
            let chosenName = req.body.user
            let chosenPassword = req.body.password

        
            let user = await usuariosModel.findOne({ usuario: chosenName })

            if ( user )
            {
                res.json({mensaje: "the user already exist"})
                
            }
            else
            {
                
                let user = new usuariosModel( { userName: chosenName, password: chosenPassword  } )
                
                user.save()

                
                
                res.json( {message : "user added ", information: user})
                

            }
         
        }catch(e){
            
            next(e)
        }


        
        
    },

    login: async function(req, res, next) {
        
        try{

            let name = req.body.user
            let password = req.body.password
            let user = await usuariosModel.findOne({ userName: name })
            //let secretKey = req.app.get('x-auth-token');

            
            

            if(user)
            {
                
                if(bcrypt.compareSync(password, user.password))
                {   
                    
                    const token = jwt.sign({user:user._id},'key',{expiresIn:'1h'})
                    
                    console.log(token)
                    res.json({token:token})
                }
                else
                {
                    
                    res.json({mensaje:"incorrect password"})
                }
            }
            else
            {
                res.json({mensaje:"user could not be added"})
            }

        }catch(e){
            next(e)
        }
        

    }

}