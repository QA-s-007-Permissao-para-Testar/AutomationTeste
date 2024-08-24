const {BASE_URL} = require("../baseurl");

function login(email, password) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

    return fetch(BASE_URL + "verifyLogin", {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    });
}

module.exports = {
    login
}