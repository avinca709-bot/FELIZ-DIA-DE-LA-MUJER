// ==========================================
// INICIAR CUANDO CARGA EL DOM
// ==========================================

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadHero();
    createAccordion();
    createGallery();
    loadLetter();
    setupEnvelope();
}


// ==========================================
// HERO
// ==========================================

function loadHero() {
    document.getElementById("hero-title").innerText = config.hero.title;
    document.getElementById("hero-subtitle").innerText = config.hero.subtitle;
    document.getElementById("hero-btn").innerText = config.hero.buttonText;
}


// ==========================================
// ACORDEÓN
// ==========================================

function createAccordion() {

    const container = document.getElementById("accordion-container");

    config.cards.forEach(card => {

        const item = document.createElement("div");
        item.className = "acc-item";

        item.innerHTML = `
            <div class="acc-header">
                <span>${card.id}. ${card.title}</span>
                <span>+</span>
            </div>

            <div class="acc-body">
                <div class="acc-content">
                    ${card.text}
                </div>
            </div>
        `;

        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });

        container.appendChild(item);
    });
}


// ==========================================
// GALERÍA (Actualizado para Video y Fotos)
// ==========================================

function createGallery() {

    document.getElementById("gallery-title").innerText =
        config.gallery.title;

    const container = document.getElementById("gallery-container");

    config.gallery.photos.forEach(photo => {

        const polaroid = document.createElement("div");
        polaroid.className = "polaroid";

        // Verificamos si la extensión es mp4
        const isVideo = photo.url.toLowerCase().endsWith(".mp4");

        if (isVideo) {
            // Añadimos playsinline y muted para que funcione en móviles automáticamente
            polaroid.innerHTML = `
                <video src="${photo.url}" autoplay muted loop playsinline></video>
                <p>${photo.caption}</p>
            `;
        } else {
            polaroid.innerHTML = `
                <img src="${photo.url}" alt="${photo.caption}">
                <p>${photo.caption}</p>
            `;
        }

        container.appendChild(polaroid);
    });
}


// ==========================================
// CARTA
// ==========================================

function loadLetter() {

    document.getElementById("letter-content").innerHTML =
        config.letter.content;

    document.getElementById("letter-footer").innerText =
        config.letter.footer;
}


// ==========================================
// SOBRE + BOTÓN UNIVERSO
// ==========================================

function setupEnvelope() {

    const openBtn = document.getElementById("open-btn");
    const envelope = document.getElementById("envelope");
    const controls = document.querySelector(".final-controls");


    // Crear botón universo
    const universeBtn = document.createElement("button");

    universeBtn.className = "btn-main hidden";
    universeBtn.id = "universe-btn";
    universeBtn.innerText = "Viajar a nuestro universo ✨";
    universeBtn.style.background =
        "linear-gradient(45deg, #7000ff, #ff007a)";

    controls.appendChild(universeBtn);


    // Abrir / cerrar carta
    openBtn.addEventListener("click", () => {

        envelope.classList.toggle("open");

        if (envelope.classList.contains("open")) {

            openBtn.innerText = "Cerrar carta";
            universeBtn.classList.remove("hidden");

            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });

        } else {

            openBtn.innerText = "Abrir mi carta 💌";
            universeBtn.classList.add("hidden");

        }
    });


    // Ir al universo
    universeBtn.addEventListener("click", () => {
        window.location.href = "Universo.html";
    });
}


// ==========================================
// INICIAR EXPERIENCIA (Botón del Hero)
// ==========================================

function startExperience() {

    const audio = document.getElementById("bg-music");

    if (audio) {
        audio.play().catch(() => {
            console.log("El navegador requiere interacción previa para sonar");
        });
    }

    // Scroll suave hacia la sección de detalles
    const target = document.getElementById("detalles");
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}
