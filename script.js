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

const tbl = document.createElement('table');
tbl.className = 'tbl';
document.body.appendChild(tbl);

document.querySelectorAll('.reservation__btn').forEach(button => {
    button.addEventListener('click', function(event) {
        // Captura a linha do botão clicado
        let linha = event.target.closest('tr'); 
        let tipoQuarto = linha.cells[0].innerText; // Pega a primeira célula da linha (tipo de quarto)

        // Captura os valores dos inputs
        let checkin = document.getElementById('checkin').value;
        let checkout = document.getElementById('checkout').value;

        // Cria a nova linha na tabela
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerHTML = checkin;
        td2.innerHTML = checkout;
        td3.innerHTML = tipoQuarto; // Insere o tipo de quarto capturado

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbl.appendChild(tr);

        console.log(`Reserva adicionada: ${tipoQuarto} | Check-in: ${checkin} | Check-out: ${checkout}`);
    });
});
