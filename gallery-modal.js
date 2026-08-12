// ============================================================
// Image gallery modal (lightbox with prev/next).
// Usage: openGallery(arrayOfImagePaths, startIndex)
// e.g.  <button onclick="openGallery(userflowImages, 0)">...
// ============================================================
(function(){
  var modal, imageEl, prevBtn, nextBtn, closeBtn, counterEl, backdrop;
  var currentImages = [];
  var currentIndex = 0;

  document.addEventListener('DOMContentLoaded', function(){
    modal    = document.getElementById('galleryModal');
    imageEl  = document.getElementById('galleryImage');
    prevBtn  = document.getElementById('galleryPrev');
    nextBtn  = document.getElementById('galleryNext');
    closeBtn = document.getElementById('galleryClose');
    counterEl = document.getElementById('galleryCounter');
    backdrop = document.getElementById('galleryBackdrop');

    prevBtn.addEventListener('click', function(){ showImage(currentIndex - 1); });
    nextBtn.addEventListener('click', function(){ showImage(currentIndex + 1); });
    closeBtn.addEventListener('click', closeGallery);
    backdrop.addEventListener('click', closeGallery);

    document.addEventListener('keydown', function(e){
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
  });

  function showImage(index){
    if (index < 0 || index >= currentImages.length) return;
    currentIndex = index;
    imageEl.src = currentImages[currentIndex];
    counterEl.textContent = (currentIndex + 1) + ' / ' + currentImages.length;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentImages.length - 1;
  }

  window.openGallery = function(images, startIndex){
    if (!images || !images.length) return;
    currentImages = images;
    showImage(startIndex || 0);
    modal.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
  };

  function closeGallery(){
    modal.classList.remove('open');
    document.documentElement.style.overflow = '';
  }
})();