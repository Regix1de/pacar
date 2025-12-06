const meetDate = new Date('2026-01-10T10:00:00');
document.getElementById('meet-date').textContent = 'Meet: ' + meetDate.toLocaleString();

function updateCountdown(){
  const now = new Date();
  let diff = meetDate - now;
  if(diff < 0){ document.getElementById('count').textContent='Sudah ketemu!';return;}
  const d=Math.floor(diff/86400000); diff-=d*86400000;
  const h=String(Math.floor(diff/3600000)).padStart(2,'0'); diff-=h*3600000;
  const m=String(Math.floor(diff/60000)).padStart(2,'0'); diff-=m*60000;
  const s=String(Math.floor(diff/1000)).padStart(2,'0');
  document.getElementById('count').textContent=`${d}h : ${h}j : ${m}m : ${s}d`;
}
setInterval(updateCountdown,1000);updateCountdown();

document.getElementById('surpriseBtn').onclick=()=> {
  document.getElementById('surprise').classList.toggle('hidden');
};
