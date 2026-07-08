// ─── ANIME DATA ───────────────────────────────────────────────────────────────
const animeData = [
  { id:1, title:"Demon Slayer", genre:["Action","Fantasy"], year:"2019", rating:"9.1", eps:"44", badge:"HOT",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    desc:"Tanjiro Kamado, a gentle-hearted boy who sells charcoal, discovers his family was attacked by demons. His sister Nezuko survived but was turned into one. He joins the Demon Slayer Corps on a quest to avenge his family.",
    isNew:false, isTrending:true, isPopular:true, progress:65 },

  { id:2, title:"Attack on Titan", genre:["Action","Horror"], year:"2013", rating:"9.0", eps:"88", badge:"TOP",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    desc:"Humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason. Eren Yeager joins the military to fight back.",
    isNew:false, isTrending:true, isPopular:true, progress:30 },

  { id:3, title:"Jujutsu Kaisen", genre:["Action","Fantasy"], year:"2020", rating:"8.9", eps:"48", badge:"NEW",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
    desc:"Yuji Itadori, a boy with superhuman physical abilities, joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna.",
    isNew:true, isTrending:true, isPopular:true, progress:80 },

  { id:4, title:"Fullmetal Alchemist: Brotherhood", genre:["Action","Fantasy"], year:"2009", rating:"9.1", eps:"64", badge:"",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1223/96541l.jpg",
    desc:"Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes wrong, leaving them with disabilities.",
    isNew:false, isTrending:false, isPopular:true, progress:0 },

  { id:5, title:"Naruto Shippuden", genre:["Action","Fantasy"], year:"2007", rating:"8.7", eps:"500", badge:"",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1565/111305l.jpg",
    desc:"Naruto Uzumaki, a young ninja who seeks recognition and dreams of becoming the Hokage, the leader of his village. A story of friendship, perseverance, and never giving up.",
    isNew:false, isTrending:false, isPopular:true, progress:45 },

  { id:6, title:"One Piece", genre:["Action","Comedy"], year:"1999", rating:"9.0", eps:"1000+", badge:"TOP",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
    desc:"Monkey D. Luffy and his crew of pirates search for the ultimate treasure known as the 'One Piece' to become the King of the Pirates.",
    isNew:false, isTrending:true, isPopular:true, progress:0 },

  { id:7, title:"My Hero Academia", genre:["Action","Sci-Fi"], year:"2016", rating:"8.5", eps:"113", badge:"NEW",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/10/78745l.jpg",
    desc:"In a world where most people have superpowers called Quirks, Izuku Midoriya is born without one. But his encounter with the greatest hero changes everything.",
    isNew:true, isTrending:true, isPopular:false, progress:0 },

  { id:8, title:"Death Note", genre:["Horror","Sci-Fi"], year:"2006", rating:"9.0", eps:"37", badge:"",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/9/9453l.jpg",
    desc:"A student named Light Yagami discovers a supernatural notebook that grants him the power to kill anyone whose name he writes in it.",
    isNew:false, isTrending:false, isPopular:true, progress:0 },

  { id:9, title:"Sword Art Online", genre:["Isekai","Action"], year:"2012", rating:"7.8", eps:"96", badge:"",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/11/39717.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/11/39717l.jpg",
    desc:"Kazuto Kirigaya is trapped in a virtual reality MMORPG with thousands of other players. The only way out is to beat all 100 floors of the game.",
    isNew:false, isTrending:false, isPopular:false, progress:0 },

  { id:10, title:"Tokyo Ghoul", genre:["Action","Horror"], year:"2014", rating:"7.9", eps:"48", badge:"",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/5/64449.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/5/64449l.jpg",
    desc:"Ken Kaneki, a college student, nearly dies in an attack by a ghoul — a creature that consumes human flesh — and transforms into a half-ghoul himself.",
    isNew:false, isTrending:false, isPopular:true, progress:0 },

  { id:11, title:"Re:Zero", genre:["Isekai","Fantasy"], year:"2016", rating:"8.2", eps:"50", badge:"NEW",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/1522/128039.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1522/128039l.jpg",
    desc:"Subaru Natsuki is suddenly summoned to another world on his way home from the convenience store. With no idea who did it, he begins to investigate.",
    isNew:true, isTrending:false, isPopular:false, progress:0 },

  { id:12, title:"Haikyuu!!", genre:["Sports","Comedy"], year:"2014", rating:"8.7", eps:"85", badge:"",
    videoUrl: "",
    thumb:"https://cdn.myanimelist.net/images/anime/7/76014.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/7/76014l.jpg",
    desc:"Shoyo Hinata, a short boy inspired by a volleyball player, joins his middle school team and pursues his dream to become a great volleyball player despite his height.",
    isNew:false, isTrending:true, isPopular:false, progress:0 },
];

const comingSoon = [
  { title:"Bleach: Thousand-Year Blood War Pt. 4", month:"JUL", day:"12", ep:"Final Arc Continues" },
  { title:"One Punch Man Season 3", month:"AUG", day:"3", ep:"New Season" },
  { title:"Chainsaw Man Season 2", month:"OCT", day:"7", ep:"Awaited Sequel" },
];

let currentGenre = "All";
let searchQuery = "";

function renderCard(anime) {
  const hasLink = !!anime.videoUrl;
  return `
    <div class="anime-card" onclick="openModal(animeData.find(a=>a.id==${anime.id}))">
      <div class="card-thumb">
        <img src="${anime.thumb}" alt="${anime.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x300/1a2332/e85d04?text=${encodeURIComponent(anime.title)}'">
        ${anime.badge ? `<div class="card-badge ${anime.badge==='NEW'?'new':anime.badge==='TOP'?'top':''}">${anime.badge}</div>` : ''}
        ${!hasLink ? `<div class="card-badge" style="top:auto;bottom:8px;left:8px;background:#374151;font-size:0.62rem;">NO LINK</div>` : ''}
        <div class="card-overlay">
          <div class="play-btn">&#9654;</div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${anime.title}</div>
        <div class="card-sub">
          <span class="card-rating">&#11088; ${anime.rating}</span>
          <span>${anime.year}</span>
          <span>${anime.eps} eps</span>
        </div>
      </div>
    </div>
  `;
}

function renderContinueCard(anime) {
  return `
    <div class="continue-card" onclick="openModal(animeData.find(a=>a.id==${anime.id}))">
      <div class="continue-thumb">
        <img src="${anime.banner}" alt="${anime.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/520x293/1a2332/e85d04?text=${encodeURIComponent(anime.title)}'">
        <div class="progress-bar">
          <div class="progress-fill" style="width:${anime.progress}%"></div>
        </div>
      </div>
      <div class="continue-info">
        <div class="continue-title">${anime.title}</div>
        <div class="continue-ep">${anime.progress}% watched &middot; ${anime.eps} eps</div>
      </div>
    </div>
  `;
}

function renderAll() {
  let filtered = animeData;
  if (currentGenre !== "All") filtered = filtered.filter(a => a.genre.includes(currentGenre));
  if (searchQuery) filtered = filtered.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const trending    = filtered.filter(a => a.isTrending);
  const newReleases = filtered.filter(a => a.isNew);
  const popular     = filtered.filter(a => a.isPopular);
  const continueW   = animeData.filter(a => a.progress > 0);

  const empty = '<p style="color:var(--text-muted); grid-column:1/-1">No anime found.</p>';
  document.getElementById('trendingCards').innerHTML    = trending.map(renderCard).join('') || empty;
  document.getElementById('newReleasesCards').innerHTML = newReleases.map(renderCard).join('') || empty;
  document.getElementById('popularCards').innerHTML     = popular.map(renderCard).join('') || empty;
  document.getElementById('continueCards').innerHTML    = continueW.map(renderContinueCard).join('');
}

function renderComingSoon() {
  document.getElementById('comingSoonCards').innerHTML = comingSoon.map(c => `
    <div class="coming-card">
      <div class="coming-date">
        <span class="coming-month">${c.month}</span>
        <span class="coming-day">${c.day}</span>
      </div>
      <div class="coming-info">
        <div class="coming-name">${c.title}</div>
        <div class="coming-ep">${c.ep}</div>
      </div>
    </div>
  `).join('');
}

function filterGenre(genre, el) {
  currentGenre = genre;
  document.querySelectorAll('.genre-tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderAll();
}

function handleSearch(val) {
  searchQuery = val;
  renderAll();
}

let currentAnime = null;

function openModal(anime) {
  if (!anime) return;
  currentAnime = anime;

  document.getElementById('modalImg').src = anime.banner;
  document.getElementById('modalImg').alt = anime.title;
  document.getElementById('modalTitle').textContent = anime.title;
  document.getElementById('modalMeta').innerHTML = `
    <span class="modal-tag">&#11088; ${anime.rating}</span>
    <span class="modal-tag">&#128197; ${anime.year}</span>
    <span class="modal-tag">&#127916; ${anime.eps} eps</span>
    ${anime.genre.map(g=>`<span class="modal-tag">${g}</span>`).join('')}
  `;
  document.getElementById('modalDesc').textContent = anime.desc;

  const thumb = document.querySelector('.modal-thumb');
  const oldIframe = thumb.querySelector('iframe');
  if (oldIframe) oldIframe.remove();
  document.querySelector('.modal-thumb-overlay').style.display = 'flex';

  const watchBtn = document.getElementById('watchBtn');
  if (anime.videoUrl) {
    watchBtn.textContent = '▶ Watch Now';
    watchBtn.style.background = 'var(--accent)';
    watchBtn.onclick = () => playVideo(anime);
  } else {
    watchBtn.textContent = '🔗 Add Video Link';
    watchBtn.style.background = '#374151';
    watchBtn.onclick = () => promptAddLink(anime);
  }

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function playVideo(anime) {
  if (!anime.videoUrl) { promptAddLink(anime); return; }
  const thumb = document.querySelector('.modal-thumb');
  const overlay = document.querySelector('.modal-thumb-overlay');
  const old = thumb.querySelector('iframe');
  if (old) old.remove();

  const iframe = document.createElement('iframe');
  iframe.src = anime.videoUrl;
  iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;z-index:3;';
  iframe.allowFullscreen = true;
  iframe.allow = "autoplay; fullscreen";
  thumb.appendChild(iframe);
  overlay.style.display = 'none';
}

function promptAddLink(anime) {
  const url = prompt(
    'Paste the video link for "' + anime.title + '":\n\nWorks with:\n• YouTube link\n• Google Drive share link\n• Direct .mp4 link\n• Any embed link',
    anime.videoUrl || ''
  );
  if (url === null) return;
  if (url.trim() === '') {
    anime.videoUrl = '';
    alert('Video link removed from "' + anime.title + '".');
    openModal(anime);
    return;
  }
  anime.videoUrl = url.trim();
  alert('Link saved for "' + anime.title + '"! Tap Watch Now to play.');
  openModal(anime);
}

function closeModal() {
  const old = document.querySelector('.modal-thumb iframe');
  if (old) old.remove();
  document.querySelector('.modal-thumb-overlay').style.display = 'flex';
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

renderAll();
renderComingSoon();
