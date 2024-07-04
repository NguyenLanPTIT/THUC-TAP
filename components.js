document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        const icon = this.querySelector('.toggle-icon');
        const itemContent = header.nextElementSibling;

        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== itemContent) {
                content.style.display = 'none';
                content.previousElementSibling.querySelector('.toggle-icon').src = './assets/images/play3.svg'; 
            }
        });

        if (window.getComputedStyle(itemContent).display === 'none') {
            itemContent.style.display = 'block';
            icon.src = './assets/images/down.svg';
        } else {
            itemContent.style.display = 'none';
            icon.src = './assets/images/play3.svg';
        }
    });
});