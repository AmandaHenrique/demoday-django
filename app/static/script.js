let form = document.querySelector("form");
let inputs = document.querySelector("div#inputs");
let inputNome = document.querySelector("#id_nome");
let inputTelefone = document.querySelector("#id_telefone");
let label = document.querySelectorAll("label");


form.classList.add("form");
inputs.classList.add("inputs");
label[0].classList.add("label");
label[1].classList.add("label");


inputTelefone.setAttribute('placeholder', 'Seu Telefone');
inputNome.setAttribute('placeholder', 'Seu Nome');


