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

function restorePlaceholder(element) {
    if (!element.value.trim()) {
        element.setAttribute('placeholder', 'Введите название');
    }
}
function dragOverHandler(event) {
  event.preventDefault();
}
function dropHandler(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  handleFiles(files);
  // Устанавливаем выбранный файл в input[type=file]
  const fileInput = document.getElementById('fileInput');
  fileInput.files = files;
}

function handleFileSelect(event) {
  const files = event.target.files;
  handleFiles(files);
}

function handleFiles(files) {
  const dropText = document.querySelector('.DropText');
  if (files.length === 1 && files[0].type.includes('image')) {
    dropText.textContent = files[0].name;
  } else {
    dropText.textContent = 'Перетащите изображение в данное окно';
  }
}

function submitForm() {
  const descriptionInput = document.querySelector('.NameBox');
  const descriptionValue = descriptionInput.value.trim(); // Удаляем лишние пробелы в начале и конце

  document.querySelector('form').submit();
}