const axios = require('axios');

const getProduct = (id)  => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

module.exports = { getProduct : getProduct }