const menuButton = document.getElementById('menuButton');
const menu = document.querySelector('.Menu');

menuButton.addEventListener('click', function() {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
});

const share = document.getElementById('share');
const sharemenu = document.querySelector('.ShareMenu');

share.addEventListener('click', function() {
    const isOpen = sharemenu.classList.contains('open');
    if (isOpen) {
        sharemenu.classList.remove('open');
    } else {
        sharemenu.classList.add('open');
    }
});