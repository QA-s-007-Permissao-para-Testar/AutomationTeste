const {BASE_URL} = require("../baseurl");

function getUserDetails(email){
    return fetch(BASE_URL + "getUserDetailByEmail?email="+email, {
        method: "GET",
        redirect: "follow"
    });
}

module.exports = {
    getUserDetails
}