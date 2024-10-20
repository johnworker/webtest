// 主導航滑動菜單
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    menuButton.addEventListener('click', function () {
        menu.classList.toggle('menu-open');
    });
});

// 已有滾動動畫 - 將visible類加到合適的section
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.fade-in-section');
    const triggerPoint = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// 滑動輪播圖
// 修改輪播圖的顯示邏輯，讓幻燈片有平滑過渡
let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach(slide => slide.classList.remove('active'));

    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = slideIndex;
    }

    slides[currentSlide].classList.add('active');
}

document.querySelector('.next-slide').addEventListener('click', function () {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev-slide').addEventListener('click', function () {
    showSlide(currentSlide - 1);
});

// 表單提交與驗證
document.querySelector('form').addEventListener('submit', function (event) {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    let valid = true;

    if (name.value.trim() === '') {
        valid = false;
        alert('請輸入你的名字');
    }

    if (!email.value.match(/^\S+@\S+\.\S+$/)) {
        valid = false;
        alert('請輸入有效的電子郵件');
    }

    if (!valid) {
        event.preventDefault();
    }
});

// 動態加載內容
window.addEventListener('scroll', function () {
    const content = document.querySelector('.more-content');
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        loadMoreContent();
    }
});

function loadMoreContent() {
    const newContent = document.createElement('div');
    newContent.className = 'additional-section';
    newContent.innerText = '這是動態加載的內容...';
    document.body.appendChild(newContent);
}