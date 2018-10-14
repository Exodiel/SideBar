let btn = document.querySelector('.toogle-btn');

btn.addEventListener('click', e => {
    document.getElementById('sidebar').classList.toggle('active')
});