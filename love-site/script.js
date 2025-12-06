const meetDate = new Date('2026-01-10T10:00:00');
document.getElementById('meet-date').textContent = 'Meet: ' + meetDate.toLocaleString();

function updateCountdown(){
  const now = new Date();
  let diff = meetDate - now;
  if(diff < 0){ document.getElementById('count').textContent = 'Sudah ketemu!'; return; }
  const d = Math.floor(diff / (1000*60*60*24));
  diff -= d * (1000*60*60*24);
  const h = String(Math.floor(diff / (1000*60*60))).padStart(2,'0');
  diff -= h * (1000*60*60);
  const m = String(Math.floor(diff / (1000*60))).padStart(2,'0');
  diff -= m * (1000*60);
  const s = String(Math.floor(diff / 1000)).padStart(2,'0');
  document.getElementById('count').textContent = `${d} hari : ${h} : ${m} : ${s}`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById('surpriseBtn').addEventListener('click', () => {
  const el = document.getElementById('surprise');
  el.classList.toggle('hidden');
});
