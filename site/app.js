const script = 'loadstring(game:HttpGet("https://joinuranium.com/boot"))()';
const hint = document.getElementById('copy-hint');
let resetHint;
document.getElementById('copy-script').addEventListener('click', async () => {
 try {
  await navigator.clipboard.writeText(script);
  hint.textContent = 'copied ✓';
  document.getElementById('manual-copy').hidden = true;
  clearTimeout(resetHint);
  resetHint = setTimeout(() => { hint.textContent = 'tap to copy ↗'; }, 2400);
 } catch {
  document.getElementById('manual-copy').hidden = false;
  const text = document.getElementById('script-text');
  text.focus(); text.select();
  hint.textContent = 'your script is below ↓';
 }
});

const artwork = document.querySelector('.orbit');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let pointerFrame;
window.addEventListener('pointermove', event => {
 if (reducedMotion.matches || event.pointerType !== 'mouse' || innerWidth <= 600) return;
 cancelAnimationFrame(pointerFrame);
 pointerFrame = requestAnimationFrame(() => {
  artwork.style.setProperty('--tilt-x', ((event.clientX / innerWidth - .5) * 16) + 'deg');
  artwork.style.setProperty('--tilt-y', ((.5 - event.clientY / innerHeight) * 12) + 'deg');
 });
}, {passive:true});
document.documentElement.addEventListener('pointerleave', () => {
 cancelAnimationFrame(pointerFrame);
 artwork.style.setProperty('--tilt-x', '0deg');
 artwork.style.setProperty('--tilt-y', '0deg');
});
