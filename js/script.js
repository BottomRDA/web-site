// Получаем все ссылки на странице, которые начинаются с '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Для каждой такой ссылки добавляем обработчик события 'click'
    anchor.addEventListener('click', function (e) {
        // Отменяем стандартное поведение браузера при клике по ссылке
        e.preventDefault();
        // Прокручиваем страницу к элементу, id которого указан в href текущей ссылки
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            // Указываем, что прокрутка должна быть плавной
            behavior: 'smooth'
        });
    });
});


// Получаем элемент формы с id 'response__form'
document.getElementById('response__form').addEventListener('submit', function(event) {
    // Останавливаем стандартное поведение браузера при отправке формы
    event.preventDefault();
    // Выводим сообщение об успешной записи на церемонию
    alert('Вы успешно записались на церемонию!\n Для уточнения даты и времени ожидайте звонка!');
});


///ПРОКРУТКА///

// Добавляем обработчик события 'scroll' для глобального объекта 'window'
window.addEventListener('scroll', function() {
    // Получаем ссылку на элемент 'footer' на странице
    const footer = document.querySelector('footer');
    // Получаем ссылку на элемент с классом 'navigation--gradient'
    const navigation = document.querySelector('.navigation--gradient');
    // Получаем размер элемента 'footer' и его позицию относительно окна браузера
    const footerRect = footer.getBoundingClientRect();

    // Проверяем, находится ли верхняя граница 'footer' выше нижней границы видимой области окна браузера
    if (footerRect.top < window.innerHeight) {
        // Если да, то скрываем элемент 'navigation'
        navigation.style.display = 'none';
    } else {
        // Если нет, то отображаем элемент 'navigation' с использованием flexbox
        navigation.style.display = 'flex';
    }
});

window.addEventListener('scroll', function() {
    const form = document.querySelector('form');
    const button = document.querySelector('.button__container');
    const formRect = form.getBoundingClientRect();

    if (formRect.top < window.innerHeight) {
        button.style.display = 'none';
    } else {
        button.style.display = 'flex';
    }
});


///СЛАЙДЕР///
let currentIndex = 0;
const totalImages = 5; // Общее количество изображений
let visibleImages; // Количество отображаемых изображений

document.addEventListener('DOMContentLoaded', () => {
    updateVisibleImages();
    showSlide(currentIndex);
});

window.addEventListener('resize', () => {
    updateVisibleImages();
    showSlide(currentIndex);
});

function updateVisibleImages() {
    const width = window.innerWidth;
    if (width <= 780) {
        visibleImages = 1;
    } else if (width <= 1130) {
        visibleImages = 2;
    } else {
        visibleImages = 3;
    }
}

function showSlide(index) {
    const images = document.querySelectorAll('.images img');
    images.forEach((image, i) => {
        if (i >= index && i < index + visibleImages && i < totalImages) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextSlide() {
    if (currentIndex < totalImages - visibleImages) {
        currentIndex++;
        showSlide(currentIndex);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
}
