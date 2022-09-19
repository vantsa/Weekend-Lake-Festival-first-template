document.querySelectorAll('.kep').forEach(image => {
    image.onclick = (e) =>{
        var url = e.target.dataset.url;
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video iframe').src = url;
    }
})

document.querySelector('.popup-video').onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none';
}