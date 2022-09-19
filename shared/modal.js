document.querySelectorAll('.kep').forEach( image => {
    image.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup-img').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}
