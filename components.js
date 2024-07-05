
var header = document.getElementsByClassName("accordion-header");
var i;
for (i = 0; i < header.length; i++) {
    header[i].addEventListener('click', function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    const icon = this.querySelector('.toggle-icon');
    if (content.style.maxHeight===null || !content.style.maxHeight) {
        document.querySelectorAll('.accordion-content').forEach(el => {
            content.previousElementSibling.querySelector('.toggle-icon').src = './assets/images/play3.svg';
            el.style.maxHeight = null;
            this.style.borderRadius = '5px';
        });
        content.style.maxHeight =content.scrollHeight + "px";
        icon.src = './assets/images/down.svg';
        this.style.borderRadius = '5px 5px 0 0';
    } 
    else {
        content.style.maxHeight = null;
        icon.src = './assets/images/play3.svg';
        this.style.borderRadius = '5px';
    }
 });
}
