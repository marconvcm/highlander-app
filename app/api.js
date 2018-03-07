import fetch from "cross-fetch";

export default (endpoint, method = "GET", body = {}) => {
    return fetch(
        `https://highlander-server.herokuapp.com/${endpoint}`, {
        method: "POST", 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(body)
    })
}