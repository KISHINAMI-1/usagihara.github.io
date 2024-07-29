let currentSlide = 0;
const slides = [
    "https://KISHINAMI-1.github.io/usagihara.github.io/images/01-01.png",
    "https://KISHINAMI-1.github.io/usagihara.github.io/images/IMG_0269.webp"
];

function showMainContent() {
    document.getElementById('ageCheck').style.display = 'none';
    var mainContent = document.querySelectorAll('#mainContent');
    mainContent.forEach(function(element) {
        element.style.display = 'block';
    });
}

function denyAccess() {
    alert("18歳未満の方はこのサイトにアクセスできません。");
}

function showHome() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('homeContent').style.display = 'block';
}

function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlide();
}

function nextSlide() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlide();
}

function updateSlide() {
    document.getElementById('slide-image').src = slides[currentSlide];
}

// 初期表示で年齢確認を表示
document.getElementById('ageCheck').style.display = 'block';
