const express = require('express');
const app = express();




const bodyParser = require('body-parser');

const productsService = require("./services/productsService");

const urlParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();


app.get("/product/:id", (req,res,next) => {
    
    const id = req.params.id
    console.log(id);
    productsService.getProduct(id)
    .then( response  =>  {
        console.log(response.data)
        res.setHeader('Content-Type', 'application/json');
        res.json(response.data);
    })
    .catch( error => console.log(error)) 
    





    
})

app.get("/",  (req,res,next) => {

    const responseObj = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "imageUrl": "https://www.oscarbarbieri.com/media/catalog/product/cache/1/image/173dd74801682768e2c2e5018515ab09/b/l/blitz110-v8-principal.png"
        }

    res.json(responseObj);

})


app.post("/registration", jsonParser,  (req,res,next) => {
    
    console.log(req.body);

    res.send("this is /registration");
})


app.listen(3000);