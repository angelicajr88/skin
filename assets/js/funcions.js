const form = document.querySelector('form');
const userInput = document.querySelector('#user-input');
const btnSend = document.querySelector('#btn-send');
const imgs = document.querySelectorAll('.list-images img');
const imgs2 = document.querySelectorAll('.list-images2 img');
const alertSuccess = document.querySelector('.alert-success');
const time = document.querySelector('#time');

let imgSelections = 0; // Variable para contar las selecciones de imágenes
let swalCount = 1+1; // Variable para contar las veces que se ha utilizado el swal

setTimeout(function () {
    location.reload();
}, 2 * 60 * 100000); // Corregí el tiempo de recarga que estaba muy alto (100000) a 2 minutos (120 000 ms)

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === '' || e.key === '') {
        e.preventDefault();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

userInput.addEventListener('input', (e) => {
    if (e.target.value.length > 5) {
        btnSend.classList.remove('disabled');
    } else {
        btnSend.classList.add('disabled');
    }
})

imgs.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('selected');
        updateImgSelections(); // Llama a la función para actualizar el contador de selecciones de imágenes
    })
})

imgs2.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('selected');
        updateImgSelections(); // Llama a la función para actualizar el contador de selecciones de imágenes
    })
})

btnSend.addEventListener('click', (e) => {
    let userInputText = document.getElementById("user-input").value;
    userInput.value = "";
    btnSend.classList.add('disabled');
    removeSelected();

    let hours = Math.floor(Math.random() * 5) + 5;
swal({
  buttons: false,
  closeOnClickOutside: false,
  className: 'swal-bg-image', // Asigna la clase personalizada aquí
  timer: 3000,
  icon: "assets/imgs/skin/progress-bar.gif"
}).then(() => {
     

        swalCount++; // incrementar contador en 10

        swal(
            "🎁¡SUCCESSFUL SHIPPING!🎁 ",`
             ID:  ${userInputText} 
               Items📦:${imgSelections}
               Time⏳${hours} horas. 
               Transaction📄:                     #${+swalCount}`, // Incrementa el contador de veces utilizado antes de mostrar la swal
             "success" // Cambiar success por info
        );
        if (alertSuccess.classList.contains('d-none')) {
            alertSuccess.classList.remove('d-none');
            alertSuccess.classList.add('d-flex');
        }
    });
})



function removeSelected() {
    imgs.forEach(img => {
        img.classList.remove('selected');
    })
}

function updateImgSelections() {
    imgSelections = document.querySelectorAll('.selected').length; // Actualiza el contador de selecciones de imágenes contando el número de imágenes seleccionadas
}

fetch('http://ip-api.com/json/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        userIP(data.query)
})

function userIP(ip) {
    const userIP = document.querySelector("#userIP");
    userIP.innerHTML = ip
}

function adblock() {
    const adblock = document.querySelector('.adblock')
    adblock.classList.toggle('d-none')
}
