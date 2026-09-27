const PHOTO_IDS=[
'1616486338812-3dadae4b4ace','1600607687920-4e2a09cf159d','1600210492486-724fe5c67fb0','1600566753086-00f18fb6b3ea',
'1600585154340-be6161a56a0c','1600585152915-d208bec867a1','1493663284031-b7e3aefcae8e','1494526585095-c41746248156',
'1484154218962-a197022b5858','1519710164239-da123dc03ef4','1505693416388-ac5ce068fe85','1513694203232-719a280e022f',
'1600607688969-a5bfcd646154','1600566753190-17f0baa2a6c3','1600566753051-f0b89df2dd90','1600573472550-8090b5e0745e',
'1600573472592-401b489a3cdc','1615874959474-d609969a20ed','1600607687644-aac4c3eac7f4','1600566752355-35792bedcfea',
'1618221195710-dd6b41faaea6','1618219740975-d40978bb7378','1618219908412-a29a1bb7b86e','1600607688960-e095ff83135c',
'1600566752229-250ed79470f8','1600566752547-33df8a7f5d38','1600566752734-2a0cd43c3d69','1600566753192-9d8b8f6f17d1',
'1600566752355-35792bedcfea','1600607688969-a5bfcd646154'
];
const photo=i=>'https://images.unsplash.com/photo-'+PHOTO_IDS[i%PHOTO_IDS.length]+'?auto=format&fit=crop&w=1800&q=86';

const THEMES={
modern:{
 name:'筑家 DESIGN',sub:'现代极简全案设计',accent:'#a16207',style:'现代极简',tag:'MODERN MINIMAL',hero:'把房子，变成真正适合生活的家。',desc:'从空间规划、预算控制到材料与施工管理，我们更在意住进去之后的每一天，而不只是交付那一刻的照片。',
 imageOffset:0,
 stats:[['12 年','本地设计与施工经验'],['580+','整屋落地项目'],['36 位','设计与项目管理团队'],['4.9/5','客户交付满意度']],
 services:['全案设计','整屋施工','旧房翻新','软装搭配'],
 caseTitles:['170㎡ 原木与留白','98㎡ 小户型收纳升级','240㎡ 现代东方住宅','江景大平层改造','三代同堂改善住宅','轻奢复式空间','135㎡ 无主灯改善宅','200㎡ 城市跃层'],
 styles:['现代简约','原木自然','意式极简','奶油风','现代东方'],
 materials:['环保基材','进口涂料','系统门窗','定制木作'],
 designers:['周屿｜首席设计师','林简｜空间设计师','沈墨｜软装设计师'],
 packages:[['基础设计','¥198/㎡'],['全案设计','¥398/㎡'],['全案托管','按项目报价']],
 order:['stats','cases','services','styles','materials','process','team','packages','reviews','journal','quote']
},
natural:{
 name:'木舍空间',sub:'自然生活设计',accent:'#73895c',style:'自然小清新',tag:'NATURAL LIVING',hero:'让阳光、木头和日常，成为家的主角。',desc:'以自然材质、柔和色彩和真实生活习惯为出发点，为年轻家庭打造轻松、耐住、不过度设计的居住空间。',
 imageOffset:5,
 stats:[['9 年','自然住宅设计'],['320+','家庭改造案例'],['86%','老客户转介绍'],['18 项','环保材料标准']],
 services:['自然系全案','儿童友好住宅','收纳优化','软装焕新'],
 caseTitles:['奶油木色亲子宅','绿意阳台两居室','阳光餐厨一体化','小户型自然收纳','宠物友好之家','低饱和度三居'],
 styles:['奶油自然','日式原木','中古混搭','北欧清新','无主灯'],
 materials:['F4 星板材','植物木蜡油','天然石材','环保织物'],
 designers:['木禾｜主理人','安然｜住宅设计师','程雨｜软装设计师'],
 packages:[['局部焕新','¥29,800 起'],['整屋设计','¥168/㎡'],['全案落地','¥168,000 起']],
 order:['cases','services','materials','styles','process','team','reviews','packages','journal','quote']
},
luxury:{
 name:'MAISON AUREA',sub:'高端住宅与别墅设计',accent:'#c39a5b',style:'欧式轻奢',tag:'LUXURY RESIDENCE',hero:'经典比例，克制奢华。',desc:'为大平层、别墅与改善型住宅提供从建筑空间、硬装、软装到艺术陈设的一体化高端设计服务。',
 imageOffset:10,
 stats:[['15 年','高端私宅经验'],['260+','别墅与大平层'],['32 位','设计与工程团队'],['18 城','项目落地城市']],
 services:['私宅定制','别墅设计','软装陈设','工程托管'],
 caseTitles:['滨江 320㎡ 江景私宅','法式轻奢别墅','意式大平层','城市顶层复式','收藏家住宅','黑金现代宅','湖景叠墅','私宴会客厅'],
 styles:['法式轻奢','意式现代','现代古典','Art Deco','极致黑金'],
 materials:['天然大理石','定制木饰面','进口壁布','艺术灯具'],
 designers:['ALEX｜Design Director','SOPHIA｜Interior Architect','EVA｜Art Curator'],
 packages:[['Design Only','¥680/㎡'],['Turnkey','¥1,280/㎡'],['Private Residence','预约面谈']],
 order:['cases','services','team','materials','process','styles','reviews','packages','journal','quote']
},
retro:{
 name:'拾光设计事务所',sub:'复古住宅与生活方式设计',accent:'#9b3f2f',style:'复古事务所',tag:'RETRO EDITORIAL',hero:'旧物有时间感，新家也该有自己的故事。',desc:'我们偏爱木色、旧铜、手工砖和有岁月感的家具，把复古语言重新翻译成适合当代生活的空间。',
 imageOffset:15,
 stats:[['2017','工作室成立'],['210+','复古住宅案例'],['47 家','长期材料合作'],['12 次','设计媒体刊登']],
 services:['复古全案','中古软装','老房更新','商业空间'],
 caseTitles:['红棕色复古公寓','中古家具收藏宅','老洋房焕新','复古咖啡住宅','墨绿与黄铜之家','90㎡ 旧房重生'],
 styles:['中古现代','法式复古','工业复古','美式中古','老上海'],
 materials:['手工砖','复古木地板','黄铜五金','艺术涂料'],
 designers:['阿拾｜Founder','陈眠｜Interior Designer','苏禾｜Stylist'],
 packages:[['Concept','¥260/㎡'],['Full Design','¥460/㎡'],['Renovation','按项目报价']],
 order:['styles','cases','services','materials','team','process','journal','reviews','packages','quote']
},
oriental:{
 name:'观堂空间',sub:'现代东方住宅设计',accent:'#8b6b4c',style:'东方现代',tag:'ORIENTAL MODERN',hero:'留白有度，器物有序，日常自成风景。',desc:'从东方空间秩序与当代生活方式出发，以木、石、布、光构建克制、安静、耐看的居所。',
 imageOffset:20,
 stats:[['11 年','东方住宅研究'],['180+','私宅设计'],['28 项','木作工艺节点'],['96%','项目如期交付']],
 services:['现代东方全案','新中式住宅','庭院与茶空间','木作定制'],
 caseTitles:['西湖边的静谧之家','茶室与客厅共生','木石之间的大平层','四合院现代更新','雅灰与胡桃木之家','山景别墅','书房与庭院之家'],
 styles:['现代东方','侘寂东方','新中式','宋式雅居','东方极简'],
 materials:['胡桃木','洞石','亚麻织物','手工灰泥'],
 designers:['顾言｜主持设计师','许砚｜室内建筑师','叶青｜陈设设计师'],
 packages:[['空间设计','¥360/㎡'],['全案设计','¥560/㎡'],['私宅定制','预约评估']],
 order:['cases','styles','services','materials','process','team','reviews','journal','packages','quote']
},
urban:{
 name:'构域空间',sub:'都市先锋与工业风住宅设计',accent:'#2563eb',style:'都市工业',tag:'URBAN LOFT',hero:'把结构、材质与科技感，变成城市生活的个性。',desc:'面向城市公寓、复式与年轻改善家庭，以黑白灰、金属、微水泥和智能系统构建更利落、更有秩序的当代住宅。',
 imageOffset:24,
 stats:[['8 年','都市住宅设计'],['190+','公寓与复式项目'],['42 项','智能家居联动节点'],['95%','预算控制达成率']],
 services:['都市全案设计','LOFT 改造','智能家居整合','灯光与软装'],
 caseTitles:['140㎡ 黑白城市宅','88㎡ 工业风公寓','210㎡ 智能复式','120㎡ 微水泥住宅','160㎡ 城市景观宅','100㎡ 年轻夫妻之家','185㎡ 黑钢与木作','230㎡ 都市顶层'],
 styles:['工业 LOFT','黑白现代','微水泥极简','智能住宅','城市精品公寓'],
 materials:['微水泥','黑钢系统','超白玻璃','智能照明'],
 designers:['陆川｜空间主理人','纪元｜智能住宅设计师','韩野｜灯光与软装设计师'],
 packages:[['空间规划','¥238/㎡'],['都市全案','¥468/㎡'],['智能整屋','按项目报价']],
 order:['stats','services','cases','styles','materials','process','team','packages','journal','reviews','quote']
}
};

function esc(s){return String(s||'').replace(/[&<>"']/g,'')}
function fallback(label,accent){
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g"><stop stop-color="'+accent+'"/><stop offset="1" stop-color="#222"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="60" y="700" font-family="Arial" font-size="54" font-weight="800" fill="white">'+esc(label)+'</text></svg>';
 return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg)
}
function img(url,alt,cls=''){
 const fb=fallback(alt,theme.accent).replace(/'/g,'%27');
 return '<img class="'+cls+'" src="'+url+'" alt="'+esc(alt)+'" loading="lazy" onerror="this.onerror=null;this.src=\''+fb+'\'">'
}
function uniqueImage(n){return photo(theme.imageOffset+n)}
function q(name){return document.querySelector(name)}
const params=new URLSearchParams(location.search);
let key=document.body.dataset.theme||params.get('theme')||'modern';
let theme=THEMES[key]||THEMES.modern;
let subPage=document.body.dataset.page||params.get('page')||'home';

function pageUrl(page,item){return './renovation-page.html?theme='+encodeURIComponent(key)+'&page='+encodeURIComponent(page)+(item!==undefined?'&item='+encodeURIComponent(item):'')}
function homeUrl(){return './renovation-'+key+'.html'}

function renderShell(){
 document.documentElement.style.setProperty('--accent',theme.accent);
 document.title=theme.name+'｜装修行业模板';
 q('#brand').innerHTML=window.industryLogoMarkup?industryLogoMarkup(theme.name,theme.accent,'home-living','',key==='luxury'?'dark':'light'):theme.name;
 q('#brand').href=homeUrl();
 q('#siteLabel').textContent=theme.style+' · 装修行业成品模板';
 const activeMap={'case-detail':'cases','service-detail':'services','style-detail':'styles','designer-detail':'designers','article-detail':'journal'};
 const active=activeMap[subPage]||subPage;
 q('#navlinks').innerHTML=[
  ['home','首页',homeUrl()],
  ['cases','装修案例',pageUrl('cases')],
  ['services','装修服务',pageUrl('services')],
  ['styles','设计风格',pageUrl('styles')],
  ['materials','材料工艺',pageUrl('materials')],
  ['designers','设计团队',pageUrl('designers')],
  ['journal','装修知识',pageUrl('journal')]
 ].map(x=>'<a class="'+(active===x[0]?'on':'')+'" href="'+x[2]+'">'+x[1]+'</a>').join('');
 q('#navcta').href=pageUrl('contact');
 q('#footerBrand').textContent=theme.name;
 q('#footerDesc').textContent=theme.sub+'。'+theme.desc;
 q('#copyright').innerHTML='<div>© 2026 '+esc(theme.name)+'演示站 · <a href="https://www.makefu.com/" target="_blank" rel="noopener">技术支持：码科服网站开发</a></div><div class="icp">浙ICP备2026XXXX号-1</div>';
}

function hero(){
 return '<section class="hero">'+img(uniqueImage(0),theme.name+'主视觉','heroImg')+'<div class="wrap"><div class="heroContent"><span class="eyebrow">'+theme.tag+'</span><h1>'+theme.hero+'</h1><p>'+theme.desc+'</p><div class="actions"><a class="btn" href="'+pageUrl('contact')+'">预约量房 / 获取方案</a><a class="btn ghost" href="'+pageUrl('cases')+'">查看真实案例</a></div></div></div></section>'
}
function stats(){
 return '<div class="stats wrap">'+theme.stats.map(x=>'<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join('')+'</div>'
}
function cases(){
 return '<section class="section" id="cases"><div class="wrap"><div class="head reveal"><div><h2>真实落地案例</h2><p>不是概念效果图，而是围绕户型、家庭结构、预算和生活习惯完成的真实空间方案。</p></div><a href="'+pageUrl('cases')+'">查看全部案例 →</a></div><div class="cases">'+theme.caseTitles.map((t,i)=>'<a class="case reveal" href="'+pageUrl('cases')+'">'+img(uniqueImage(1+i),t)+'<div class="caseCopy"><small>'+[118,98,170,220,135,260][i]+'㎡ · '+theme.style+'</small><h3>'+t+'</h3></div></a>').join('')+'</div></div></section>'
}
function services(){
 const desc=['从平面规划、动线、收纳到完整视觉系统。','施工节点、预算、进度和现场质量统一管理。','改善采光、收纳、功能和老房结构问题。','家具、灯具、窗帘、艺术品与生活方式搭配。'];
 return '<section class="section alt"><div class="wrap"><div class="head reveal"><div><h2>装修服务</h2><p>从设计到落地，把装修过程中最难协调的事情放在一套服务流程里完成。</p></div></div><div class="services">'+theme.services.map((x,i)=>'<article class="service reveal"><span class="num">0'+(i+1)+'</span><h3>'+x+'</h3><p>'+desc[i]+'</p><a href="'+pageUrl('services')+'">了解服务 →</a></article>').join('')+'</div></div></section>'
}
function styles(){
 return '<section class="section"><div class="wrap"><div class="head reveal"><div><h2>设计风格不是套模板</h2><p>同一种审美，也要根据家庭结构、房屋条件和日常习惯重新设计。</p></div></div><div class="styleGrid">'+theme.styles.map((x,i)=>'<figure class="reveal">'+img(uniqueImage(7+i),x)+'<figcaption>'+x+'</figcaption></figure>').join('')+'</div></div></section>'
}
function process(){
 const arr=['需求与量房','平面方案','效果深化','预算与选材','施工落地','软装交付'];
 return '<section class="section alt"><div class="wrap"><div class="head reveal"><div><h2>从量房到入住</h2><p>重要节点可追踪，不把装修变成一场信息不透明的赌博。</p></div></div><div class="process">'+arr.map((x,i)=>'<div class="step reveal"><b>0'+(i+1)+' · '+x+'</b><span>'+['了解家庭成员、预算与真实需求','解决动线、功能、采光和收纳','材质、色彩、灯光与细节落图','主材、辅材、设备和费用确认','巡检节点、隐蔽工程和工期管理','家具软装进场、验收和售后'][i]+'</span></div>').join('')+'</div></div></section>'
}
function materials(){
 return '<section class="section"><div class="wrap materials"><div class="materialImage reveal">'+img(uniqueImage(12),'材料与工艺')+'</div><div class="reveal"><span class="eyebrow" style="color:var(--accent);border-color:var(--accent)">MATERIAL & CRAFT</span><h2 style="font-size:42px;line-height:1.18">材料不是参数表，<br>而是未来很多年的触感。</h2><p style="color:var(--muted)">我们把环保、耐用、维修成本和最终质感一起考虑，不单纯追求样板间效果。</p><div class="materialList">'+theme.materials.map(x=>'<div class="materialCard"><b>'+x+'</b><span>来源、规格、环保等级与施工节点可追溯。</span></div>').join('')+'</div></div></div></section>'
}
function team(){
 return '<section class="section alt"><div class="wrap"><div class="head reveal"><div><h2>设计团队</h2><p>主案、深化、软装和工程管理各自负责专业部分。</p></div><a href="'+pageUrl('designers')+'">认识团队 →</a></div><div class="team">'+theme.designers.map((x,i)=>'<article class="person reveal">'+img(uniqueImage(13+i),'设计团队')+'<div class="copy"><h3>'+x+'</h3><p>'+['住宅空间 / 改善型户型 / 全案统筹','平面优化 / 材料细节 / 现场深化','软装陈设 / 色彩 / 艺术品搭配'][i]+'</p></div></article>').join('')+'</div></div></section>'
}
function packages(){
 return '<section class="section"><div class="wrap"><div class="head reveal"><div><h2>价格参考</h2><p>先把费用结构讲清楚，再根据房屋和需求给出正式报价。</p></div></div><div class="packages">'+theme.packages.map((x,i)=>'<article class="package '+(i===1?'hot':'')+' reveal"><small>'+['适合局部/基础需求','多数家庭选择','改善型/高要求项目'][i]+'</small><h3>'+x[0]+'</h3><div class="price">'+x[1]+'</div><ul><li>前期需求梳理</li><li>空间方案设计</li><li>材料与预算建议</li><li>节点交付与复盘</li></ul><a class="btn" href="'+pageUrl('contact')+'">获取详细报价</a></article>').join('')+'</div></div></section>'
}
function reviews(){
 const arr=['我们最满意的是收纳和动线，不是单纯把家做得好看。','预算变化都提前说清楚，施工现场也有人真正负责。','住进去半年以后，才发现很多细节是设计阶段提前考虑过的。'];
 return '<section class="section alt"><div class="wrap"><div class="head reveal"><div><h2>客户入住后的评价</h2><p>设计的好坏，最后还是要回到真实生活里验证。</p></div></div><div class="reviews">'+arr.map((x,i)=>'<article class="review reveal"><q>'+x+'</q><p>'+['滨江 · 三口之家','拱墅 · 旧房改善','西湖 · 四口之家'][i]+'</p></article>').join('')+'</div></div></section>'
}
function journal(){
 const arr=['旧房翻新最容易漏掉的 6 项预算','全屋定制什么时候进场最合适？','小户型怎么做收纳，才不会越做越挤？'];
 return '<section class="section"><div class="wrap"><div class="head reveal"><div><h2>装修知识</h2><p>从真实项目里整理预算、工艺和空间规划经验。</p></div><a href="'+pageUrl('journal')+'">全部文章 →</a></div><div class="journal">'+arr.map((x,i)=>'<a class="article reveal" href="'+pageUrl('journal')+'">'+img(uniqueImage(16+i),x)+'<div class="copy"><time>2026.09.'+(18-i*4)+'</time><h3>'+x+'</h3><p style="color:var(--muted)">装修不是信息越多越好，而是关键节点要知道自己应该看什么。</p></div></a>').join('')+'</div></div></section>'
}
function quote(){
 return '<section class="section"><div class="wrap"><div class="quote reveal"><div><h2>先聊户型、预算和你真正想解决的问题。</h2><p>提交基础信息后，设计顾问会给你一个初步空间建议和预算范围。</p></div><a class="btn" href="'+pageUrl('contact')+'" style="background:#fff;color:#222;border-color:#fff">预约量房</a></div></div></section>'
}

const blocks={stats,cases,services,styles,process,materials,team,packages,reviews,journal,quote};

function renderHome(){
 q('#app').innerHTML=hero()+theme.order.map(k=>blocks[k]()).join('');
 initReveal();
}
function subHero(title,desc){
 return '<section class="subHero"><div class="wrap"><small style="color:var(--accent);font-weight:900">'+theme.style+' · '+theme.name+'</small><h1>'+title+'</h1><p>'+desc+'</p></div></section>'
}
function renderSub(){
 let html='';
 if(subPage==='cases') html=subHero('装修案例','完整展示不同户型、面积、预算和生活方式的落地案例。')+cases();
 else if(subPage==='services') html=subHero('装修服务','从单项设计到完整全案，不同阶段选择不同服务。')+services()+process()+materials()+packages();
 else if(subPage==='designers') html=subHero('设计团队','找到真正理解你生活方式、并能负责落地的人。')+team()+cases();
 else if(subPage==='journal') html=subHero('装修知识','预算、工艺、收纳、材料与真实项目经验。')+journal()+process();
 else if(subPage==='contact') html=subHero('预约量房','填写房屋和需求信息，获取初步方案与预算范围。')+'<section class="section"><div class="wrap detailGrid"><div class="mainPhoto reveal">'+img(uniqueImage(19),'预约量房')+'</div><form class="sideBox reveal" onsubmit="event.preventDefault();alert(\'演示环境：预约已提交\')"><h3>预约量房</h3><label>姓名<input required style="width:100%;padding:10px;margin:6px 0 12px"></label><label>联系电话<input required style="width:100%;padding:10px;margin:6px 0 12px"></label><label>房屋面积<input placeholder="例如 120㎡" style="width:100%;padding:10px;margin:6px 0 12px"></label><label>装修预算<select style="width:100%;padding:10px;margin:6px 0 12px"><option>10-20 万</option><option>20-40 万</option><option>40-80 万</option><option>80 万以上</option></select></label><label>需求说明<textarea style="width:100%;min-height:110px;padding:10px;margin:6px 0 12px"></textarea></label><button class="btn" style="width:100%">提交预约</button></form></div></section>';
 else html=subHero('关于我们',theme.desc)+materials()+team()+reviews();
 q('#app').innerHTML=html;initReveal();
}
function initReveal(){
 const els=[...document.querySelectorAll('.reveal')];if(!('IntersectionObserver'in window)){els.forEach(x=>x.classList.add('on'));return}
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.05,rootMargin:'100px 0px'});
 els.forEach(x=>io.observe(x));setTimeout(()=>els.forEach(x=>x.classList.add('on')),1600)
}
document.addEventListener('DOMContentLoaded',()=>{renderShell();subPage==='home'?renderHome():renderSub()});
