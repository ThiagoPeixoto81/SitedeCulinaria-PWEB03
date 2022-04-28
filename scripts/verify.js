function validar(){
    var input_name = document.getElementById("name");
    var input_email = document.getElementById("email");
    let input_senha = document.getElementById("senha");

    if (input_name.value == ""){
        alert("Nome está vazio");

        input_name.focus();

        return;
    }else if (input_email.value == ""){
        alert("Insira seu email");

        input_email.focus();
        return;
    }else if (input_senha.value == ""){
        alert("insira sua senha");
        input_senha.focus();
        return;
    }else{
        window.location.href = "./redirect.html"
    }
}