function presstext(name) {
    const img = document.getElementById("characterImage");
    const textBox = document.getElementById("characterText");

    // Charakter-Bilder und Texte
    const characters = {
        bo: { img: "bokuto.png", text: "Bokuto Koutarou – ein As aus Haikyuu!!, voller Energie und extrem stark." },
        go: { img: "goku.jpeg", text: "Son Goku – Saiyajin-Krieger aus Dragon Ball, liebt Kämpfe und Training." },
        sa: { img: "sanemi.jpg", text: "Sanemi Shinazugawa – Wind-Säule aus Demon Slayer, sehr temperamentvoll." },
        hat: { img: "hatori.jpg", text: "Hatori – ruhiger und geheimnisvoller Charakter, oft sehr analytisch." },
        lu: { img: "luffy.jpg", text: "Monkey D. Luffy – zukünftiger Piratenkönig, isst gerne Fleisch und ist dehnbar." },
        la: { img: "law.jpg", text: "Trafalgar Law – Chirurg des Todes, extrem intelligent und strategisch." }
    };

    // Bild setzen und einblenden
    img.src = characters[name].img;
    img.style.display = "block";
    img.style.opacity = "0";
    setTimeout(() => { img.style.opacity = "1"; }, 50);

    // Text setzen und einblenden
    textBox.innerText = characters[name].text;
    textBox.style.opacity = "0";
    setTimeout(() => { textBox.style.opacity = "1"; }, 50);

    // Button-Highlight
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}
