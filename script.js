const mainScreen = document.getElementById("main-screen");
const onePieceScreen = document.getElementById("onepiece-screen");
const onePieceBtn = document.getElementById("onepiece-btn");
const backBtn = document.getElementById("back-btn");

// Switch screens
onePieceBtn.addEventListener("click", () => {
  mainScreen.classList.remove("active");
  onePieceScreen.classList.add("active");
});
backBtn.addEventListener("click", () => {
  onePieceScreen.classList.remove("active");
  mainScreen.classList.add("active");
});

// Background color gradients
const gradients = [
  "linear-gradient(120deg, #ff9a9e, #fad0c4)",
  "linear-gradient(120deg, #a18cd1, #fbc2eb)",
  "linear-gradient(120deg, #f6d365, #fda085)",
  "linear-gradient(120deg, #84fab0, #8fd3f4)",
  "linear-gradient(120deg, #fccb90, #d57eeb)"
];

// 🎌 Main anime fact button
document.getElementById("new-fact").addEventListener("click", async () => {
  const title = document.getElementById("anime-title");
  const fact = document.getElementById("anime-fact");
  const img = document.getElementById("anime-img");

  title.textContent = "Loading...";
  fact.textContent = "";

  // Change background color
  const g = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = g;

  try {
    const res = await fetch("https://api.jikan.moe/v4/random/anime");
    const data = await res.json();
    const anime = data.data;

    title.textContent = anime.title;
    fact.textContent = anime.synopsis || "No synopsis found.";
    img.src = anime.images.jpg.large_image_url;
  } catch {
    title.textContent = "Error loading anime 😢";
    fact.textContent = "Please try again.";
  }
});

// 🏴‍☠️ One Piece facts
const opFacts = [
  "Oda planned One Piece for 5 years, but it’s been running since 1997!",
  "Luffy’s straw hat came from Shanks, who got it from Gol D. Roger.",
  "Zoro’s bad sense of direction is a running joke from Oda.",
  "Sanji was originally going to be named 'Naruto.'",
  "Oda confirmed the One Piece treasure is real — not a metaphor!"
];
const opImages = [
  "https://th.bing.com/th/id/OIP.3CDSLpGtkXTBmdubJIrPjQHaEo?w=284&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "https://tse3.mm.bing.net/th/id/OIP.QgrMTtdCZKpmALw3PnJaHwHaDt?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://th.bing.com/th/id/R.b0d9f3980a30a4bb8b9df12e93e35178?rik=fD6aGqq%2bzPPW3w&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.isuk_cwam4rFEScs4_9bswHaEK?w=291&h=181&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
];

document.getElementById("new-op").addEventListener("click", () => {
  const i = Math.floor(Math.random() * opFacts.length);
  document.getElementById("op-fact").textContent = opFacts[i];
  document.getElementById("op-img").src =
    opImages[Math.floor(Math.random() * opImages.length)];

  // Change background color too
  const g = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = g;
});
