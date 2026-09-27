const params=new URLSearchParams(location.search);
let INDUSTRY=null,TEMPLATE=null,BLUEPRINT=null,VISUALS=[];
const industrySlug=params.get('industry')||'machinery';
const variant=Math.max(0,Math.min(5,Number(params.get('variant')||0)));
const page=params.get('page')||'home';
const item=Math.max(0,Number(params.get('item')||0));

function q(s){return document.querySelector(s)}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function templateUrl(next='home',i){return './industry-template.html?industry='+encodeURIComponent(INDUSTRY.slug)+'&variant='+variant+'&page='+encodeURIComponent(next)+(i!==undefined?'&item='+i:'')}
function moduleLabel(id){const hit=(BLUEPRINT.modules||[]).find(x=>x[0]===id);return hit?.[1]||({articles:'资讯内容',forms:'咨询联系',team:'团队',cases:'案例'}[id]||id)}
function img(url,alt,cls=''){
 const fb=generatedIndustryVisual(INDUSTRY.name,INDUSTRY.accent||'#2563eb',Math.abs(String(alt).length%12)).replace(/'/g,'%27');
 return '<img class="'+cls+'" src="'+url+'" alt="'+esc(alt)+'" loading="lazy" onerror="this.onerror=null;this.src=\''+fb+'\'">'
}
function itemTitle(moduleId,i){
 const n=String(i+1).padStart(2,'0'),name=INDUSTRY.name.replace(/行业|公司/g,'');
 const map={
  products:[name+'核心系列 '+n,name+'高性能方案 '+n],
  services:[name+'专业服务 '+n,name+'服务方案 '+n],
  solutions:[name+'行业解决方案 '+n,name+'场景方案 '+n],
  applications:[name+'应用场景 '+n,name+'行业应用 '+n],
  cases:[name+'代表案例 '+n,name+'标杆项目 '+n],
  downloads:['技术资料 '+n,'资料下载 '+n],
  certifications:['资质能力 '+n,'认证与实力 '+n],
  pricing:['服务套餐 '+n,'标准方案 '+n],
  process:['服务节点 '+n,'交付流程 '+n],
  routes:[name+'精选线路 '+n,name+'主题路线 '+n],
  destinations:['热门目的地 '+n,'精选目的地 '+n],
  programs:[name+'课程项目 '+n,'培养项目 '+n],
  teachers:['核心师资 '+n,'导师团队 '+n],
  outcomes:['学员成果 '+n,'成长案例 '+n],
  doctors:['专家团队 '+n,'医生介绍 '+n],
  facilities:['环境设备 '+n,'专业设施 '+n],
  stores:['门店/渠道 '+n,'服务网点 '+n],
  collections:['系列分类 '+n,'主题系列 '+n],
  projects:['工程项目 '+n,'标杆工程 '+n],
  network:['服务网络 '+n,'物流线路 '+n],
  vehicles:['精选车型 '+n,'车型方案 '+n],
  locations:['服务区域 '+n,'覆盖区域 '+n],
  reviews:['客户评价 '+n,'口碑见证 '+n],
  properties:['精选楼盘 '+n,'重点项目 '+n],
  articles:[name+'行业观察 '+n,name+'专业知识 '+n],
  team:['核心团队 '+n,'专业顾问 '+n],
  materials:['材料工艺 '+n,'工艺标准 '+n]
 };
 return (map[moduleId]||[moduleLabel(moduleId)+' '+n])[i%2];
}
function moduleIntro(id){
 const m=moduleLabel(id);
 const intros={
  products:'按系列、用途与关键参数组织，方便客户快速理解和选择。',
  services:'从客户真实需求出发拆分服务范围、流程、交付与适用场景。',
  cases:'用真实项目、结果和过程建立信任，而不是只有一张效果图。',
  articles:'持续发布行业知识、选型建议与专业观点，为搜索和客户决策提供内容。',
  routes:'清晰展示行程、天数、目的地、适合人群与咨询入口。',
  programs:'课程体系、适合对象、学习目标和成果路径一目了然。',
  doctors:'专家方向、资历、擅长项目与预约入口完整呈现。',
  properties:'项目位置、户型、核心卖点与预约看房入口完整呈现。'
 };
 return intros[id]||'围绕'+INDUSTRY.name+'真实业务建立完整的'+m+'内容结构和详情页。';
}
function renderShell(){
 document.documentElement.style.setProperty('--accent',TEMPLATE.accent||'#2563eb');
 document.body.dataset.variant=String(variant);document.body.dataset.layout=TEMPLATE.layout;document.body.dataset.family=INDUSTRY.family;
 document.title=(TEMPLATE.display_name||INDUSTRY.name)+'｜码科服行业模板';
 q('#siteLabel').textContent=TEMPLATE.display_name+' · '+BLUEPRINT.label;
 q('#brand').innerHTML=window.industryLogoMarkup?industryLogoMarkup(TEMPLATE.name,TEMPLATE.accent,INDUSTRY.family,'',TEMPLATE.tone==='dark'?'dark':'light'):esc(TEMPLATE.name);
 q('#brand').href=templateUrl('home');
 const nav=BLUEPRINT.nav||[];
 q('#navlinks').innerHTML=nav.map(x=>'<a class="'+((page===x[0]||page.startsWith(x[0]+'-'))?'on':'')+'" href="'+templateUrl(x[0])+'">'+x[1]+'</a>').join('');
 q('#navcta').href=templateUrl('contact');q('#navcta').textContent=(nav.find(x=>x[0]==='contact')?.[1]||'联系我们');
 q('#footerBrand').textContent=TEMPLATE.name;
 q('#footerDesc').textContent=TEMPLATE.headline;
 q('#footerCols').innerHTML='<div><b>核心业务</b><p>'+BLUEPRINT.modules.slice(0,4).map(x=>x[1]).join('<br>')+'</p></div><div><b>内容导航</b><p>'+BLUEPRINT.nav.slice(1,5).map(x=>x[1]).join('<br>')+'</p></div><div><b>联系我们</b><p>400-660-2026<br>hello@example.com<br>在线咨询 / 预约服务</p></div>';
 q('#copyright').innerHTML='© 2026 '+esc(TEMPLATE.name)+'演示站 · <a href="https://www.makefu.com/" target="_blank" rel="noopener">技术支持：码科服网站开发</a><br>浙ICP备2026XXXX号-1';
}
function hero(){
 return '<section class="hero">'+img(VISUALS[0],INDUSTRY.name+'主视觉','heroImg')+'<div class="wrap heroIn"><div class="heroCopy"><span class="eyebrow">'+esc(TEMPLATE.direction||TEMPLATE.display_name)+'</span><h1>'+esc(INDUSTRY.headline||TEMPLATE.headline)+'</h1><p>'+esc(TEMPLATE.headline)+'</p><div class="actions"><a class="btn" href="'+templateUrl(BLUEPRINT.nav[1]?.[0]||'contact')+'">查看核心内容</a><a class="btn ghost" href="'+templateUrl('contact')+'">获取方案 / 咨询</a></div></div></div></section>'
}
function stats(){
 const arr=[['10+','行业服务经验'],['500+','项目与客户'],['24h','咨询响应'],['98%','交付满意度']];
 return '<div class="wrap stats">'+arr.map(x=>'<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join('')+'</div>'
}
function renderModuleSection(id,index=0){
 const label=moduleLabel(id);
 const count=6;
 return '<section class="section '+(index%2?'alt':'')+'"><div class="wrap"><div class="head"><div><h2>'+esc(label)+'</h2><p>'+esc(moduleIntro(id))+'</p></div><a href="'+templateUrl(id)+'">查看全部 →</a></div><div class="grid3">'+Array.from({length:count},(_,i)=>'<a class="card" href="'+templateUrl(id+'-detail',i)+'"><div class="cardMedia">'+img(VISUALS[(index*3+i+1)%VISUALS.length],itemTitle(id,i))+'</div><div class="cardBody"><small>'+esc(INDUSTRY.name)+'</small><h3>'+esc(itemTitle(id,i))+'</h3><p>'+esc(moduleIntro(id))+'</p><span class="more">查看详情 →</span></div></a>').join('')+'</div></div></section>'
}
function renderFeatureBlock(kind,index=0){
 const titleMap={technology:'技术与能力',factory:'生产与交付实力',specs:'关键参数与标准',trust:'为什么值得信赖',story:'品牌与故事',reviews:'客户真实评价',capacity:'服务能力',features:'核心优势',location:'区位与价值',hero:'体验亮点'};
 const title=titleMap[kind]||'核心能力';
 return '<section class="section '+(index%2?'alt':'')+'"><div class="wrap featureSplit"><div class="featureImg">'+img(VISUALS[(12+index)%VISUALS.length],title)+'</div><div class="featureCopy"><small class="eyebrow" style="color:var(--accent);border-color:var(--accent)">'+esc(BLUEPRINT.label)+'</small><h2>'+esc(title)+'</h2><p style="color:var(--muted)">结合'+esc(INDUSTRY.name)+'真实业务决策逻辑组织信息，让客户在首页就能看懂企业优势、服务边界和下一步行动。</p><div class="featureList">'+['专业能力','真实案例','标准流程','持续服务'].map((x,i)=>'<div class="featureItem"><b>'+x+'</b><span>完整内容、详情页面与咨询入口全部可管理。</span></div>').join('')+'</div></div></div></section>'
}
function cta(){
 return '<section class="section"><div class="wrap"><div class="quote"><div><h2>让客户看到网站，就知道这正是他要找的'+esc(INDUSTRY.name)+'。</h2><p>业务结构、内容详情和咨询路径已经完整搭好，安装后直接替换真实企业内容。</p></div><a class="btn" style="background:#fff;color:#111827;border-color:#fff" href="'+templateUrl('contact')+'">立即咨询</a></div></div></section>'
}
function renderHome(){
 let html=hero()+stats();
 (BLUEPRINT.home||[]).forEach((block,i)=>{
  if(block==='cta'){html+=cta();return}
  const known=(BLUEPRINT.modules||[]).some(x=>x[0]===block)||['products','services','cases','articles','solutions','applications','routes','destinations','programs','teachers','doctors','facilities','stores','collections','projects','network','vehicles','locations','reviews','properties','team','materials','pricing','process','outcomes','certifications','downloads'].includes(block);
  html+=known?renderModuleSection(block,i):renderFeatureBlock(block,i);
 });
 return html;
}
function subHero(title,desc){
 return '<section class="subHero"><div class="wrap"><small style="color:var(--accent);font-weight:900">'+esc(TEMPLATE.direction||'行业模板')+' · '+esc(INDUSTRY.name)+'</small><h1>'+esc(title)+'</h1><p>'+esc(desc)+'</p></div></section>'
}
function renderList(id){
 return subHero(moduleLabel(id),moduleIntro(id))+renderModuleSection(id,0)+cta();
}
function renderDetail(id,i){
 const title=itemTitle(id,i),label=moduleLabel(id);
 return subHero(title,label+'详情 · '+INDUSTRY.name)+
 '<section class="section"><div class="wrap detail"><article class="detailMain">'+img(VISUALS[(i+3)%VISUALS.length],title)+
 '<h2>内容概述</h2><p>'+esc(moduleIntro(id))+' 该页面不是占位跳转，而是完整的独立详情结构，可在后台维护标题、图片、参数、正文、关联内容与咨询按钮。</p>'+
 '<h2>核心信息</h2><ul><li>针对'+esc(INDUSTRY.name)+'的真实业务字段组织内容</li><li>支持关联案例、团队、产品/服务与文章</li><li>支持 SEO 标题、描述、结构化内容与分享图</li><li>支持桌面、平板和手机响应式展示</li></ul>'+
 '<div class="gallery">'+[0,1,2].map(n=>img(VISUALS[(i+n+7)%VISUALS.length],title+' '+(n+1))).join('')+'</div></article>'+
 '<aside class="side"><h3>'+esc(label)+'信息</h3><div class="sideRow"><span>所属行业</span><b>'+esc(INDUSTRY.name)+'</b></div><div class="sideRow"><span>模板风格</span><b>'+esc(TEMPLATE.direction||'行业模板')+'</b></div><div class="sideRow"><span>内容编号</span><b>#'+String(i+1).padStart(2,'0')+'</b></div><div class="sideRow"><span>状态</span><b>已发布</b></div><a class="btn" style="width:100%;margin-top:18px" href="'+templateUrl('contact')+'">咨询这项业务</a></aside></div></section>'+renderModuleSection(id,1);
}
function renderAbout(){
 return subHero('关于我们','围绕'+INDUSTRY.name+'建立可信赖的企业介绍、资质、团队与发展内容。')+renderFeatureBlock('trust',0)+renderModuleSection('cases',1)+cta();
}
function renderContact(){
 return subHero('联系我们','告诉我们你的需求，获取对应的'+INDUSTRY.name+'方案与报价。')+
 '<section class="section"><div class="wrap detail"><div class="detailMain">'+img(VISUALS[10],'联系我们')+'<h2>联系信息</h2><p>工作日 09:00–18:00 · 400-660-2026 · hello@example.com</p><p>支持电话、在线表单、微信及邮件咨询。正式项目可根据行业结构增加预约、询价、试驾、试听、看房等专属表单。</p></div><form class="side" onsubmit="event.preventDefault();alert(\'演示环境：咨询已提交\')"><h3>提交需求</h3><label>姓名<input required style="width:100%;padding:10px;margin:6px 0 12px"></label><label>联系电话<input required style="width:100%;padding:10px;margin:6px 0 12px"></label><label>需求类型<select style="width:100%;padding:10px;margin:6px 0 12px"><option>产品/服务咨询</option><option>项目合作</option><option>获取报价</option></select></label><label>需求说明<textarea style="width:100%;min-height:120px;padding:10px;margin:6px 0 12px"></textarea></label><button class="btn" style="width:100%">提交咨询</button></form></div></section>';
}
async function boot(){
 const data=await fetch('./industries.json').then(r=>r.json());
 INDUSTRY=(data.industries||[]).find(x=>x.slug===industrySlug)||data.industries[0];
 const catalog=buildIndustryTemplates([INDUSTRY]);
 TEMPLATE=catalog.find(x=>x.variant_index===variant)||catalog[0];
 BLUEPRINT=getIndustryBlueprint(INDUSTRY);
 VISUALS=getIndustryVisuals({...INDUSTRY,accent:TEMPLATE.accent},20);
 renderShell();
 let html='';
 if(page==='home')html=renderHome();
 else if(page==='about')html=renderAbout();
 else if(page==='contact')html=renderContact();
 else if(page.endsWith('-detail'))html=renderDetail(page.replace(/-detail$/,''),item);
 else html=renderList(page);
 q('#app').innerHTML=html;
}
boot();
