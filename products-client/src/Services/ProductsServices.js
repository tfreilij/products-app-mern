import instance from '../Config/axios'


export function getProducts() {
    return instance.get("/")
}

/*
export function getProductFromAPI(idProduct) {
    return instance.get("/posts/"+idProduct)
}
*/
