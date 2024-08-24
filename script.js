document.addEventListener("DOMContentLoaded", function() {
    const mainPhotoContainer = document.getElementById('main-photo-container');
    const content = document.getElementById('content');
    const backgroundMusic = document.getElementById('background-music');

    // 照片渐显效果
    setTimeout(() => {
        mainPhotoContainer.style.opacity = "1";
        mainPhotoContainer.style.animation = "fadeInMainPhoto 3s ease-in-out forwards";
    }, 500);

    // 3秒后显示内容并播放音乐
    setTimeout(() => {
        mainPhotoContainer.style.display = 'none';
        content.style.display = 'block';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 3500);
    
    // 幻灯片切换
    let slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
});
