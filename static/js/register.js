// Кнопки в меню и их переадресация
function redirectToProfile() { window.location.href = "https://fotorum.ru/profile"; }
function redirectToFeed() { window.location.href = "https://fotorum.ru/feed"; }
function redirectToUpload() { window.location.href = "https://fotorum.ru/upload"; }
function redirectToSupport() { window.location.href = "https://fotorum.ru/support"; }
function redirectToSettings() { window.location.href = "https://fotorum.ru/settings"; }
function redirectToAuth() { window.location.href = "https://fotorum.ru/auth"; }

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
        element.setAttribute('placeholder', 'Придумайте логин');
    }
}

function restorePassword1(element) {
    if (!element.value.trim()) {
        element.setAttribute('placeholder', 'Придумайте пароль');
    }
}

function restorePassword2(element) {
    if (!element.value.trim()) {
        element.setAttribute('placeholder', 'Подтвердите пароль');
    }
}

document.querySelectorAll(".CheckLogin").forEach(function(check) {
    check.addEventListener("click", function() {
        var login = document.getElementById("login").value;
        
        if (login.length >= 6 && /^[a-zA-Z0-9]+$/.test(login)) {
            document.getElementById("pass").focus();
            document.querySelector(".ModalPassword").style.display = "block";
        } else if (login.length < 6) {
            alert("Логин должен содержать как минимум 6 символов.");
        } else {
            alert("Логин может содержать только буквы и цифры.");
        }
    });
});

document.getElementById("login").addEventListener("input", function() {
    var login = document.getElementById("login").value;
    var checkLogin = document.querySelector(".CheckLogin");

    if (login.length >= 6) {
        checkLogin.style.display = "inline-block";
    } else {
        checkLogin.style.display = "none";
    }
});


document.querySelectorAll(".ModalPassword input[type='password']").forEach(function(input) {
    input.addEventListener("input", function() {
        var password1 = document.querySelector(".Password1").value;
        var password2 = document.querySelector(".Password2").value;

        if (password1 === password2 && password1 !== "" && password2 !== "") {
            document.querySelector(".CheckPassword1").style.display = "inline-block";
            document.querySelector(".CheckPassword2").style.display = "inline-block";
        } else {
            document.querySelector(".CheckPassword1").style.display = "none";
            document.querySelector(".CheckPassword2").style.display = "none";
        }
    });
});
