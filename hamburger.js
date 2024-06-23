
//José Alexander Rubio González 0801199907671
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerMenu = document.querySelector('.header-menu');

    menuToggle.addEventListener('click', function () {
        headerMenu.classList.toggle('expanded');
    });
});