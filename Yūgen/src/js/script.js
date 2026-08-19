// ============================
// MENU MOBILE
// ============================

const menuMobile = document.getElementById("menuMobile");
const navbar = document.querySelector(".navbar");

menuMobile.addEventListener("click", () => {

    navbar.classList.toggle("mostrar");

});


// ============================
// BOTÃO DE RESERVA
// ============================

const reservarBtn = document.getElementById("reservarBtn");

reservarBtn.addEventListener("click", () => {

    alert(
        "Obrigado por escolher o Yūgen! 🍜\n\n" +
        "Em breve você poderá escolher a data e o horário da sua reserva."
    );

});


// ============================
// SLIDE
// ============================

const slider = document.querySelectorAll(".slider");

slider.forEach((slider, index) => {

    slider.addEventListener("click", () => {

        slider.forEach(item => {
            item.classList.remove("active");
        });

        slider.classList.add("active");

    });

});


// ============================
// ANIMAÇÃO DOS PRATOS
// ============================

const pratos = document.querySelectorAll(".prato");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


pratos.forEach(prato => {

    prato.style.opacity = "0";

    prato.style.transform = "translateY(30px)";

    prato.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(prato);

});