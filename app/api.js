import fetch from "cross-fetch";

export default (endpoint, method = "GET", body = {}) => {

    let url = `https://highlander-server.herokuapp.com/${endpoint}`;

    let options = () => {
        if (method == "GET") { return { method: method }};
        return { 
            method, 
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
        }
    };

    return fetch(url, options()).then(r => { 
        console.log(r);
        return r;
    });
};