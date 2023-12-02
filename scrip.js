document.addEventListener('DOMContentLoaded', function () {
    const AGREGARBOT = document.querySelectorAll(".boton-producto");

    AGREGARBOT.forEach(boton => {
        boton.addEventListener('click', function () {
            const precio = this.parentNode.querySelector("p").textContent;
            const nombre = this.parentNode.querySelector(".tipo").textContent; 

            const MENSAJE = encodeURIComponent(`Hola, estoy interesado en comprar el siguiente producto: ${nombre} , Precio: ${precio} , Por favor, envíame más información.`);

            const urlWhatsapp = `https://wa.me/595973856727?text=${MENSAJE}`; 

            window.open(urlWhatsapp, '_blank');
        });
    });
});

