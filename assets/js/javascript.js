// Add to the existing <script> in HTML
document.addEventListener('DOMContentLoaded', () => {
    // Existing GIF background code
    const banner = document.querySelector('.banner');
    const gifPath = 'assets/img/animated-bg.gif';
    const fallbackImage = 'assets/img/avatar.jpg';
    const img = new Image();
    img.src = gifPath;
    img.onload = () => {
        console.log('GIF loaded successfully');
        banner.style.backgroundImage = `url('${gifPath}')`;
    };
    img.onerror = () => {
        console.error('Failed to load GIF, using fallback');
        banner.style.backgroundImage = `url('${fallbackImage}')`;
    };

    // Typewriter effect
    const textElement = document.querySelector('.banner-content h1 span');
    const text = textElement.textContent;
    textElement.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(type, 150); // 150ms per character
        } else {
            textElement.classList.add('blink'); // Add blinking cursor after typing
        }
    }
    setTimeout(type, 1000); // Start after fadeInUp (1s)
});
