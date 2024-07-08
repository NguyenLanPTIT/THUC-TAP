// video
const seekBar = document.getElementById('seekBar');
seekBar.addEventListener('input', function() {
    const percentage = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #ddd 0%, #ddd ${percentage}%, #b7b2b2 ${percentage}%, #b7b2b2 100%)`;
});




function pad(value) {
    return value < 10 ? '0' + value : value;
}
// season

var headers = document.getElementsByClassName("accordion-header");
for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', function (header) {
        var isActive = this.classList.contains("active");
        var content = this.nextElementSibling;
        var icon = this.querySelector('.toggle-icon');


        Array.from(headers).forEach(function (header) {
            var otherContent = header.nextElementSibling;
            var otherIcon = header.querySelector('.toggle-icon');
            otherContent.style.maxHeight = null;
            otherIcon.src = './assets/images/play3.svg';
            header.style.borderRadius = '5px';
            header.classList.remove('active');
        });

        if (!isActive) {
            this.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
            icon.src = './assets/images/down.svg';
            this.style.borderRadius = '5px 5px 0 0';
        } else {
            this.classList.remove("active");
            content.style.maxHeight = null;
            icon.src = './assets/images/play3.svg';
            this.style.borderRadius = '5px';
        }
    });
}
