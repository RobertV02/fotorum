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

function removePlaceholder(element) {
    element.removeAttribute('placeholder');
}

function restoreLogin(element) {
    if (!element.value.trim()) {
        element.setAttribute('placeholder', 'Введите логин');
    }
}

function restorePassword(element) {
    if (!element.value.trim()) {
        element.setAttribute('placeholder', 'Введите пароль');
    }
}