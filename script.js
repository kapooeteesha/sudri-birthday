/* =====================================================
   ✏️ EDIT HERE — everything personal lives in this block
   ===================================================== */
const NAME = "Sudri";
const FINAL_MESSAGE = "Happy 29th, Sudri. 💚";

const REASONS = [
  "You are genuinely good at heart. Not for show, just who you are.",
  "You work so hard, and you never make a big deal about it.",
  "You look like white chocolate. Sweet, and I'm not sorry for saying it.",
  "You're brave in ways you don't notice.",
  "You try to understand me every single time, even when I'm being difficult.",
  "'Kuch bhi nahi hua.' You say it every time I slap or bite you, and I love it every time.",
  "You support my career like it's your own.",
  "You put everyone above yourself.",
  "You're the friend people can count on. You will always be there to help.",
  "You're 5 years older than me, but talking to you never feels like a gap.",
  "You have your own way of making effort, and I notice and value every bit of it.",
  "You care so much, even if your Fortuner gets more attention than me. Huh. 😌",
  "Your laugh: eyes get small, mouth opens up, cheeks like golgappe. I love watching it.",
  "Your singing lifts my mood every single time.",
  "Your 'two minutes' is never two minutes, and I'd still wait.",
  "You make me laugh even when I'm trying to stay annoyed.",
  "You're patient with me more than I deserve.",
  "You're the first person I want to tell things to.",
  "You're soft with people when nobody is watching.",
  "You say 'kuch bhi nahi hua' and somehow I'm the one who feels looked after.",
  "You're calm when I'm not.",
  "You listen, even when I ramble.",
  "Your smile, obviously.",
  "With you, I feel safe being completely myself.",
  "You make me want to be a better person.",
  "You're a great listener (even when you pretend not to be).",
  "You never make anyone feel small, and I love that about you.",
  "Because everything feels easy and exciting at the same time with you.",
  "Because it's you, Sudri. Just you."
];

const PHOTOS = [
  { src:"photo1.jpg.jpg", date:"", caption:"The first time we met" },
  { src:"photo2.jpg.jpg", date:"", caption:"The Plot Twist" },
  { src:"photo3.jpg", date:"", caption:"The reunion, part 1" },
  { src:"photo4.jpg", date:"", caption:"The 'guy is not that bad' reunion, part 2" },
  { src:"photo5.jpg", date:"", caption:"Oh, the trip finally happened" },
  { src:"photo6.jpg", date:"", caption:"'Akele akele bhi khichwalo, kya pta post na kr pao'" },
  { src:"photo7.jpg", date:"", caption:"The Golf Day" },
  { src:"photo8.jpg", date:"", caption:"The F1 Night" },
  { src:"photo9.jpg", date:"", caption:"The Mini Goal Ride" },
  { src:"photo11.jpg", date:"", caption:"The Clarks In Day" }
];
const SECONDS_PER_PHOTO = 5;
/* ===================== END OF EDIT AREA ===================== */

const $ = id => document.getElementById(id);
const show = id => { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); $(id).classList.add('active'); };
const rnd = (a,b) => Math.random()*(b-a)+a;

// stars + fireflies
for(let i=0;i<40;i++){const s=document.createElement('i');s.style.left=rnd(0,100)+'%';s.style.top=rnd(0,100)+'%';
  s.style.animationDelay=rnd(0,3)+'s';$('stars').appendChild(s);}
for(let i=0;i<8;i++){const f=document.createElement('div');f.className='firefly';f.style.left=rnd(5,95)+'%';
  f.style.top=rnd(30,90)+'%';f.style.animationDelay=rnd(0,6)+'s';document.body.appendChild(f);}

// music
const music = $('music'); let musicOn = true;
$('musicBtn').onclick = () => { musicOn = !musicOn; $('musicBtn').classList.toggle('off', !musicOn);
  musicOn ? music.play().catch(()=>{}) : music.pause(); };

// SCREEN 1 — balloons
const BCOL = ['#2e6b4a','#4f9d6e','#a8d5ae','#f4b9c6','#7bbf8e','#f3e9a0'];
BCOL.forEach((c,i)=>{
  const b=document.createElement('div'); b.className='balloon'; b.style.background=c;
  b.style.left=(8+i*15)+'%'; b.style.animationDuration=rnd(9,14)+'s'; b.style.animationDelay=(-i*2)+'s';
  b.onclick=()=>popBalloon(b,c); $('balloons').appendChild(b);
});
function popBalloon(b,c){
  if(musicOn) music.play().catch(()=>{});
  const r=b.getBoundingClientRect(); b.classList.add('pop');
  for(let i=0;i<18;i++){const p=document.createElement('div');p.className='bit';
    p.style.left=r.left+r.width/2+'px';p.style.top=r.top+r.height/2+'px';
    p.style.background=i%3?c:'#f3e9a0';p.style.setProperty('--x',rnd(-120,120)+'px');p.style.setProperty('--y',rnd(-120,120)+'px');
    document.body.appendChild(p);setTimeout(()=>p.remove(),1000);}
  setTimeout(()=>show('s2'),900);
}

// SCREEN 2 — flowers
const FCOL = ['#f4b9c6','#f3e9a0','#d9c2f0','#ffffff','#ffd2a8','#b6e3f5'];
let picked = 0;
for(let i=0;i<29;i++){
  const c=FCOL[i%FCOL.length], d=document.createElement('div'); d.className='flower';
  d.style.setProperty('--g',c); d.style.animationDelay=rnd(0,3)+'s';
  let petals=''; for(let k=0;k<6;k++) petals+=`<ellipse cx="30" cy="16" rx="7" ry="11" fill="${c}" transform="rotate(${k*60} 30 28)"/>`;
  d.innerHTML=`<svg viewBox="0 0 60 100"><path d="M30 40 Q26 70 30 100" stroke="#4f9d6e" stroke-width="3" fill="none"/>
    <path d="M29 75 Q18 68 14 74 Q22 80 29 75" fill="#2e6b4a"/>${petals}<circle cx="30" cy="28" r="7" fill="#e8b84a"/></svg>`;
  d.onclick=()=>pluck(d); $('garden').appendChild(d);
}
function pluck(d){
  d.classList.add('plucked'); setTimeout(()=>d.classList.add('gone'),900);
  $('rnum').textContent=`Reason ${picked+1}`; $('rtext').textContent=REASONS[picked];
  picked++; $('count').textContent=picked;
  $('rnext').textContent = picked===29 ? 'Continue 🥂' : 'Keep going';
  setTimeout(()=>$('reasonCard').classList.remove('hidden'),500);
}
$('rnext').onclick=()=>{ $('reasonCard').classList.add('hidden'); if(picked===29) setTimeout(()=>show('s3'),500); };

// SCREEN 3
$('memBtn').onclick=()=>{ show('s4'); startReel(); };

// SCREEN 4 — hybrid reel (auto-advance, tap sides, hold to pause)
let idx=0, prog=0, paused=false, timer=null;
PHOTOS.forEach(()=>{const b=document.createElement('b');b.innerHTML='<i></i>';$('bars').appendChild(b);});
const PLACEHOLDER='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750"><rect width="600" height="750" fill="#2e6b4a"/><text x="300" y="375" fill="#a8d5ae" font-size="32" text-anchor="middle" font-family="sans-serif">your photo here 💚</text></svg>');
function showPhoto(i){
  idx=i; prog=0; const p=PHOTOS[i], img=$('photo');
  img.onerror=()=>{img.onerror=null;img.src=PLACEHOLDER};
  img.src=p.src; $('pdate').textContent=p.date; $('pcap').textContent=p.caption;
  img.classList.remove('in'); void img.offsetWidth; img.classList.add('in');
  [...$('bars').children].forEach((b,k)=>b.firstChild.style.width = k<i?'100%':'0');
}
function startReel(){ $('end').classList.add('hidden'); showPhoto(0); clearInterval(timer);
  timer=setInterval(()=>{ if(paused) return; prog+=50;
    $('bars').children[idx].firstChild.style.width=(prog/(SECONDS_PER_PHOTO*1000)*100)+'%';
    if(prog>=SECONDS_PER_PHOTO*1000) next(); },50); }
function next(){ idx+1>=PHOTOS.length ? finish() : showPhoto(idx+1); }
function finish(){ clearInterval(timer); $('endText').textContent=FINAL_MESSAGE; $('end').classList.remove('hidden'); }
let downAt=0;
$('reel').addEventListener('pointerdown',()=>{paused=true;downAt=Date.now();});
$('reel').addEventListener('pointerup',e=>{ paused=false;
  if(Date.now()-downAt<250){ e.clientX<innerWidth/3 ? showPhoto(Math.max(0,idx-1)) : next(); } });
$('reel').addEventListener('pointerleave',()=>paused=false);
$('replay').onclick=startReel;
