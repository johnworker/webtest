// 捲動效果
$(function () {
    //捲動至top0的位置
    $("#arrow").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    //指定捲軸位置淡出淡入
    // $(window).scroll(function () {
    // if ($(this).scrollTop() > 200) {
    // $('#gotop').stop().fadeTo('fast', 1);
    // } else {
    // $('#gotop').stop().fadeOut('fast');
    // }
    // });
});


// 使用者滑鼠滾動時 停止所有動畫
$("html").on("mousewheel", function () {
    $("html").stop();
});

var arrow = $("#arrow")
arrow.fadeOut();

// 箭頭顯示與隱藏效果
$(window).scroll(function () {
    var windowTop = $(this).scrollTop();
    // console.log("視窗的上方:" + windowTop)

    var arrowTop = arrow.attr("data-st-top");
    var arrowTime = arrow.attr("data-st-time");
    var arrowTimeInt = parseInt(arrowTime); //將時間轉為數字(整數)

    //console.log(arrowTop)
    //console.log(arrowTime)


    //如果 視窗位置 大於等於 箭頭上方 就 淡入
    if (windowTop >= arrowTop) arrow.stop().fadeIn(arrowTimeInt);
    //否則就淡出
    else arrow.stop().fadeOut(arrowTimeInt)
});

// 動畫區域
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideInterval = 3000;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex); // 顯示第一張
setInterval(nextSlide, slideInterval); // 每4秒換一張

// 平滑滾動至對應區域
$(document).ready(function () {
    $('a[href^="#"]').click(function (event) {
        event.preventDefault();

        var target = $($(this).attr('href'));

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000); // 1000 表示動畫持續時間，可依需求調整
        }
    });
});

// 輪播器
$(document).ready(function () {
    $('.portfolio-carousel').slick({
        infinite: true,        // 無限捲動
        slidesToShow: 1,       // 一次顯示的數量
        slidesToScroll: 1,     // 一次滾動數量
        autoplay: true,        // 開啟自動撥放
        autoplaySpeed: 3000,   // 自動撥放速度
        arrows: true,          // 不顯示箭頭
        dots: false             // 不顯示點點
    });
});

// 漢堡選單
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 背景切換
const heroSection = document.querySelector('.hero-section');
let colors = ['#4caf50', '#81c784', '#ff9800'];
let currentColor = 0;

setInterval(() => {
    currentColor = (currentColor + 1) % colors.length;
    heroSection.style.background = colors[currentColor];
}, 5000);


// about section動畫
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector('.about-section');
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('animate');
            }
        },
        { threshold: 0.1 }
    );
    observer.observe(aboutSection);
});


// 添加滾動監聽器以啟動動畫
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector('.about-us-section');
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('animate');
            }
        },
        { threshold: 0.3 } // 當區域 30% 進入視窗時觸發
    );
    observer.observe(aboutSection);
});


// 滾動動畫事件
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about-us-section');
    const background = document.querySelector('.about-background');
    const scrollPosition = window.scrollY;
    const sectionTop = aboutSection.offsetTop;
    const sectionHeight = aboutSection.offsetHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const offset = (scrollPosition + windowHeight - sectionTop) / (sectionHeight + windowHeight);
        background.style.transform = `scale(1.1) translateY(${offset * 20 - 10}%)`;
    }
});
