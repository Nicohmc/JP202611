/* 行程資料在 DAYS，費用由 Google Apps Script + Sheets 儲存。GAS 網址設定於 config.js */
const googleSearch = (place) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place + ' 日本')}`;
const item = (time, title, note = '', map = '', mapName = '') => ({ time, title, note, map, mapName });
const NAGANO_HOTEL = {
  name: 'Chisun Grand Nagano（チサングランド長野）',
  photo: 'https://img.travel.rakuten.co.jp/image/tr/api/if/48xlO/?f_no=627',
  booking: 'https://travel.rakuten.co.jp/HOTEL/627/627.html',
  maps: googleSearch('チサングランド長野 長野市南千歳2-17-1')
};

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
    item('住宿',NAGANO_HOTEL.name,'11/26－12/01 長野住宿；地址：長野市南千歲 2-17-1',NAGANO_HOTEL.maps,'飯店位置')
  ]},
  { id:'1127', date:'11/27（五）', title:'善光寺散策', cities:['nagano'], entries:[
    item('10:30','出發','從長野出發'),
    item('午餐','住吉鰻魚','', 'https://maps.app.goo.gl/o1y9BoMj5Kihb1H18?g_st=ic','餐廳位置'),
    item('午後','善光寺巡禮','',googleSearch('長野 善光寺'),'善光寺'),
    item('午後','咖啡時間','咖啡店尚未指定',googleSearch('善光寺 周邊 咖啡'),'附近咖啡'),
    item('之後','回房間休息'),
    item('晚餐','晚餐地點（原筆記連結）','未提供餐廳文字名稱','https://maps.app.goo.gl/puWoh6KZ5JwKsF2b6?g_st=ic','餐廳位置'),
    item('住宿',NAGANO_HOTEL.name,'長野住宿',NAGANO_HOTEL.maps,'飯店位置')
  ]},
  { id:'1128', date:'11/28（六）', title:'松本城一日散策', cities:['nagano','matsumoto'], entries:[
    item('09:30','集合'),
    item('10:00','搭乘信越本線 8 號','保留原筆記的車次寫法；車種、路線建議以車票核對'),
    item('10:50','抵達松本','步行前往松本城',googleSearch('松本站'),'松本站'),
    item('午餐','午餐地點（原筆記連結）','未提供餐廳文字名稱','https://maps.app.goo.gl/TUuCruf7RHEEs8ZMA?g_st=ic','午餐位置'),
    item('午後','松本城散策','',googleSearch('松本城'),'松本城'),
    item('午後','喝咖啡','店家尚未指定',googleSearch('松本城 附近 咖啡'),'附近咖啡'),
    item('之後','返回長野','回程時間未提供'),
    item('19:00','晚餐（原筆記連結）','以最新更新的 19:00 為準','https://maps.app.goo.gl/pPEdezDc9PuXbpHF7?g_st=ic','餐廳位置'),
    item('住宿',NAGANO_HOTEL.name,'返回長野住宿',NAGANO_HOTEL.maps,'飯店位置')
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
    item('18:30','晚餐：うわだち 純米酒と自然派ワイン','', 'https://maps.app.goo.gl/evXs7Bnde8eK6AgR9?g_st=ic','餐廳位置'),
    item('住宿',NAGANO_HOTEL.name,'長野住宿',NAGANO_HOTEL.maps,'飯店位置')
  ]},
  { id:'1130', date:'11/30（一）', title:'輕井澤自由活動', cities:['nagano','karuizawa'], entries:[
    item('10:46','長野出發','',googleSearch('長野站'),'長野站'),
    item('11:16','抵達輕井澤','',googleSearch('輕井澤站'),'輕井澤站'),
    item('白天','輕井澤自由活動','原筆記有「OR」備選註記，尚未指明替代方案；以下保留自由活動',googleSearch('輕井澤'),'輕井澤'),
    item('16:27','輕井澤出發','',googleSearch('輕井澤站'),'輕井澤站'),
    item('16:50','返回長野','',googleSearch('長野站'),'長野站'),
    item('18:30','晚餐：Raku うまい魚うまい酒楽','', 'https://maps.app.goo.gl/7kQ9oYc6KxHP3wS3A?g_st=ic','餐廳位置'),
    item('住宿',NAGANO_HOTEL.name,'長野最後一晚',NAGANO_HOTEL.maps,'飯店位置')
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
  nagano:{name:'長野',subtitle:'信州旅程的主要據點',description:'住宿：Chisun Grand Nagano。善光寺、日本酒與在地美食；松本、金澤、輕井澤也由此往返。',days:['1126','1127','1128','1129','1130','1201'],search:'長野站'},
  matsumoto:{name:'松本',subtitle:'古城與咖啡散策',description:'11/28 松本一日遊：松本城、午餐及咖啡時光。',days:['1128'],search:'松本城'},
  kanazawa:{name:'金澤',subtitle:'茶屋街與城下町',description:'11/29 造訪東茶屋街、金澤城下町與主計町茶屋街。',days:['1129'],search:'金澤 東茶屋街'},
  karuizawa:{name:'輕井澤',subtitle:'秋冬森林裡的自由時光',description:'11/30 輕井澤自由活動，傍晚返回長野。',days:['1130'],search:'輕井澤站'},
  tokyo:{name:'東京／成田',subtitle:'轉乘、機場與購物',description:'11/25 抵達成田；11/26 經東京轉車；12/01 回東京、成田並前往 AEON MALL。',days:['1125','1126','1201','1202'],search:'成田國際機場'}
};
const LEGACY_EXPENSES = [
  { date:'11/25',details:[['住宿','18,254 × 4 + 19,224 = 92,240'],['車子','5,606 × 5 = 28,030'],['餐飲','尚未填寫']]},
  ...['11/26','11/27','11/28','11/29','11/30','12/01','12/02'].map(date=>({date,details:[]}))
];
const panel=document.querySelector('#detail-panel');
const content=document.querySelector('#panel-content');
const kicker=document.querySelector('#panel-kicker');
const scrim=document.querySelector('#scrim');
const esc=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=(url,label='Google 地圖')=>url?`<a class="map-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">📍 ${esc(label)} ↗</a>`:'';
const entriesMarkup=(entries)=>entries.length?`<div class="timeline">${entries.map(e=>`<div class="item"><div class="item-time">${esc(e.time)}</div><div class="item-title">${esc(e.title)}</div>${e.note?`<div class="item-note">${esc(e.note)}</div>`:''}${link(e.map,e.mapName||'Google 地圖')}${e.title===NAGANO_HOTEL.name?`<div class="hotel-card"><img src="${esc(NAGANO_HOTEL.photo)}" alt="長野住宿旅館照片" loading="lazy" referrerpolicy="no-referrer"><a href="${esc(NAGANO_HOTEL.booking)}" target="_blank" rel="noopener noreferrer">🏨 樂天旅宿詳細資訊 ↗</a></div>`:''}</div>`).join('')}</div>`:'<div class="info-block">目前尚未提供 12/02 的活動、交通或餐飲安排。</div>';
const dayMarkup=(day)=>`<div class="day-title"><h3>${esc(day.date)}｜${esc(day.title)}</h3><span>${day.entries.length} 項</span></div>${entriesMarkup(day.entries)}`;
function openPanel(){panel.classList.add('open');scrim.hidden=false;document.body.classList.add('has-panel');panel.scrollTop=0;}
function closePanel(){expenseView=0;panel.classList.remove('open');scrim.hidden=true;document.querySelectorAll('.hotspot,.city-pills button').forEach(n=>n.classList.remove('active'));}
function selectCity(id){
  expenseView=0;const city=CITIES[id]; if(!city)return;
  document.querySelectorAll('.hotspot,.city-pills button').forEach(n=>n.classList.toggle('active',(n.dataset.city||n.dataset.openCity)===id));
  kicker.textContent='CITY GUIDE · 旅程地點';
  content.innerHTML=`<h2>${esc(city.name)}</h2><p class="subtitle">${esc(city.subtitle)}<br>${esc(city.description)}</p>${link(googleSearch(city.search),'開啟城市地圖')}${id==='nagano'?`<div class="hotel-feature"><img src="${esc(NAGANO_HOTEL.photo)}" alt="Chisun Grand Nagano 飯店照片" loading="lazy" referrerpolicy="no-referrer"><strong>長野住宿：${esc(NAGANO_HOTEL.name)}</strong><p>長野市南千歲 2-17-1</p>${link(NAGANO_HOTEL.maps,'Google Maps')}&nbsp; <a class="map-link" href="${esc(NAGANO_HOTEL.booking)}" target="_blank" rel="noopener noreferrer">🏨 樂天飯店頁 ↗</a></div>`:''}<div class="small-label">相關日期與詳細行程</div>${city.days.map(d=>dayMarkup(DAYS.find(day=>day.id===d))).join('')}`;
  openPanel();
}
function selectDay(id){expenseView=0;const day=DAYS.find(d=>d.id===id);if(!day)return;kicker.textContent='DAILY ITINERARY · 每日行程';content.innerHTML=`<h2>${esc(day.date)}</h2><p class="subtitle">${esc(day.title)}</p><nav class="date-nav" aria-label="選擇日期">${DAYS.map(d=>`<button type="button" class="date-chip ${d.id===id?'selected':''}" data-open-day="${d.id}">${esc(d.date.split('（')[0])}</button>`).join('')}</nav>${entriesMarkup(day.entries)}`;openPanel();}
// 費用紀錄只透過 GAS 儲存；未連線時顯示原始筆記供參考，避免把未儲存項目當作共享紀錄。
const GAS_URL = (window.TRIP_CONFIG?.gasWebAppUrl || '').trim();
let expenseRows = [];
let expenseView = 0;
let expenseRequest = 0;
let budgetBusy = false;
const money = n => Number(n).toLocaleString('zh-TW',{maximumFractionDigits:2});
const totals = rows => rows.reduce((acc,r)=>{const k=r.currency || '未指定'; acc[k]=(acc[k]||0)+Number(r.amount||0);return acc;},{});
const getExpenses = (cb) => {
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(GAS_URL)) { cb(new Error('尚未設定 GAS 網址'));return; }
  const name = '__tripJsonp' + (++expenseRequest);
  const script = document.createElement('script');
  let done = false;
  const finish=(err,data)=>{if(done)return;done=true;clearTimeout(timer);script.remove();delete window[name];cb(err,data);};
  window[name]=data=>finish(null,data);
  script.onerror=()=>finish(new Error('讀取失敗，請確認 GAS 已部署並允許存取'));
  const timer=setTimeout(()=>finish(new Error('連線逾時，請重試')),15000);
  script.src=GAS_URL+'?action=list&callback='+name+'&t='+Date.now();
  document.head.appendChild(script);
};
const expenseTable = () => {
  const sum=totals(expenseRows);
  const groups=Object.entries(sum).map(([k,v])=>`<div><span>${esc(k)}</span><strong>${money(v)}</strong></div>`).join('') || '<span>尚無儲存的費用</span>';
  return `<div class="budget-totals">${groups}</div><div class="expense-scroll"><table class="expense-table"><thead><tr><th>日期</th><th>項目</th><th>付款／記錄人</th><th>金額</th></tr></thead><tbody>${expenseRows.length?expenseRows.map(r=>`<tr><td>${esc(r.date)}</td><td><strong>${esc(r.category)}</strong><div>${esc(r.description||'')}</div></td><td>${esc(r.person||'—')}</td><td class="amount">${esc(r.currency)} ${money(r.amount)}</td></tr>`).join(''):'<tr><td colspan="4">目前沒有共同費用紀錄</td></tr>'}</tbody></table></div>`;
};
function drawExpenses(message=''){
  if(expenseView===0)return;
  content.innerHTML=`<h2>共同旅費記錄</h2><p class="subtitle">新增後會寫入 Google 試算表，其他旅伴重新整理即可看見。依幣別分開加總，不混算日圓與台幣。</p>
  ${message?`<div class="budget-status" role="status">${esc(message)}</div>`:''}
  <div id="expense-report">${expenseTable()}</div>
  <div class="budget-buttons"><button type="button" class="outline-btn" id="expense-refresh">↻ 重新整理</button><a class="map-link" href="./README.md" target="_blank" rel="noopener">設定說明</a></div>
  <h3>新增一筆共同費用</h3>
  <form id="expense-form" class="expense-form">
    <label>日期<select name="date" required>${DAYS.map(d=>`<option value="2026-${d.id==='1201'||d.id==='1202'?'12':'11'}-${d.id.slice(2)}">${esc(d.date)}</option>`).join('')}</select></label>
    <label>類別<select name="category" required><option>住宿</option><option>交通</option><option>餐飲</option><option>景點</option><option>購物</option><option>其他</option></select></label>
    <label>項目說明<input name="description" maxlength="120" placeholder="例：長野晚餐" required></label>
    <label>金額<input name="amount" type="number" min="0.01" step="0.01" placeholder="例如 3500" required></label>
    <label>幣別<select name="currency" required><option value="JPY">JPY 日圓</option><option value="TWD">TWD 台幣</option><option value="未指定">未指定</option></select></label>
    <label>付款／記錄人<input name="person" maxlength="40" placeholder="輸入名字（選填）"></label>
    <label>備註<input name="note" maxlength="240" placeholder="選填"></label>
    <label>共同記帳碼（若有設定）<input name="pin" type="password" maxlength="60" autocomplete="off" placeholder="未設定就留空"></label>
    <button type="submit" class="primary-btn" ${budgetBusy?'disabled':''}>${budgetBusy?'儲存中…':'＋ 儲存到 Google 試算表'}</button>
  </form>
  <div class="info-block"><strong>原始筆記（不計入線上總額）：</strong>11/25 住宿 18,254 × 4 + 19,224 = 92,240；車子 5,606 × 5 = 28,030。原筆記未標示幣別。若需納入加總，請在 GAS 先執行 <code>seedInitialExpenses</code> 一次，或手動新增並選擇正確幣別。</div>
  ${!GAS_URL?'<div class="info-block">尚未串接 GAS：請依 README 將部署網址填入 <code>config.js</code>，即可啟用大家共同新增記帳。</div>':''}`;
  document.querySelector('#expense-refresh').addEventListener('click',refreshExpenses);
  document.querySelector('#expense-form').addEventListener('submit',submitExpense);
}
function refreshExpenses(){
  if(!expenseView)return;
  const requestView=expenseView;
  const btn=document.querySelector('#expense-refresh');if(btn)btn.disabled=true;
  getExpenses((err,res)=>{
    if(!expenseView||requestView!==expenseView)return;
    if(err||!res||res.ok!==true){drawExpenses('尚未連線：'+(err?.message||res?.error||'未知錯誤'));return;}
    expenseRows=Array.isArray(res.rows)?res.rows:[];
    drawExpenses('已從 Google 試算表更新：'+expenseRows.length+' 筆');
  });
}
function openBudget(){
  expenseView=Date.now();kicker.textContent='SHARED EXPENSES · 共同記帳';expenseRows=[];drawExpenses();openPanel();refreshExpenses();
}
async function submitExpense(e){
  e.preventDefault();if(budgetBusy)return;
  if(!GAS_URL){drawExpenses('請先設定 GAS 網址（config.js），目前無法儲存');return;}
  const form=e.currentTarget;
  const payload=Object.fromEntries(new FormData(form).entries());
  if(!Number.isFinite(Number(payload.amount))||Number(payload.amount)<=0){drawExpenses('金額必須大於 0');return;}
  const recordId = 'trip-'+Date.now()+'-'+Math.random().toString(36).slice(2,10);
  payload.action='add';payload.id=recordId;
  budgetBusy=true;const submit=form.querySelector('[type=submit]');submit.disabled=true;submit.textContent='儲存中…';
  try {
    // GAS Web App 跨網域寫入使用 simple request；回應為 opaque，因此要再次讀取紀錄確認成功。
    await fetch(GAS_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},body:new URLSearchParams(payload)});
    let found=false;let last='';
    for(const wait of [700,1400,2200,3200]){
      await new Promise(r=>setTimeout(r,wait));
      const result=await new Promise(resolve=>getExpenses((err,res)=>resolve({err,res})));
      if(result.err||result.res?.ok!==true){last=result.err?.message||result.res?.error||'暫時無法確認';continue;}
      expenseRows=Array.isArray(result.res.rows)?result.res.rows:[];
      if(expenseRows.some(r=>r.id===recordId)){found=true;break;}
    }
    budgetBusy=false;
    if(found){drawExpenses('✓ 已儲存至 Google 試算表，其他旅伴重新整理即可看到');}
    else {drawExpenses('尚未確認是否寫入（'+(last||'可能為部署權限或記帳碼問題')+'）。請先按「重新整理」確認，避免重複新增。');}
  }catch(err){budgetBusy=false;drawExpenses('送出失敗：'+(err?.message||'網路錯誤'));}
}
function openAll(){expenseView=0;kicker.textContent='FULL ITINERARY · 全部行程';content.innerHTML=`<h2>2026 信州行</h2><p class="subtitle">11/25（三）－ 12/02（三） · 8 天行程筆記</p><nav class="date-nav" aria-label="快速跳到日期">${DAYS.map(d=>`<button type="button" class="date-chip" data-open-day="${d.id}">${esc(d.date.split('（')[0])}</button>`).join('')}</nav>${DAYS.map(dayMarkup).join('')}<div class="info-block"><strong>資料註記：</strong>12/02 尚未安排；未提供名稱的店家以原 Google Maps 連結呈現。地圖搜尋連結為輔助推薦，原筆記連結均原樣保留。</div>`;openPanel();}
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
