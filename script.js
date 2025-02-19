const servicesKey = 'hotel_services';
const imagesKey = 'hotel_images';
const reservationsKey = 'hotel_reservations';

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





//Admin
//Gerenciamento de serviços


function loadServices() {
    const services = JSON.parse(localStorage.getItem(servicesKey)) || [
        '✅ Recepção 24h',
        '✅ Wi-Fi Grátis',
        '✅ Café da Manhã Incluso',
        '✅ Piscina & SPA',
        '✅ Academia',
        '✅ Restaurante & Bar',
        '✅ Serviço de Quarto',
        '✅ Estacionamento Privativo'
    ];
    const list = document.getElementById('serviceList');
    list.innerHTML = '';
    services.forEach((service, index) => {
        const li = document.createElement('li');
        li.textContent = service;
        li.onclick = () => removeService(index);
        list.appendChild(li);
    });
}

function addService() {
    const input = document.getElementById('newService');
    const newService = input.value.trim();
    if (!newService) return;
    const services = JSON.parse(localStorage.getItem(servicesKey)) || [];
    services.push(`✅ ${newService}`);
    localStorage.setItem(servicesKey, JSON.stringify(services));
    input.value = '';
    loadServices();
}

function removeService(index) {
    const services = JSON.parse(localStorage.getItem(servicesKey)) || [];
    services.splice(index, 1);
    localStorage.setItem(servicesKey, JSON.stringify(services));
    loadServices();
}

function saveServices() {
    alert('Serviços atualizados com sucesso!');
}

//Gerenciamento de imagens


function loadImagesAdmin() {
    const images = JSON.parse(localStorage.getItem(imagesKey)) || [];
    const list = document.getElementById('imageList');
    list.innerHTML = '';
    images.forEach((img, index) => {
        const li = document.createElement('li');
        li.textContent = img;
        li.onclick = () => removeImage(index);
        list.appendChild(li);
    });
}

function addImage() {
    const input = document.getElementById('newImage');
    const newImage = input.value.trim();
    if (!newImage) return;
    const images = JSON.parse(localStorage.getItem(imagesKey)) || [];
    images.push(newImage);
    localStorage.setItem(imagesKey, JSON.stringify(images));
    input.value = '';
    loadImagesAdmin();
}

function removeImage(index) {
    const images = JSON.parse(localStorage.getItem(imagesKey)) || [];
    images.splice(index, 1);
    localStorage.setItem(imagesKey, JSON.stringify(images));
    loadImagesAdmin();
}

function saveImages() {
    alert('Imagens atualizadas com sucesso!');
}


//Visualização de reservas






// Aguarda o carregamento do DOM antes de executar
document.addEventListener("DOMContentLoaded", () => {
    loadImages();
    loadServices();
    loadImagesAdmin();

});
