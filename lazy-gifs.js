// ============================================================
// Lazy-loads any <img data-src="..."> only once it's about to
// scroll into view, instead of the browser fetching every GIF
// on the page immediately on load. The .project-section img
// rule already reserves the box's size via aspect-ratio + a
// background color, so nothing shifts while images load in.
// ============================================================
document.addEventListener('DOMContentLoaded', function(){
  var lazyImgs = document.querySelectorAll('img[data-src]');
  if (!lazyImgs.length) return;

  if (!('IntersectionObserver' in window)) {
    // Very old browser fallback: just load everything now.
    lazyImgs.forEach(function(img){ img.src = img.dataset.src; });
    return;
  }

  var observer = new IntersectionObserver(function(entries, obs){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        var img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '500px 0px', threshold: 0.01 }); // start loading ~500px before it's on screen

  lazyImgs.forEach(function(img){ observer.observe(img); });
});
