const usuariosModel = require("../models/usersModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


module.exports = {

 
    registration: async function(req, res, next) {

        
        try{
            
            let nombreElegido = req.body.usuario
            let passwordElegido = req.body.password

        
            let usuario = await usuariosModel.findOne({ usuario: nombreElegido })

            if ( usuario )
            {
                res.json({mensaje: "el usuario ya existe"})
                
            }
            else
            {
                
                let usuario = new usuariosModel( { usuario: nombreElegido, password: passwordElegido  } )
                
                usuario.save()

                
                
                res.json( {message : "usuario agregado correctamente ", informacion: usuario})
                

            }
         
        }catch(e){
            
            next(e)
        }

        res.setHeader('Content-Type', 'application/json');
        res.json({message: "users registration"});
        
        
    },

    login: async function(req, res, next) {
        
        try{

            let nombreIngresado = req.body.usuario
            let passwordIngresada = req.body.password
            let usuario = await usuariosModel.findOne({ usuario: nombreIngresado })


            if(usuario){
                if(bcrypt.compareSync(passwordIngresada, usuario.password)){
                    const token = jwt.sign({usuario:usuario._id},req.app.get('secretKey'),{expiresIn:'1h'})
                    res.json({token:token})
                }else{
                    res.json({mensaje:"Contraseña incorrecta"})
                }
            }else{
                res.json({mensaje:"el usuario no esta registrado"})
            }

        }catch(e){
            next(e)
        }
        
        res.setHeader('Content-Type', 'application/json');
        res.json({message: "users login"});
    }

}