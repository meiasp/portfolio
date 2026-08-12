// ============================================================
// Square thumbnail grid + single-image modal.
//
// window.buildImgGrid(data) returns a DOM node:
//
//   buildImgGrid({ images: ["img1.png", "img2.png", "img3.png"] })
//
// You can also skip buildImgGrid entirely and write thumbnails
// directly in HTML — any element with class "img-grid-thumb"
// opens the modal on click, wherever it lives on the page:
//
//   <div class="img-grid">
//     <img class="img-grid-thumb" src="img/cert-thumb.jpg">
//     <img class="img-grid-thumb" src="img/cert-small.jpg" data-full="img/cert-full.jpg">
//   </div>
//
// By default the thumbnail's own `src` is what opens in the
// modal. Add `data-full="path/to/bigger-image.jpg"` on a thumb
// if you want the modal to show a different (e.g. higher-res)
// image than the thumbnail itself.
//
// Requires the modal markup to exist once in the page:
//
//   <div class="img-modal" id="imgModal">
//     <div class="img-modal-backdrop" id="imgModalBackdrop"></div>
//     <img src="" alt="" id="imgModalImage" class="img-modal-image">
//     <button class="img-modal-close" id="imgModalClose">
//       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M6 6L18 18M18 6L6 18"/>
//       </svg>
//     </button>
//   </div>
// ============================================================

window.buildImgGrid = function(data){
  const images = data.images || [];
  const grid = document.createElement('div');
  grid.className = 'img-grid';

  images.forEach(src => {
    const thumb = document.createElement('img');
    thumb.className = 'img-grid-thumb';
    thumb.src = src;
    thumb.alt = data.label || '';
    grid.appendChild(thumb);
  });

  return grid;
};

// ---- Single-image modal ----
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('imgModal');
  if (!modal) return; // modal markup not present on this page

  const backdrop = document.getElementById('imgModalBackdrop');
  const imgEl = document.getElementById('imgModalImage');
  const closeBtn = document.getElementById('imgModalClose');

  window.openImageModal = function(src){
    imgEl.src = src;
    modal.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
  };

  function closeModal(){
    modal.classList.remove('open');
    document.documentElement.style.overflow = '';
  }

  // Clicking the background (modal container or backdrop itself, NOT
  // the image) closes it — clicking the image does nothing.
  modal.addEventListener('click', function(e){
    if (e.target === modal || e.target === backdrop) closeModal();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Event delegation: catches clicks on ANY .img-grid-thumb, whether
  // it was created by buildImgGrid() or written directly in HTML
  // (e.g. on the resume page). This is the single source of truth
  // for opening the modal now — buildImgGrid no longer attaches its
  // own per-thumbnail listener, so behavior is identical either way.
  document.addEventListener('click', function(e){
    const thumb = e.target.closest('.img-grid-thumb');
    if (!thumb) return;
    const full = thumb.dataset.full || thumb.src;
    window.openImageModal(full);
  });
});