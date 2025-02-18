const apiKey = 'AIzaSyAfH5HUi8XmzgcvQ3JzkT5-6GlpbtdG0sg'
const address = "Avenida Padre Cacique, 890";
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}`;
document.getElementById("map-frame").src = mapUrl;

//Carregamento de imagens
function loadImages() {
    const gallery = document.getElementById('imageGallery');
    const images = JSON.parse(localStorage.getItem('hotel_images')) || [
        'images/front.jpg',
        'images/quarto.jpg',
        'images/quarto2.jpg'
    ];

    // Adiciona as imagens dinamicamente
    gallery.innerHTML = images.map(img => `<img class="img-menor" src="${img}" alt="Foto do hotel">`).join('');

    // Adiciona o evento mouseover após as imagens serem carregadas
    const imgs = document.querySelectorAll('.img-menor');
    imgs.forEach(img => {
        img.addEventListener("mouseover", function () {
            const imgExibida = document.getElementById('imgExibida');
            imgExibida.src = img.src;
        });
    });
}

//Realização de reservas
const reservationButtons = document.querySelectorAll('.reservation__btn');

reservationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tipo = btn.getAttribute('data-tipo');
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;

        if (!checkin || !checkout) {
            alert('Preencha as datas de check-in e check-out!');
            return;
        }

        const reservation = { tipo, checkin, checkout };
        const reservations = JSON.parse(localStorage.getItem('hotel_reservations')) || [];
        reservations.push(reservation);
        localStorage.setItem('hotel_reservations', JSON.stringify(reservations));

        alert('Reserva feita com sucesso!');
    });
});

// Aguarda o carregamento do DOM antes de executar
document.addEventListener("DOMContentLoaded", loadImages);



