// Кнопки в меню и их переадресация
function redirectToProfile() { window.location.href = "https://fotorum.ru/"; }
function redirectToFeed() { window.location.href = "https://fotorum.ru/"; }
function redirectToUpload() { window.location.href = "https://fotorum.ru/"; }
function redirectToSupport() { window.location.href = "https://fotorum.ru/"; }
function redirectToSettings() { window.location.href = "https://fotorum.ru/"; }
function redirectToAuth() { window.location.href = "https://fotorum.ru/"; }

// Получаем ссылку на элемент "Vector" (иконку меню) и после ссылку на меню
const menuButton = document.getElementById('menuButton');
const menu = document.querySelector('.Menu');

// Добавляем слушатель события на клик по иконке меню
menuButton.addEventListener('click', function() {
    // Проверяем, открыто ли уже меню
    const isOpen = menu.classList.contains('open');
    // Если меню уже открыто, то закрываем его, иначе открываем
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