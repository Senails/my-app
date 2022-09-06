let keytoken = 'mytoken';

export function settoken(token:string){
    localStorage.setItem(keytoken,token)
}

export function gettoken():string|null{
    let token = localStorage.getItem(keytoken)
    if (token) return token
    return null
}