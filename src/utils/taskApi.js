import tokenService from "./tokenService";

const BASE_URL = '/api/tasks/';

export function create(task){
    // should it be task or data? im sending in the data of my task? so instead of copying the params in pupstagram, i could still keep it as data and pass that in the stringify thing?
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: new Header({'Content-Type': 'application/json', Authorization: "Bearer " + tokenService.getToken()})
    }).then((responseFromTheServer) => {
        if(responseFromTheServer.ok) return responseFromTheServer.json()

        return responseFromTheServer.json().then(res => {
            console.log(res, "response in Pst creat fun in UTILS folder")
            throw new Error('somethings wrong in create post')
        })
    })
}