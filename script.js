//Script básico apenas para o menu lateral
document.addEventListener("DOMContentLoaded", function() {

    const menuToggle = document.querySelector(".menu-toggle");
    const menuLateral = document.querySelector(".menu-lateral");

    if (menuToggle && menuLateral) {
        menuToggle.addEventListener("click", function() {
            menuLateral.classList.toggle("menu-lateral-aberto");
        });
    }
});