document.addEventListener('DOMContentLoaded', function(){

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const project = (typeof PROJECTS !== 'undefined')
    ? PROJECTS.find(p => p.slug === slug && p.hasDetailPage)
    : null;

  if (!project) {
    // No matching project (or it has no case-study content yet) — bounce home.
    window.location.href = 'index.html';
    return;
  }

  renderProject(project);
  setupScrollBehavior();
  setupMobileMenu();

  function renderProject(p){
    document.title = `${p.title} — Project Details · Thanaporn Asp`;

    // Hero
    document.getElementById('projTitle').textContent = p.title;
    document.getElementById('projLede').textContent = p.desc;
    document.getElementById('projTags').innerHTML =
      p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const heroImg = document.getElementById('projHeroImg');
    heroImg.src = p.img;
    heroImg.alt = `${p.title} project banner`;

    // Meta row
    document.getElementById('projRole').textContent = p.role || '';
    document.getElementById('projTeam').textContent = (p.team || []).join(', ');
    document.getElementById('projIndustry').textContent = p.industry || '';
    document.getElementById('projTools').textContent = p.tools || '';

    // Hook / quote
    document.getElementById('projHook').innerHTML = p.hook ? `"${p.hook}"` : '';

    // Background
    document.getElementById('projBackground').innerHTML = p.background || '';

    // Concept + inline horizontal image carousels (plain sliding
    // strip, no controls) — replaces the old "button opens a modal"
    // pattern. Same data shape as before: each conceptButtons entry
    // becomes one labeled carousel.
    document.getElementById('projConcept').innerHTML = p.concept || '';
    const carouselWrap = document.getElementById('projConceptButtons');
    carouselWrap.innerHTML = '';
    (p.conceptButtons || []).forEach(group => {
      if (typeof window.buildHorizontalCarousel === 'function') {
        carouselWrap.appendChild(window.buildHorizontalCarousel(group));
      }
    });

    // Who it's for — audience card grid
    const defaultIcon = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="3.5" stroke="#111111" stroke-width="1.5"/>
        <path d="M5 19c1.2-3.2 4-5 7-5s5.8 1.8 7 5" stroke="#111111" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`;
    const audienceGrid = document.getElementById('projAudienceGrid');
    audienceGrid.innerHTML = (p.audiences || []).map(a => `
      <div class="audience-card">
        <div class="audience-icon">${a.icon || defaultIcon}</div>
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </div>
    `).join('');

    // Key features — grouped by h3 (consecutive entries sharing an
    // h3 only print that heading once, like sub-sections)
    const keyFeaturesWrap = document.getElementById('projKeyFeatures');
    keyFeaturesWrap.innerHTML = '';
    let lastH3 = null;
    (p.keyFeatures || []).forEach(f => {
      if (f.h3 !== lastH3) {
        const h3 = document.createElement('h3');
        h3.textContent = f.h3;
        keyFeaturesWrap.appendChild(h3);
        lastH3 = f.h3;
      }
      const h4 = document.createElement('h4');
      h4.textContent = f.h4;
      keyFeaturesWrap.appendChild(h4);

      const desc = document.createElement('p');
      desc.textContent = f.desc;
      keyFeaturesWrap.appendChild(desc);

      const img = document.createElement('img');
      img.dataset.src = f.img;       // picked up by lazy-gifs.js
      img.alt = f.h4;
      if (f.imgClass) img.className = f.imgClass;
      keyFeaturesWrap.appendChild(img);
    });

    // Design System — showcase of final screens/visuals. Only
    // some projects have this; when absent, hide the whole section
    // (and its bottom-nav link) instead of showing an empty block.
    // Shape: p.designSystem = [{ title, desc, img, imgClass }]
    const designSystemSection = document.getElementById('design-system');
    const designSystemNavLink = document.querySelector('.bn-link[data-target="design-system"]');
    const hasDesignSystem = Array.isArray(p.designSystem) && p.designSystem.length > 0;

    if (designSystemSection) designSystemSection.style.display = hasDesignSystem ? '' : 'none';
    if (designSystemNavLink) designSystemNavLink.style.display = hasDesignSystem ? '' : 'none';

    if (hasDesignSystem) {
      const designSystemWrap = document.getElementById('projDesignSystem');
      designSystemWrap.innerHTML = '';
      p.designSystem.forEach(d => {
        if (d.title) {
          const h4 = document.createElement('h4');
          h4.textContent = d.title;
          designSystemWrap.appendChild(h4);
        }
        if (d.desc) {
          const desc = document.createElement('p');
          desc.textContent = d.desc;
          designSystemWrap.appendChild(desc);
        }
        if (d.img) {
          const img = document.createElement('img');
          img.dataset.src = d.img;   // picked up by lazy-gifs.js
          img.alt = d.title || '';
          if (d.imgClass) img.className = d.imgClass;
          designSystemWrap.appendChild(img);
        }
      });
    }

    // Reflection — one <p> per array entry
    document.getElementById('projReflection').innerHTML =
      (p.reflection || []).map(paragraph => `<p>${paragraph}</p>`).join('');

    // Optional toggle/dropdown blocks — each entry specifies which
    // section to drop into via `section` (must match a section id:
    // background / concept / who-its-for / key-features /
    // design-system / reflection).
    (p.toggles || []).forEach(t => {
      const target = document.querySelector(`#${t.section} .project-section-inner`);
      if (target && typeof window.buildToggleBlock === 'function') {
        target.appendChild(window.buildToggleBlock(t));
      }
    });
  }

  function setupScrollBehavior(){
    document.querySelectorAll('.bn-link, .bn-top').forEach(link => {
      link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          if (target.tagName === 'DETAILS') target.open = true;
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    const sections = document.querySelectorAll('.project-hero, .project-section');
    const navLinks = document.querySelectorAll('.bn-link');
    if (sections.length && navLinks.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              link.classList.toggle('active', link.dataset.target === id);
            });
          }
        });
      }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
      sections.forEach(section => observer.observe(section));
    }

    const progressFill = document.getElementById('scrollProgressFill');
    if (progressFill) {
      function updateScrollProgress(){
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressFill.style.width = progress + '%';
      }
      window.addEventListener('scroll', updateScrollProgress);
      window.addEventListener('resize', updateScrollProgress);
      updateScrollProgress();
    }
  }

  function setupMobileMenu(){
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    if (openMenu && mobileMenu) {
      openMenu.addEventListener('click', ()=> mobileMenu.classList.add('open'));
      closeMenu.addEventListener('click', ()=> mobileMenu.classList.remove('open'));
      document.querySelectorAll('.close-link').forEach(l=>{
        l.addEventListener('click', ()=> mobileMenu.classList.remove('open'));
      });
    }
  }

});