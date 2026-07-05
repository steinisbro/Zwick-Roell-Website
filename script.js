function openImage(img) {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("overlayImg").src = img.src;
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}

function anzeigen() {
    let name = document.getElementById("projektname").value;
    let mitglieder = document.getElementById("mitglieder").value;
    let fach = document.getElementById("fach").value;
    let art = document.querySelector('input[name="art"]:checked').value;

    let extras = [];

    if (document.getElementById("bilder").checked) extras.push("Bilder");
    if (document.getElementById("video").checked) extras.push("Video");
    if (document.getElementById("quiz").checked) extras.push("Quiz");

    if (extras.length == 0) extras.push("Keine");

    document.getElementById("ergebnis").innerHTML =
        "<h2>Ausgabe</h2>" +
        "<p><b>Projektname:</b> " + name + "</p>" +
        "<p><b>Mitglieder:</b> " + mitglieder + "</p>" +
        "<p><b>Projektart:</b> " + art + "</p>" +
        "<p><b>Fach:</b> " + fach + "</p>" +
        "<p><b>Extras:</b> " + extras.join(", ") + "</p>";
}
let members = [
    {
        name: "Linus Steinwender",
        img: "LinusS.jpeg",
        age: 17,
        size: "179 cm",
        role: "Projektplanung"
    },
    {
        name: "Theo Münst",
        img: "Theo.jpeg",
        age: 18,
        size: "170 cm",
        role: "3D Modelierung"
    },
    {
        name: "Linus Aßfalg",
        img: "LinusA.jpeg",
        age: 18,
        size: "165 mm",
        role: "Programmentwicklung"
    }
];

let current = 0;

function showMember(index) {
    let m = members[index];

    document.getElementById("m-name").innerText = m.name;
    document.getElementById("m-img").src = m.img;
    document.getElementById("m-age").innerText = m.age;
    document.getElementById("m-size").innerText = m.size;
    document.getElementById("m-role").innerText = m.role;
}

function nextMember() {
    current++;
    if (current >= members.length) {
        current = 0;
    }
    showMember(current);
}

function prevMember() {
    current--;
    if (current < 0) {
        current = members.length - 1;
    }
    showMember(current);
}

if (document.getElementById("m-name")) {
    showMember(current);
}

/*const cards = document.querySelectorAll(".info-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));
console.log("JS läuft");*/

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".scroll-section");

    function update() {

        const vh = window.innerHeight;
        const scrollY = window.scrollY;

        sections.forEach((section, index) => {

            const rect = section.getBoundingClientRect();

            // gleiche stabile Logik wie vorher
            const inView = rect.top < vh * 0.65 && rect.bottom > vh * 0.25;
            const pastTop = scrollY > vh * 0.2;

            let visible = false;

            if (inView || pastTop) {
                visible = true;
            }

            if (scrollY < vh * 0.05) {
                visible = false;
            }

            // =====================
            // STYLE APPLY
            // =====================

            if (visible) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0px)";
            } else {
                section.style.opacity = "0";
                section.style.transform = "translateY(140px)";
            }

        });
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
});