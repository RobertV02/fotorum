document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search-txt');

  searchInput.addEventListener('input', function () {
    if (this.value.length > 0) {
      this.parentNode.classList.add('active');
    } else {
      this.parentNode.classList.remove('active');
    }
  });
});

// Функция для открытия первого модального окна
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Функция для закрытия первого модального окна
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// Функция для открытия второго модального окна
function openSecondModal() {
  var modal = document.getElementById('secondModal');
  modal.style.display = "block";
}

// Функция для закрытия второго модального окна
function closeSecondModal() {
  var modal = document.getElementById('secondModal');
  modal.style.display = "none";
}


// Для картинки (card)
function getTitle(){

}

// Для описания картинки
function getBody(){
  
}
