import instance from '../Config/axios'


export function getProducts() {
    return instance.get("/products/")
    
}


export function getProduct(id) {
    return instance.get(`/products/${id}`)
}

/*
export function getProductFromAPI(idProduct) {
    return instance.get("/posts/"+idProduct)
}
*/
