var password = "amanha";

function passcheck(){
    if(document.getElementById("pass1").value != password){
        alert("Esse não é o caminho.");
        return false;
    }
    
    if(document.getElementById("pass1").value == password){
        alert("Senha correta. aperte ok para ir para a pagina final.");
    }
}