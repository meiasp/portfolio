// ============================================================
// Reusable toggle/dropdown block.
// window.buildToggleBlock(data) returns a <details> element:
//
//   buildToggleBlock({
//     title: "Toggle Title",
//     content: [
//       { tag: "h3", text: "Heading" },
//       { tag: "h4", text: "Sub-heading" },
//       { tag: "p", text: "Some paragraph text." },
//       { tag: "img", src: "img/example.gif", alt: "...", imgClass: "img-9-16" },
//       { tag: "img-grid", images: ["img1.png", "img2.png", "img3.png"] },
//       { tag: "h-carousel", images: ["img1.png", "img2.png", "img3.png"] }
//     ]
//   })
//
// The "img-grid" content type shows a grid of square thumbnails
// (from img-grid.js) — click one to see it full-size in a modal,
// click the background to close.
//
// The "h-carousel" content type shows a horizontal sliding strip
// of images (from h-carousel.js), matching the carousels used for
// p.conceptButtons on the project-details page.
//
// Images use data-src so they still get picked up by
// lazy-gifs.js even though they're created after page load.
// (This does not apply to img-grid thumbnails, which load
// eagerly since a toggle is collapsed/hidden until opened.)
// ============================================================
window.buildToggleBlock = function(data){
  const details = document.createElement('details');
  details.className = 'toggle-block';

  const summary = document.createElement('summary');
  summary.className = 'toggle-header';
  summary.innerHTML = `
    <span class="toggle-title">${data.title || ''}</span>
    <svg class="toggle-chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  details.appendChild(summary);

  const content = document.createElement('div');
  content.className = 'toggle-content';

  (data.content || []).forEach(item => {
    if (item.tag === 'img-grid') {
      if (typeof window.buildImgGrid === 'function') {
        content.appendChild(window.buildImgGrid({ images: item.images || [] }));
      }
      return;
    }
    if (item.tag === 'h-carousel') {
      if (typeof window.buildHorizontalCarousel === 'function') {
        content.appendChild(window.buildHorizontalCarousel({ images: item.images || [] }));
      }
      return;
    }
    const el = document.createElement(item.tag);
    if (item.tag === 'img') {
      el.dataset.src = item.src;   // picked up by lazy-gifs.js
      el.alt = item.alt || '';
      if (item.imgClass) el.className = item.imgClass;
    } else {
      el.innerHTML = item.text || '';
    }
    content.appendChild(el);
  });

  details.appendChild(content);
  return details;
};