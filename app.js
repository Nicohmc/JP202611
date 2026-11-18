/* 編輯旅遊內容：直接修改下方 DAYS、CITIES、EXPENSES；純靜態網站，不需 API 金鑰。 */
const googleSearch = (place) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place + ' 日本')}`;
const item = (time, title, note = '', map = '', mapName = '') => ({ time, title, note, map, mapName });
const DAYS = [
  { id:'1125', date:'11/25（三）', title:'抵達日本・川崎', cities:['kawasaki','tokyo'], entries:[
    item('10:10','桃園機場出發','搭機前往日本',googleSearch('桃園國際機場'),'桃園機場'),
    item('14:20','抵達成田機場 T2','抵達後安排機場接送',googleSearch('成田國際機場 第2航廈'),'成田 T2'),
    item('抵達後','機場接送前往川崎','此版更新為「機場接送」，不沿用舊版 N’EX 交通資訊'),
    item('18:30','晚餐：木炭烤架','依原筆記保留餐廳名稱及連結','https://maps.app.goo.gl/f43Jacu7ducKM1UGA?g_st=ic','餐廳位置'),
    item('住宿','JR 東日本 METS','川崎住宿；未指定分館，使用地圖搜尋',googleSearch('JR 東日本 HOTEL METS 川崎'),'查詢住宿')
  ]},
  { id:'1126', date:'11/26（四）', title:'川崎 → 東京 → 長野', cities:['kawasaki','tokyo','nagano'], entries:[
    item('11:00','川崎出發','',googleSearch('川崎站'),'川崎站'),
    item('13:30','東京','轉乘／停留時間依實際安排確認',googleSearch('東京站'),'東京站'),
    item('15:00','抵達長野','',googleSearch('長野站'),'長野站'),
    item('晚餐','日本酒と炭火焼き ちどり','', 'https://maps.app.goo.gl/P45WLUsk7GRwgKq4A?g_st=ic','餐廳位置'),
    item('住宿','長野住宿（地圖連結）','筆記未提供飯店文字名稱，保留原連結','https://maps.app.goo.gl/DQZyRGv5r1a9xGHE6?g_st=ic','住宿位置')
  ]},
  { id:'1127', date:'11/27（五）', title:'善光寺散策', cities:['nagano'], entries:[
    item('10:30','出發','從長野出發'),
    item('午餐','住吉鰻魚','', 'https://maps.app.goo.gl/o1y9BoMj5Kihb1H18?g_st=ic','餐廳位置'),
    item('午後','善光寺巡禮','',googleSearch('長野 善光寺'),'善光寺'),
    item('午後','咖啡時間','咖啡店尚未指定',googleSearch('善光寺 周邊 咖啡'),'附近咖啡'),
    item('之後','回房間休息'),
    item('晚餐','晚餐地點（原筆記連結）','未提供餐廳文字名稱','https://maps.app.goo.gl/puWoh6KZ5JwKsF2b6?g_st=ic','餐廳位置')
  ]},
  { id:'1128', date:'11/28（六）', title:'松本城一日散策', cities:['nagano','matsumoto'], entries:[
    item('09:30','集合'),
    item('10:00','搭乘信越本線 8 號','保留原筆記的車次寫法；車種、路線建議以車票核對'),
    item('10:50','抵達松本','步行前往松本城',googleSearch('松本站'),'松本站'),
    item('午餐','午餐地點（原筆記連結）','未提供餐廳文字名稱','https://maps.app.goo.gl/TUuCruf7RHEEs8ZMA?g_st=ic','午餐位置'),
    item('午後','松本城散策','',googleSearch('松本城'),'松本城'),
    item('午後','喝咖啡','店家尚未指定',googleSearch('松本城 附近 咖啡'),'附近咖啡'),
    item('之後','返回長野','回程時間未提供'),
    item('19:00','晚餐（原筆記連結）','以最新更新的 19:00 為準','https://maps.app.goo.gl/pPEdezDc9PuXbpHF7?g_st=ic','餐廳位置')
  ]},
  { id:'1129', date:'11/29（日）', title:'金澤一日遊', cities:['nagano','kanazawa'], entries:[
    item('09:40','長野出發','',googleSearch('長野站'),'長野站'),
    item('10:45','抵達金澤','',googleSearch('金澤站'),'金澤站'),
    item('上午','東茶屋街散策','',googleSearch('金澤 東茶屋街'),'東茶屋街'),
    item('上午','金澤城下町散策','',googleSearch('金澤城公園'),'金澤城'),
    item('午餐','仙桃','', 'https://maps.app.goo.gl/DiMeCJVHsq2LtMjGA?g_st=ic','餐廳位置'),
    item('午後','主計町茶屋街散策','',googleSearch('金澤 主計町茶屋街'),'主計町茶屋街'),
    item('17:09','金澤出發','',googleSearch('金澤站'),'金澤站'),
    item('18:15','返回長野','',googleSearch('長野站'),'長野站'),
    item('18:30','晚餐：うわだち 純米酒と自然派ワイン','', 'https://maps.app.goo.gl/evXs7Bnde8eK6AgR9?g_st=ic','餐廳位置')
  ]},
  { id:'1130', date:'11/30（一）', title:'輕井澤自由活動', cities:['nagano','karuizawa'], entries:[
    item('10:46','長野出發','',googleSearch('長野站'),'長野站'),
    item('11:16','抵達輕井澤','',googleSearch('輕井澤站'),'輕井澤站'),
    item('白天','輕井澤自由活動','原筆記有「OR」備選註記，尚未指明替代方案；以下保留自由活動',googleSearch('輕井澤'),'輕井澤'),
    item('16:27','輕井澤出發','',googleSearch('輕井澤站'),'輕井澤站'),
    item('16:50','返回長野','',googleSearch('長野站'),'長野站'),
    item('18:30','晚餐：Raku うまい魚うまい酒楽','', 'https://maps.app.goo.gl/7kQ9oYc6KxHP3wS3A?g_st=ic','餐廳位置')
  ]},
  { id:'1201', date:'12/01（二）', title:'長野 → 東京 → 成田', cities:['nagano','tokyo'], entries:[
    item('09:49','JR 556 號：長野出發','車次名稱保留原筆記，建議以車票再次核對',googleSearch('長野站'),'長野站'),
    item('11:20','抵達東京','',googleSearch('東京站'),'東京站'),
    item('12:03','總武地下月台 4 番','搭乘 N’EX 26 號',googleSearch('東京站 總武線 地下月台'),'東京站'),
    item('12:54','抵達成田機場','',googleSearch('成田國際機場'),'成田機場'),
    item('抵達後','接駁車前往成田 JAL 飯店','',googleSearch('ホテル日航成田 Hotel Nikko Narita'),'飯店搜尋'),
    item('14:00','集合'),
    item('之後','搭接駁車前往 AEON MALL','未指定分店，先用成田地區搜尋',googleSearch('AEON MALL 成田'),'AEON MALL')
  ]},
  { id:'1202', date:'12/02（三）', title:'待安排', cities:['tokyo'], entries:[] }
];
const CITIES = {
  kawasaki:{name:'川崎',subtitle:'抵達日本的第一站',description:'Day 1 入住川崎，Day 2 經東京前往長野。',days:['1125','1126'],search:'川崎站'},
  nagano:{name:'長野',subtitle:'信州旅程的主要據點',description:'善光寺、日本酒與在地美食；松本、金澤、輕井澤也由此往返。',days:['1126','1127','1128','1129','1130','1201'],search:'長野站'},
  matsumoto:{name:'松本',subtitle:'古城與咖啡散策',description:'11/28 松本一日遊：松本城、午餐及咖啡時光。',days:['1128'],search:'松本城'},
  kanazawa:{name:'金澤',subtitle:'茶屋街與城下町',description:'11/29 造訪東茶屋街、金澤城下町與主計町茶屋街。',days:['1129'],search:'金澤 東茶屋街'},
  karuizawa:{name:'輕井澤',subtitle:'秋冬森林裡的自由時光',description:'11/30 輕井澤自由活動，傍晚返回長野。',days:['1130'],search:'輕井澤站'},
  tokyo:{name:'東京／成田',subtitle:'轉乘、機場與購物',description:'11/25 抵達成田；11/26 經東京轉車；12/01 回東京、成田並前往 AEON MALL。',days:['1125','1126','1201','1202'],search:'成田國際機場'}
};
const EXPENSES = [
  { date:'11/25',details:[['住宿','18,254 × 4 + 19,224 = 92,240'],['車子','5,606 × 5 = 28,030'],['餐飲','尚未填寫']]},
  ...['11/26','11/27','11/28','11/29','11/30','12/01','12/02'].map(date=>({date,details:[]}))
];
const panel=document.querySelector('#detail-panel');
const content=document.querySelector('#panel-content');
const kicker=document.querySelector('#panel-kicker');
const scrim=document.querySelector('#scrim');
const esc=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=(url,label='Google 地圖')=>url?`<a class="map-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">📍 ${esc(label)} ↗</a>`:'';
const entriesMarkup=(entries)=>entries.length?`<div class="timeline">${entries.map(e=>`<div class="item"><div class="item-time">${esc(e.time)}</div><div class="item-title">${esc(e.title)}</div>${e.note?`<div class="item-note">${esc(e.note)}</div>`:''}${link(e.map,e.mapName||'Google 地圖')}</div>`).join('')}</div>`:'<div class="info-block">目前尚未提供 12/02 的活動、交通或餐飲安排。</div>';
const dayMarkup=(day)=>`<div class="day-title"><h3>${esc(day.date)}｜${esc(day.title)}</h3><span>${day.entries.length} 項</span></div>${entriesMarkup(day.entries)}`;
function openPanel(){panel.classList.add('open');scrim.hidden=false;document.body.classList.add('has-panel');panel.scrollTop=0;}
function closePanel(){panel.classList.remove('open');scrim.hidden=true;document.querySelectorAll('.hotspot,.city-pills button').forEach(n=>n.classList.remove('active'));}
function selectCity(id){
  const city=CITIES[id]; if(!city)return;
  document.querySelectorAll('.hotspot,.city-pills button').forEach(n=>n.classList.toggle('active',(n.dataset.city||n.dataset.openCity)===id));
  kicker.textContent='CITY GUIDE · 旅程地點';
  content.innerHTML=`<h2>${esc(city.name)}</h2><p class="subtitle">${esc(city.subtitle)}<br>${esc(city.description)}</p>${link(googleSearch(city.search),'開啟城市地圖')}<div class="small-label">相關日期與詳細行程</div>${city.days.map(d=>dayMarkup(DAYS.find(day=>day.id===d))).join('')}`;
  openPanel();
}
function selectDay(id){const day=DAYS.find(d=>d.id===id);if(!day)return;kicker.textContent='DAILY ITINERARY · 每日行程';content.innerHTML=`<h2>${esc(day.date)}</h2><p class="subtitle">${esc(day.title)}</p><nav class="date-nav" aria-label="選擇日期">${DAYS.map(d=>`<button type="button" class="date-chip ${d.id===id?'selected':''}" data-open-day="${d.id}">${esc(d.date.split('（')[0])}</button>`).join('')}</nav>${entriesMarkup(day.entries)}`;openPanel();}
function openBudget(){kicker.textContent='TRAVEL EXPENSES · 費用記錄';const total=92240+28030;content.innerHTML=`<h2>旅費記錄</h2><p class="subtitle">依 2026/11/25 更新筆記原樣記錄。原資料未標示幣別、支付狀態或每人分攤方式，以下不擅自判定。</p><table class="expense-table"><thead><tr><th>日期</th><th>項目／紀錄</th></tr></thead><tbody>${EXPENSES.map(e=>`<tr><td>${e.date}</td><td>${e.details.length?e.details.map(x=>`<div><strong>${esc(x[0])}：</strong>${esc(x[1])}</div>`).join(''):'尚未填寫'}</td></tr>`).join('')}</tbody></table><div class="summary-box">11/25 已列金額合計<br><strong>${total.toLocaleString('zh-TW')}</strong><div class="note">92,240 + 28,030；不含尚未填寫的餐飲及其他天數，幣別待確認。</div></div>`;openPanel();}
function openAll(){kicker.textContent='FULL ITINERARY · 全部行程';content.innerHTML=`<h2>2026 信州行</h2><p class="subtitle">11/25（三）－ 12/02（三） · 8 天行程筆記</p><nav class="date-nav" aria-label="快速跳到日期">${DAYS.map(d=>`<button type="button" class="date-chip" data-open-day="${d.id}">${esc(d.date.split('（')[0])}</button>`).join('')}</nav>${DAYS.map(dayMarkup).join('')}<div class="info-block"><strong>資料註記：</strong>12/02 尚未安排；未提供名稱的店家以原 Google Maps 連結呈現。地圖搜尋連結為輔助推薦，原筆記連結均原樣保留。</div>`;openPanel();}
document.querySelectorAll('.hotspot').forEach(el=>{el.addEventListener('click',()=>selectCity(el.dataset.city));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectCity(el.dataset.city);}})});
document.addEventListener('click',e=>{const city=e.target.closest('[data-open-city]');if(city){selectCity(city.dataset.openCity);return;}const day=e.target.closest('[data-open-day]');if(day){selectDay(day.dataset.openDay);return;}});
document.querySelector('#open-all').addEventListener('click',openAll);
document.querySelector('#open-budget').addEventListener('click',openBudget);
document.querySelector('#close-panel').addEventListener('click',closePanel);
document.querySelector('#reset-view').addEventListener('click',()=>{closePanel();document.querySelector('#map-heading').scrollIntoView({behavior:'smooth'});});
scrim.addEventListener('click',closePanel);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel();});
// 桌面版預設顯示操作說明；手機版先留完整地圖視野。
if(window.matchMedia('(min-width: 761px)').matches){kicker.textContent='WELCOME · 互動地圖';content.innerHTML='<div class="empty-state"><div class="emoji">🚆 🍁</div><h2>點亮你的旅行地圖</h2><p>把滑鼠移到城市圓形照片上，會看到發光的邊框與箭頭。點一下，就能打開該城市的每日時程、店家與 Google 地圖。</p><button class="primary-btn" type="button" id="start-guide">從長野開始探索 →</button></div>';document.querySelector('#start-guide').addEventListener('click',()=>selectCity('nagano'));}
