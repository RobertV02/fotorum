// Получение параметра key из URL, декодирование и формирование URL изображения
var params = new URLSearchParams(window.location.search);
var key = decodeURIComponent(params.get('key'));
var imageUrl = 'https://api.fotorum.ru/static/' + key;

console.log('Image URL:', imageUrl);

// Установите изображение при загрузке страницы
var imagePreview = document.getElementById('imagePreview');
imagePreview.onload = function() {
    console.log('Image dimensions:', imagePreview.width, 'x', imagePreview.height); // Добавим эту строку для отладки
};

imagePreview.src = imageUrl;

// Функция для скачивания изображения
function downloadImage() {
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'downloaded_image.jpg';
            link.click();
        });
}

// Функция для копирования ссылки на изображение
function copyLink() {
    var copyBtn = document.getElementById('copyLinkBtn');
    var input = document.createElement('input');
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    // Изменяем текст кнопки на "Ссылка скопирована!" на некоторое время
    copyBtn.innerText = 'Ссылка скопирована!';
    setTimeout(function() {
        copyBtn.innerText = 'Скопировать ссылку';
    }, 2000);
}
