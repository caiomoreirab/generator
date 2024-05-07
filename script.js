

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#gerarSenha");

let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890'!@#$%¨&*()_+=-/?;:]}{[,><.";

let senha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function gerarSenha() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    passwordElement.innerHTML = pass;
    senha = pass;
}

function copiarSenha() {
    alert("Senha Copiada com Sucesso!");
    navigator.clipboard.writeText(senha);
}
