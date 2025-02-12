const apiKey = 'AIzaSyAfH5HUi8XmzgcvQ3JzkT5-6GlpbtdG0sg'
const address = "Rua das Graças 1040";
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}`;
document.getElementById("map-frame").src = mapUrl;


const imgs = document.querySelectorAll('.img-menor');
    imgs.forEach(img => {
    img.addEventListener("mouseover", function () {
        const imgExibida = document.getElementById('imgExibida');
        imgExibida.src = img.src; 
    });
    }); 