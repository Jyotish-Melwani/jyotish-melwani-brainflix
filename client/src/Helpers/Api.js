

export const API_URL = "http://localhost:8080/api/"


export const dateGet = (dateVar) => {
    return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
};