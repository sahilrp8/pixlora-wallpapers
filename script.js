const wallpapers = [
  { image: "wallpapers/krishnaa.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/ram.jpg", title: "Ram ji", category: "krishna" },
  { image: "wallpapers/shiv.jpg", title: "Shiv ji", category: "krishna" },
  { image: "wallpapers/1.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/2.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/3.jpg", title: "Radha-Krishna", category: "krishna" }
  // { image: "wallpapers/wall2.jpg", title: "Cyber City", category: "cyberpunk" },
  // { image: "wallpapers/wall4.jpg", title: "Dark AMOLED", category: "amoled" },
  // { image: "wallpapers/wall5.jpg", title: "Minimal Lines", category: "minimal" }
];

const gallery = document.getElementById("gallery");
const sidebar = document.getElementById("sidebar");

function displayWallpapers(list) {

  gallery.innerHTML = "";

  list.forEach(w => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${w.image}" loading="lazy">
        <div class="card-body">
        <div class="card-title">${w.title}</div>
        <div class="card-tag">${w.category}</div>
        <a href="${w.image}" download class="download-btn">Download</a>
        </div>
        `;

    gallery.appendChild(card);

  });

}

function filterCategory(cat) {

  if (cat === "all") {
    displayWallpapers(wallpapers);
  } else {
    const filtered = wallpapers.filter(w => w.category === cat);
    displayWallpapers(filtered);
  }

  /* MOBILE par sidebar auto close */
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("active");
  }

}

function toggleSidebar() {
  sidebar.classList.toggle("active");
}

displayWallpapers(wallpapers);
