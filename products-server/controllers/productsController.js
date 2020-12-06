const axios = require('axios');

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
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        .then( response  =>  {
            console.log(response.data)
            res.setHeader('Content-Type', 'application/json');
            res.json(response.data);
        })
        .catch( error => console.log(error));


    }
}

