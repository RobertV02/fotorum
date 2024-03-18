fetch('https://api.fotorum.ru/getKeys')
  .then(response => response.json())
  .then(keys => {
    keys.forEach(key => {
      const img = new Image();
      img.src = `https://api.fotorum.ru/static/${key}`;

      img.onload = function() {
        const width = img.width;
        const height = img.height;

        const card = document.createElement('div');
        card.classList.add('card');

        const aspectRatio = width / height;
        const cardHeight = 200;

        card.style.width = `${cardHeight * aspectRatio}px`;
        card.style.height = `${cardHeight}px`;

        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        card.appendChild(imgElement);

        document.querySelector('.cards').appendChild(card);
      };
    });
  })
  .catch(error => console.error('Error during fetch operation:', error));

// Находим dropArea и добавляем обработчики событий
const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
const chooseImageButton = document.getElementById('chooseImageButton');
const previewContainer = document.getElementById('previewContainer');
const key = document.getElementById('key');
const fileName = document.getElementById('fileName');
const submitButton = document.getElementById('submitForm');

// Обработчик при наведении файлов на область
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault(); // Предотвращаем стандартное поведение браузера
  dropArea.classList.add('dragover'); // Добавляем стили для активного состояния
});

// Обработчик при отпускании файла в области или выборе файла через кнопку
dropArea.addEventListener('drop', handleFileSelect);
chooseImageButton.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', handleFileSelect);
submitButton.addEventListener('click', submitForm);

let uploadedFile; 
async function handleFileSelect(e) {
  e.preventDefault();
  dropArea.classList.remove('dragover');

  uploadedFile = e.type === 'drop' ? e.dataTransfer.files[0] : fileInput.files[0];

  console.log(uploadedFile)
  

  if (uploadedFile ) {
    await showPreview();
  }
}

async function showPreview() {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = function () {
      const preview = document.getElementById('preview');
      preview.src = reader.result;

      // Скрываем область и показываем превью изображения
      dropArea.style.display = 'none';
      previewContainer.style.display = 'block';
      fileName.style.display = 'block';
      submitButton.style.display = 'block';

      resolve();  // Резолвим Promise после завершения загрузки и отображения превью
    };

    reader.readAsDataURL(uploadedFile); // Читаем файл как data URL
  });
}

// Получить имя файла без расширения (асинхронно)
function getFileNameWithoutExtensionAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function () {
      const nameWithoutExtension = file.name.replace(/\.[^/.]+$/, ''); // Получаем имя файла без расширения
      resolve(nameWithoutExtension);
    };
    reader.readAsDataURL(file);
  });
}

function submitForm()
{
  let fileNameValue = document.getElementById('fileName').value;

      // Проверяем, было ли что-то введено
      if (fileNameValue.trim() !== '') {
        // Если что-то введено, формируем значение для поля key
        key.value = fileNameValue + '.png';
        return true;
      } else {
        key.value = uploadedFile.name;
        return false;
      }

}
