
function openMenu() {
    btnOpen = document.getElementById("btn-menu");
    mainOpen = document.querySelector(".main-open");

    btnOpen.style.display = 'none';
    mainOpen.style.display = 'flex';
}

function closeMenu() {
    btnOpen = document.getElementById("btn-menu");
    mainOpen = document.querySelector(".main-open");

    mainOpen.style.display = 'none';
    btnOpen.style.display = 'flex';
}