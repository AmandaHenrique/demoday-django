let menu = document.querySelector("#menu-responsivo");
let hamburguer = document.querySelector("#hamburguer");

click = () => {
    menu.classList.toggle("showMenu")
}

hamburguer.onclick = click;