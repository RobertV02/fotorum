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
  const nameBox = document.querySelector('.NameBox');
  if (files.length === 1 && files[0].type.includes('image')) {
    let fileName = files[0].name;
    // Удаление расширения файла
    const dotIndex = fileName.lastIndexOf('.');
    if (dotIndex !== -1) {
      fileName = fileName.substring(0, dotIndex);
    }
    nameBox.value = fileName;
  } else {
    nameBox.value = ''; // Очистить поле ввода, если файл не является изображением
  }
}


function submitForm() {
  const descriptionInput = document.querySelector('.NameBox');
  const descriptionValue = descriptionInput.value.trim(); // Удаляем лишние пробелы в начале и конце

  document.querySelector('form').submit();
}