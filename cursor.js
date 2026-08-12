// ============================================================
// Custom cursor
// - dot follows the mouse
// - shrinks over interactive elements
// - auto-inverts to dark whenever the element under the cursor
//   resolves to var(--white) as its effective background,
//   so it stays visible on white surfaces without hardcoding
//   which elements those are.
// ============================================================

// Resolve --white once, normalized to the browser's rgb() format
// so it can be compared against getComputedStyle() output.
function resolveColor(cssColor){
  const probe = document.createElement('div');
  probe.style.color = cssColor;
  probe.style.display = 'none';
  document.body.appendChild(probe);
  const rgb = getComputedStyle(probe).color;
  document.body.removeChild(probe);
  return rgb;
}

const whiteVar = getComputedStyle(document.documentElement).getPropertyValue('--white').trim() || '#ffffff';
const WHITE_RGB = resolveColor(whiteVar);

// Walk up from the hovered element until we find a non-transparent
// background — that's the color actually visible at that point.
function getEffectiveBackground(el){
  while (el && el !== document.documentElement) {
    const bg = getComputedStyle(el).backgroundColor;
    if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
      return bg;
    }
    el = el.parentElement;
  }
  return getComputedStyle(document.body).backgroundColor;
}

let mouseX = 0, mouseY = 0, colorCheckQueued = false;

$(document).on('mousemove', function(e){
  const o = $('.box').offset();
  $('.dot').css({
    'top': e.pageY - o.top,
    'left': e.pageX - o.left
  });

  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!colorCheckQueued) {
    colorCheckQueued = true;
    requestAnimationFrame(updateCursorColor);
  }
});

function updateCursorColor(){
  colorCheckQueued = false;
  const el = document.elementFromPoint(mouseX, mouseY);
  if (!el) return;
  const bg = getEffectiveBackground(el);
  $('.box').toggleClass('invert', bg === WHITE_RGB);
}

// Shrink on interactive elements. Delegated on document so it still
// fires for elements added after page load (e.g. .work-thumb /
// .archive-card, which are injected dynamically by script.js).
$(document)
  .on('mouseenter', '.work-thumb, .archive-card, .btn-primary, .circle-btn, .filter-pill, nav a, .hamburger, .close-btn', function(){
    $('.box').addClass('shrink');
  })
  .on('mouseleave', '.work-thumb, .archive-card, .btn-primary, .circle-btn, .filter-pill, nav a, .hamburger, .close-btn', function(){
    $('.box').removeClass('shrink');
  });