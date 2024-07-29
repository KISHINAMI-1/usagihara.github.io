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
