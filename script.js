// ============================================================
// Hero carousel + showcase grid now read from the shared
// PROJECTS data in project-data.js — edit a project there and
// it updates here and on its case-study page automatically.
// Archives stay separately curated below (lighter-weight items
// without full case-study data).
// ============================================================

// ---- Render Archives ----
const archiveGrid = document.getElementById('archiveGrid');
function renderArchives(filter){
  archiveGrid.innerHTML = '';
  const items = filter === 'all' ? ARCHIVES : ARCHIVES.filter(w => w.category === filter);
  items.forEach(item=>{
    const card = document.createElement(item.href ? 'a' : 'div');
    card.className = 'archive-card';
    if (item.href) {
      card.href = item.href;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
    }
    card.innerHTML = `
      <div class="archive-thumb" style="background-image:url('${item.img}'); background-size:cover; background-position:center;"></div>
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    `;
    archiveGrid.appendChild(card);
  });
}
renderArchives('all');
const showcaseGrid = document.getElementById('showcaseGrid');
PROJECTS.filter(p => p.showcase).forEach(item=>{
  const card = document.createElement(item.hasDetailPage ? 'a' : 'div');
  card.className = 'work-card';
  if (item.hasDetailPage) card.href = `project-details.html?slug=${item.slug}`;

  const tags = item.showcaseTags && item.showcaseTags.length ? item.showcaseTags : item.tags;
  card.innerHTML = `
    <div class="tags-row">
      <div class="left-tags">
        <span class="tag">${tags[0] || ''}</span>
        <span class="tag">${tags[1] || ''}</span>
      </div>
    </div>
    <h3>${item.title}</h3>
    <div class="work-thumb">
      <div class="glow" style="background-image:url('${item.img}'); background-size:cover; background-position:center;"></div>
    </div>
  `;
  showcaseGrid.appendChild(card);
});

document.getElementById('filterRow').addEventListener('click', e=>{
  if(e.target.classList.contains('filter-pill')){
    document.querySelectorAll('.filter-pill').forEach(p=>p.classList.remove('active'));
    e.target.classList.add('active');
    renderArchives(e.target.dataset.filter);
  }
});

// ---- Hero carousel ----
const featuredProjects = PROJECTS.filter(p => p.featured);
let heroIndex = 0;
const heroTitleDesktop = document.getElementById('heroTitleDesktop');
const heroTitleMobile = document.getElementById('heroTitleMobile');
const heroDesc = document.getElementById('heroDesc');
const heroTags = document.getElementById('heroTags');
const dotsWrap = document.getElementById('dots');
const heroBg = document.getElementById('heroBg');
const viewDetailsBtn = document.getElementById('viewDetails');

function renderDots(){
  dotsWrap.innerHTML = '';
  featuredProjects.forEach((_, i)=>{
    const d = document.createElement('span');
    if(i === heroIndex) d.classList.add('active');
    dotsWrap.appendChild(d);
  });
}

function renderHero(){
  const p = featuredProjects[heroIndex];
  heroTitleDesktop.textContent = p.title;
  heroTitleMobile.textContent = p.title;
  heroDesc.textContent = p.desc;
  heroTags.innerHTML = p.tags.map(t=>`<span class="tag">${t}</span>`).join('');
  heroBg.style.backgroundImage = `url('${p.img}')`;

  if (p.hasDetailPage) {
    viewDetailsBtn.style.display = '';
    viewDetailsBtn.onclick = () => { window.location.href = `project-details.html?slug=${p.slug}`; };
  } else {
    viewDetailsBtn.style.display = 'none';
  }

  renderDots();
}

document.getElementById('nextBtn').addEventListener('click', ()=>{
  heroIndex = (heroIndex + 1) % featuredProjects.length;
  renderHero();
});
document.getElementById('prevBtn').addEventListener('click', ()=>{
  heroIndex = (heroIndex - 1 + featuredProjects.length) % featuredProjects.length;
  renderHero();
});

renderHero();

// Show mobile title on mobile only
function checkMobile(){
  if(window.innerWidth <= 900){
    heroTitleMobile.style.display = 'block';
  } else {
    heroTitleMobile.style.display = 'none';
  }
}
checkMobile();
window.addEventListener('resize', checkMobile);

// ---- Mobile menu ----
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
openMenu.addEventListener('click', ()=> mobileMenu.classList.add('open'));
closeMenu.addEventListener('click', ()=> mobileMenu.classList.remove('open'));
document.querySelectorAll('.close-link').forEach(l=>{
  l.addEventListener('click', ()=> mobileMenu.classList.remove('open'));
});