let isPlaying = false;

function toggleMusic() {
    const music = document.getElementById("bgm");
    const btn = document.getElementById("musicBtn");
    const song = document.getElementById("songName");

    if (isPlaying) {
        music.pause();
        btn.innerHTML = "🔇";
        song.innerHTML = "♪ Musik dihentikan";
    } else {
        music.play();
        btn.innerHTML = "🔊";
        song.innerHTML = "♪ Now Playing: Wonder - Tayori.mp3";
    }

    isPlaying = !isPlaying;
}

function randomAngka() {
    document.getElementById("angka").value = Math.floor(Math.random() * 10) + 1;
}

function generatePersona() {
    let nama = document.getElementById("nama").value;
    let hobi = document.getElementById("hobi").value;
    let angka = parseInt(document.getElementById("angka").value);

    if (!nama || !hobi || !angka) {
        document.getElementById("hasil").innerHTML = "Isi dulu semuanya ya!";
        return;
    }

    const personaList = {
        teknologi: ["AI Explorer","Code Mastermind","Debug Ninja","Cyber Phantom","System Builder","Startup Hacker","Security Guardian","Network Wizard","Future Architect","Digital Overlord"],
        seni: ["Abstract Thinker","Dreamy Artist","Canvas Magician","Story Crafter","Expressionist","Vision Creator","Imagination Builder","Scene Director","Aesthetic Soul","Free Spirit Artist"],
        game: ["Casual Player","Arcade Master","RPG Adventurer","Sharpshooter","Ranked Grinder","Clutch God","Strategy Genius","Stealth Gamer","Speed Runner","Open World Explorer"],
        musik: ["Calm Composer","Beat Listener","Shower Singer","Indie Player","Rhythm Keeper","Piano Soul","Melody Maker","Rising Star","Rockstar","Sound Dreamer"]
    };

    let persona = personaList[hobi][angka - 1];

    document.getElementById("hasil").innerHTML =
        `${nama}, persona kamu:<br><b>${persona}</b>`;
}

function openModal(src) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}