let currentSlide = 0;
const slides = [
    "https://KISHINAMI-1.github.io/usagihara.github.io/images/01-01.png",
    "https://KISHINAMI-1.github.io/usagihara.github.io/images/IMG_0269.webp"
];
const slideDuration = 3000; // スライドの切り替え時間（ミリ秒）

function showMainContent() {
    document.getElementById('ageCheck').style.display = 'none';
    document.getElementById('mainContent').style.display = 'flex';
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
    document.getElementById('mainContent').style.display = 'flex';
    document.getElementById('homeContent').style.display = 'none';
}

function prevImage() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlide();
}

function nextImage() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlide();
}

function updateSlide() {
    const img = document.getElementById('displayedImage');
    img.style.opacity = 0; // フェードアウト
    setTimeout(() => {
        img.src = slides[currentSlide];
        img.style.opacity = 1; // フェードイン
    }, 1000); // フェードアウトの時間に合わせる
}

function startSlideShow() {
    setInterval(nextImage, slideDuration); // スライドショーを自動で切り替える
}

// 初期表示で年齢確認を表示
document.getElementById('ageCheck').style.display = 'block';

// ボタンイベントリスナーを追加
document.getElementById('prevImage').addEventListener('click', prevImage);
document.getElementById('nextImage').addEventListener('click', nextImage);
