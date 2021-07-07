const SERVER_URL = "http://localhost:8100";


function showStatus(msg: string){
    let elem = document.getElementById("status");
    if(!elem){
        return;
    }
    else{
        elem.innerText = msg;
    }
}