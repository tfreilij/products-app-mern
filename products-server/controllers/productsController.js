const axios = require('axios');
const jwt = require('jsonwebtoken');

module.exports = {
    getProduct: (req,res,next)  => {

        
        const id = req.params.id;

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( response  =>  {
            console.log(response.data)
            res.setHeader('Content-Type', 'application/json');
            res.json(response.data);
        })
        .catch( error => console.log(error)) ;
        
      
    },

    getProducts: (req,res,next)  => {
        
        const token = req.body.token;

        //const verified = jwt.verify(token,"key");

        //console.log(verified);

        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        .then( response  =>  {

            const data = response.data.slice(0,4)
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch( error => console.log(error));


    }
}

