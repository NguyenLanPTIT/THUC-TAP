
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.toggle-icon');
        if (content.style.display === 'none' || !content.style.display) {
            document.querySelectorAll('.accordion-content').forEach(el => {
                content.previousElementSibling.querySelector('.toggle-icon').src = './assets/images/play3.svg';
                el.style.display = 'none';
                this.style.borderRadius = '5px';
            });
            content.style.display = 'block';
            icon.src = './assets/images/down.svg';
            this.style.borderRadius = '5px 5px 0 0';
        } 
        else {
            content.style.display = 'none';
            icon.src = './assets/images/play3.svg';
            this.style.borderRadius = '5px';
        }
    });
});



