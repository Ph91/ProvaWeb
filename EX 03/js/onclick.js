function validar(){
    var n1 = document.getElementById("login").value;
    var n2 = document.getElementById("senha").value;

    if(n1 == ""){
        alert("Preencha o campo de Login")
        return false;
    }
    if(n2 == ""){
        alert("Preencha o campo senha");
        return false;
    }
    
}