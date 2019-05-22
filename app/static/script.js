let form = document.querySelector("form");
let inputs = document.querySelector("div#inputs");
let inputNome = document.querySelector("#id_nome");
let inputTelefone = document.querySelector("#id_telefone");
let label = document.querySelectorAll("label");
let menu = document.querySelector("button");


//Adicionando as classses css no formulario gerado pelo django
form.classList.add("form");
inputs.classList.add("inputs");
label[0].classList.add("label");
label[1].classList.add("label");
inputTelefone.setAttribute('placeholder', 'Seu Telefone');
inputNome.setAttribute('placeholder', 'Seu Nome');

//Scroll do navegador


funcao = () => {
    console.log('OI')
}

menu.onclick = funcao;


