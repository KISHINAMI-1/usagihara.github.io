let currentSlide = 0;
const slides = [
    "https://KISHINAMI-1.github.io/usagihara.github.io/images/01-01.png",
    "https://KISHINAMI-1.github.io/usagihara.github.io/images/IMG_0269.webp"
];
const slideDuration = 3000; // スライドの切り替え時間（ミリ秒）

function showMainContent() {
    document.getElementById('ageCheck').style.display = 'none';
    var mainContent = document.querySelectorAll('#mainContent');
    mainContent.forEach(function(element) {
        element.style.display = 'block';
    });
    document.getElementById('homeContent').style.display = 'none';
    startSlideShow(); // スライドショーを開始
}

function denyAccess() {
    alert("18歳未満の方はこのサイトにアクセスできません。");
}

function showHome() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('homeContent').style.display = 'block';
}

function backToMain() {
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('homeContent').style.display = 'none';
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
    const img = document.getElementById('slide-image');
    img.style.opacity = 0; // フェードアウト
    setTimeout(() => {
        img.src = slides[currentSlide];
        img.style.opacity = 1; // フェードイン
    }, 1000); // フェードアウトの時間に合わせる
}

function startSlideShow() {
    setInterval(nextSlide, slideDuration); // スライドショーを自動で切り替える
}

// 初期表示で年齢確認を表示
document.getElementById('ageCheck').style.display = 'block';
