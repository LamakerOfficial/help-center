const event11 = window.addEventListener('scroll', function(e) {
    if(this.scrollY < 530) {
        document.getElementById('h_').style.background = 'transparent';
    } else {
        document.getElementById('h_').style.background = '#0B1725';
    }
});