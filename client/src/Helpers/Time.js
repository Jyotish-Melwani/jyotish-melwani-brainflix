    // // functions
    function getDate(dateVar){
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    }

    export default getDate


