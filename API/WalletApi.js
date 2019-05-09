const URL = "http://192.168.43.17:8000/";

export function logUser(username, password){
    const url = URL+"merchant/login";

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            "username" : username,
            "password" : password
        })
    })
        .then((response) => response.json())
        .catch((error) => console.log("Une erreur est survenue lors de la collecte" + error))
}