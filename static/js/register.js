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

// Нажатие клавиши Enter для перехода к окну ввода паролей

document.getElementById("login").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var login = document.getElementById("login").value;
        
        if (login.length >= 6 && /^[a-zA-Z0-9]+$/.test(login)) {
            event.preventDefault();
            document.getElementById("pass").focus();
            document.querySelector(".ModalPassword").style.display = "block";
        } else if (login.length < 6) {
            event.preventDefault();
            alert("Логин должен содержать как минимум 6 символов.");
        } else {
            event.preventDefault();
            alert("Логин может содержать только латинские буквы и цифры.");
        }
    }
});

// Нажатие кнопки мыши для перехода к окну ввода паролей

document.querySelectorAll(".CheckLogin").forEach(function(check) {
    check.addEventListener("click", function() {
        var login = document.getElementById("login").value;
        
        if (login.length >= 6 && /^[a-zA-Z0-9]+$/.test(login)) {
            document.getElementById("pass").focus();
            document.querySelector(".ModalPassword").style.display = "block";
        } else if (login.length < 6) {
            alert("Логин должен содержать как минимум 6 символов.");
        } else {
            alert("Логин может содержать только латинские буквы и цифры.");
        }
    });
});

// Вывод галочек в окне ввода логина

document.getElementById("login").addEventListener("input", function() {
    var login = document.getElementById("login").value;
    var checkLogin = document.querySelector(".CheckLogin");

    if (login.length >= 6) {
        checkLogin.style.display = "inline-block";
    } else {
        checkLogin.style.display = "none";
    }
});

// Вывод галочек в окне ввода паролей

document.querySelectorAll(".ModalPassword input[type='password']").forEach(function(input) {
    input.addEventListener("input", function() {
        var password1 = document.querySelector(".Password1").value;
        var password2 = document.querySelector(".Password2").value;
        var login = document.getElementById("login").value;

        // Регулярное выражение для проверки пароля
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Проверка наличия логина в пароле
        var containsLogin = password1.toLowerCase().includes(login.toLowerCase());

        if (password1 === password2 && password1.length >= 8 && passwordPattern.test(password1) && !containsLogin) {
            document.querySelector(".CheckPassword1").style.display = "inline-block";
            document.querySelector(".CheckPassword2").style.display = "inline-block";
        } else {
            document.querySelector(".CheckPassword1").style.display = "none";
            document.querySelector(".CheckPassword2").style.display = "none";
        }
    });
});
