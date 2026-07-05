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
        img: "LinusA2.png",
        age: 18,
        size: "165 mm",
        role: "Programmentwicklung"
    }
];

let current = 0;

function showMember(index){
    let m = members[index];

    document.getElementById("m-name").innerText = m.name;
    document.getElementById("m-img").src = m.img;
    document.getElementById("m-age").innerText = m.age;
    document.getElementById("m-size").innerText = m.size;
    document.getElementById("m-role").innerText = m.role;
}

function nextMember(){
    current++;
    if(current >= members.length){
        current = 0;
    }
    showMember(current);
}

function prevMember(){
    current--;
    if(current < 0){
        current = members.length - 1;
    }
    showMember(current);
}

showMember(current);