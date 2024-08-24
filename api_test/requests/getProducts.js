const {BASE_URL} = require("../baseurl");

function getProductList(){
    return fetch(BASE_URL + "productsList", {
        method: "GET",
        redirect: "follow"
    });
}

module.exports = {
    getProductList
}
