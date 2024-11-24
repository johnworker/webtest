// 導覽列平滑移動
document.querySelectorAll('.header nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// 第一區動畫
let slideIndex = 0;

// 初始化幻燈片
function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => (slide.style.display = 'none'));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // 3秒切換一次
}


// 啟動幻燈片
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});

// 雜誌滾動區
document.querySelector('.view-all-button').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#journal-all');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// 選單連結區
document.querySelectorAll('.menu-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        switch (index) {
            case 0:
                window.location.href = '#price';
                break;
            case 1:
                window.location.href = '#gallery';
                break;
            case 2:
                window.location.href = '#journal';
                break;
            case 3:
                window.location.href = '#access';
                break;
        }
    });
});


// 頁尾區微動畫效果
document.querySelectorAll('.footer a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
