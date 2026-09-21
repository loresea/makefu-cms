const qs=new URLSearchParams(location.search);
const slug=qs.get('industry')||'machinery';
const page=document.body.dataset.page||'home';
let industry,pack,preset,images,industryIndex=0;

const familyLabels={
  'industrial-catalog':{nav2:'产品中心',nav3:'应用案例',service:'产品与能力',case:'项目案例'},
  'technical-spec':{nav2:'技术产品',nav3:'技术案例',service:'技术产品与方案',case:'应用案例'},
  'portfolio-editorial':{nav2:'服务与作品',nav3:'项目案例',service:'服务与作品',case:'精选案例'},
  'professional-trust':{nav2:'专业领域',nav3:'典型事项',service:'专业领域',case:'典型事项'},
  'service-conversion':{nav2:'服务项目',nav3:'客户案例',service:'核心服务',case:'服务案例'},
  'healthcare-trust':{nav2:'服务项目',nav3:'服务案例',service:'专业服务',case:'服务案例'},
  'education-programs':{nav2:'课程中心',nav3:'学习成果',service:'课程项目',case:'学员成果'},
  'creative-agency':{nav2:'服务与作品',nav3:'精选案例',service:'创意服务',case:'代表作品'},
  'ecommerce-showcase':{nav2:'产品中心',nav3:'应用场景',service:'产品系列',case:'应用场景'},
  'environment-energy':{nav2:'解决方案',nav3:'工程案例',service:'解决方案',case:'工程案例'},
  'home-living':{nav2:'产品系列',nav3:'空间案例',service:'产品与空间',case:'空间案例'},
  'corporate-tech':{nav2:'产品能力',nav3:'客户案例',service:'产品与方案',case:'客户案例'},
  'hospitality-experience':{nav2:'服务体验',nav3:'客户体验',service:'体验与服务',case:'体验案例'},
  'food-brand':{nav2:'产品中心',nav3:'品牌故事',service:'产品系列',case:'品牌故事'},
  'logistics-map':{nav2:'物流服务',nav3:'项目案例',service:'物流服务',case:'项目案例'},
  'automotive-showroom':{nav2:'车型中心',nav3:'车主案例',service:'车型与服务',case:'车主案例'},
  'local-services':{nav2:'服务项目',nav3:'服务案例',service:'本地服务',case:'服务案例'},
  'real-estate-listings':{nav2:'项目中心',nav3:'项目案例',service:'项目与房源',case:'项目案例'},
  'destination-explorer':{nav2:'精选路线',nav3:'旅行故事',service:'路线与服务',case:'旅行故事'}
};

async function boot(){
  const data=await Promise.all([
    fetch('./industries.json').then(r=>r.json()),
    fetch('./industry-packs.json').then(r=>r.json())
  ]);
  const reg=data[0],packs=data[1];
  industryIndex=Math.max(0,reg.industries.findIndex(x=>x.slug===slug));
  industry=reg.industries[industryIndex]||reg.industries[0];
  pack=packs.packs.find(x=>x.slug===industry.slug)||packs.packs[0];
  preset=window.getTemplatePreset?getTemplatePreset(industry,industryIndex):{style:'tech-minimal',layout:'split',motion:'fade-up',cardVariant:'soft',navVariant:'light',density:'balanced',imageShape:'landscape',radius:14,hueShift:0,heroVariant:'photo'};
  industry.accent=shiftHue(industry.accent||'#f97316',(preset.hueShift||0)*4);
  images=window.getIndustryImages?getIndustryImages(industry):{hero:'',products:[],cases:[],news:[],about:'',contact:''};
  applyDesign();
  renderShell();
  renderPage();
  requestAnimationFrame(()=>window.initMotion&&initMotion());
}

function applyDesign(){
  const root=document.documentElement,body=document.body;
  root.style.setProperty('--accent',industry.accent||'#f97316');
  root.style.setProperty('--soft',colorMix(industry.accent||'#f97316',88));
  root.style.setProperty('--radius',preset.radius+'px');
  body.dataset.style=preset.style;
  body.dataset.layout=preset.layout;
  body.dataset.motionPreset=preset.motion;
  body.dataset.card=preset.cardVariant;
  body.dataset.nav=preset.navVariant;
  body.dataset.density=preset.density;
  body.dataset.imageShape=preset.imageShape;
  body.dataset.heroVariant=preset.heroVariant||'photo';
  body.dataset.templateFingerprint=preset.fingerprint||'';
  document.title=(document.title||'行业官网')+' · '+industry.name;
}

function shiftHue(hex,degrees){
  let h=String(hex||'#f97316').replace('#','');if(h.length===3)h=h.split('').map(x=>x+x).join('');
  let r=parseInt(h.slice(0,2),16)/255,g=parseInt(h.slice(2,4),16)/255,b=parseInt(h.slice(4,6),16)/255;
  const max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min,l=(max+min)/2;let hh=0,s=0;
  if(d){s=d/(1-Math.abs(2*l-1));if(max===r)hh=60*(((g-b)/d)%6);else if(max===g)hh=60*((b-r)/d+2);else hh=60*((r-g)/d+4)}
  hh=(hh+degrees+360)%360;const c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((hh/60)%2-1)),m=l-c/2;let rr=0,gg=0,bb=0;
  if(hh<60){rr=c;gg=x}else if(hh<120){rr=x;gg=c}else if(hh<180){gg=c;bb=x}else if(hh<240){gg=x;bb=c}else if(hh<300){rr=x;bb=c}else{rr=c;bb=x}
  return '#'+[rr+m,gg+m,bb+m].map(v=>Math.round(v*255).toString(16).padStart(2,'0')).join('');
}
function colorMix(hex,percent){
  const n=parseInt(String(hex).replace('#',''),16),r=n>>16,g=n>>8&255,b=n&255;
  const mix=v=>Math.round(v+(255-v)*percent/100).toString(16).padStart(2,'0');
  return '#'+mix(r)+mix(g)+mix(b);
}
function route(file,extra=''){return './'+file+'?industry='+encodeURIComponent(industry.slug)+(extra?'&'+extra:'')}
function label(){return familyLabels[industry.family]||familyLabels['service-conversion']}
function safe(s){return String(s||'').replace(/[<>&"]/g,'')}

function renderShell(){
  const l=label(),brand=document.querySelector('#brand');
  brand.innerHTML=window.industryLogoMarkup?industryLogoMarkup(industry.name,industry.accent,industry.family,'headerLogo'):industry.name;
  brand.href=route('site-home.html');
  document.querySelector('#topText').textContent=industry.category+' · '+styleLabel(preset.style)+' · '+layoutLabel(preset.layout);
  document.querySelector('#navLinks').innerHTML=[
    ['site-home.html','首页','home'],
    ['site-products.html',l.nav2,'products'],
    ['site-cases.html',l.nav3,'cases'],
    ['site-news.html','新闻资讯','news'],
    ['site-about.html','关于我们','about']
  ].map(x=>'<a class="'+(page===x[2]?'on':'')+'" href="'+route(x[0])+'">'+x[1]+'</a>').join('');
  document.querySelector('#navCta').href=route('site-contact.html');
  document.querySelector('#footerBrand').textContent=industry.name+'示例企业';
  document.querySelector('#footerDesc').textContent=industry.headline;
  document.querySelector('#footerServices').innerHTML=(pack.menus||[]).slice(1,5).join('<br>');
  const cp=document.querySelector('.copyright');
  if(cp)cp.innerHTML='<div>© 2026 '+safe(industry.name)+'示例站 · <a href="https://www.makefu.com/" target="_blank" rel="noopener">技术支持：码科服网站开发</a></div><div class="icp">浙ICP备2026XXXX号-1</div>';
}
function styleLabel(v){return ({'tech-minimal':'科技极简','industrial-pro':'工业专业','legal-luxury':'专业高端','travel-immersive':'沉浸旅行','home-editorial':'家居杂志','medical-clean':'医疗清洁','education-friendly':'教育成长','food-brand':'餐饮品牌','ecommerce-modern':'现代电商','local-conversion':'本地转化','realestate-premium':'地产高端','creative-studio':'创意工作室'})[v]||v}
function layoutLabel(v){return ({split:'左右分栏',fullscreen:'沉浸全屏',centered:'居中展示',editorial:'杂志排版',catalog:'产品目录',conversion:'获客转化',authority:'专业权威',portfolio:'作品集',commerce:'商城陈列',property:'项目地产'})[v]||v}

function renderPage(){
  if(page==='home')return renderHome();
  if(page==='products')return renderProducts();
  if(page==='product')return renderProduct();
  if(page==='cases')return renderCases();
  if(page==='case')return renderCase();
  if(page==='news')return renderNews();
  if(page==='article')return renderArticle();
  if(page==='about')return renderAbout();
  if(page==='contact')return renderContact();
}

function motionAttr(i=0){return ' data-motion="'+preset.motion+'" style="--delay:'+i*80+'ms"'}
function heroVisual(){
  return '<div class="visual"'+motionAttr(1)+'>'+imageTag(images.hero,industry.name+'主视觉','heroPhoto',industry.accent)+'</div>';
}
function homeHero(){
  const l=label();
  return '<section class="homeHero"><div class="wrap heroGrid"><div'+motionAttr(0)+'><span class="eyebrow">'+industry.category+' · '+styleLabel(preset.style)+'</span><h1>'+safe(industry.headline)+'</h1><p>面向'+safe(industry.name)+'企业的多页面行业官网。当前模板采用“'+styleLabel(preset.style)+' + '+layoutLabel(preset.layout)+' + '+motionLabel(preset.motion)+'”组合，内容、布局、配色与交互均按行业重新组织。</p><div class="actions"><a class="btn" href="'+route('site-contact.html')+'">获取方案</a><a class="btn ghost" href="'+route('site-products.html')+'">'+l.nav2+'</a></div></div>'+heroVisual()+'</div></section>';
}
function motionLabel(v){return ({'fade-up':'柔和上浮','fade-left':'侧向进入','zoom-reveal':'缩放揭示','mask-reveal':'遮罩揭示','hover-lift':'悬浮卡片','image-zoom':'图片微缩放','arrow-shift':'箭头反馈','counter-up':'数字增长','stagger':'错峰进入','parallax-light':'轻视差'})[v]||v}

function statsSection(){
  return '<div class="wrap"><div class="stats reveal"><div><b data-counter="10" data-suffix="+">10+</b><span>行业经验</span></div><div><b data-counter="100" data-suffix="+">100+</b><span>客户项目</span></div><div><b>24h</b><span>快速响应</span></div><div><b>4.9/5</b><span>客户评价</span></div></div></div>';
}
function productNames(){
  const m={travel:['京都慢旅 6 日','云南秋色 8 日','欧洲私家团'],renovation:['全案设计','旧房翻新','软装搭配'],accounting:['小规模代理记账','一般纳税人服务','财税顾问'],lawyer:['公司商事','劳动用工','婚姻家事']};
  return m[industry.slug]||[industry.name+'核心产品 A',industry.name+'解决方案 B',industry.name+'定制服务 C'];
}
function caseNames(){
  const m={travel:['日本关西亲子私家团','川西摄影小团','欧洲蜜月定制'],renovation:['170㎡改善型住宅','98㎡旧房翻新','商业空间改造'],accounting:['科技企业财税规范项目','电商公司历史账务梳理','外贸企业税务顾问'],lawyer:['股权回购争议专项','高级管理人员竞业限制争议','复杂家事财产梳理']};
  return m[industry.slug]||[industry.name+'代表项目一',industry.name+'客户案例二',industry.name+'交付案例三'];
}
function newsTitles(){return [industry.name+'客户最常关心的 6 个问题','选择'+industry.name+'服务商时要看什么？',industry.name+'网站内容应该怎样持续更新？','2026 年'+industry.name+'行业趋势与注意事项','一个真实'+industry.name+'项目是怎么落地的？']}

function card(name,type,i){
  const urls=type==='product'?images.products:images.cases,img=(urls&&urls.length?urls[i%urls.length]:images.hero);
  const href=type==='product'?route('site-product.html','item='+i):route('site-case.html','item='+i);
  return '<a class="card hover-lift"'+motionAttr(i)+' href="'+href+'"><div class="media">'+imageTag(img,name,'',industry.accent)+'</div><div class="body"><small>'+industry.category+'</small><h3>'+safe(name)+'</h3><p>'+['清晰展示核心信息、适用场景和服务边界。','通过真实内容帮助客户理解差异与价值。','支持后台独立维护、SEO 与前台 API 调用。'][i%3]+'</p><div class="tags"><span class="tag">'+styleLabel(preset.style)+'</span><span class="tag">'+layoutLabel(preset.layout)+'</span></div></div></a>';
}
function productsSection(){
  const names=productNames(),l=label();
  return '<section class="section"><div class="wrap"><div class="head reveal"><div><h2>'+l.service+'</h2><p>首页只展示重点内容，完整内容进入独立列表和详情页。</p></div><a href="'+route('site-products.html')+'">查看全部 →</a></div><div class="grid3 stagger">'+names.map((n,i)=>card(n,'product',i)).join('')+'</div></div></section>';
}
function casesSection(){
  const names=caseNames(),l=label();
  return '<section class="section alt"><div class="wrap"><div class="head reveal"><div><h2>'+l.case+'</h2><p>通过真实项目、过程和结果建立行业信任。</p></div><a href="'+route('site-cases.html')+'">全部案例 →</a></div><div class="grid3 stagger">'+names.map((n,i)=>card(n,'case',i)).join('')+'</div></div></section>';
}
function newsSection(){
  const nn=newsTitles();
  return '<section class="section"><div class="wrap"><div class="head reveal"><div><h2>新闻与行业知识</h2><p>新闻列表和文章详情保持独立页面结构，为 SEO 与客户教育服务。</p></div><a href="'+route('site-news.html')+'">新闻中心 →</a></div><div class="grid3 stagger">'+nn.slice(0,3).map((n,i)=>'<a class="card"'+motionAttr(i)+' href="'+route('site-news-detail.html','article='+i)+'"><div class="media">'+imageTag(images.news[i%images.news.length],n,'',industry.accent)+'</div><div class="body"><small>2026.09.'+(21-i*3)+'</small><h3>'+safe(n)+'</h3><p>持续更新专业内容，让官网承担长期的品牌与搜索价值。</p></div></a>').join('')+'</div></div></section>';
}
function storySection(){
  return '<section class="section alt"><div class="wrap"><div class="aboutGrid"><div class="aboutVisual reveal">'+imageTag(images.about,industry.name+'企业场景','',industry.accent)+'</div><div class="reveal"><span class="eyebrow">WHY '+safe(industry.name).toUpperCase()+'</span><h2 style="font-size:40px;line-height:1.16">网站不是模板堆砌，<br>而是行业表达方式。</h2><p style="color:var(--muted);font-size:17px">本模板会根据行业改变页面节奏、图片比例、内容顺序、卡片形态和动效方式，而不仅仅是替换颜色与文案。</p><div class="featureList"><div class="feature"><b>行业信息架构</b><span>菜单与字段跟行业走。</span></div><div class="feature"><b>差异化视觉</b><span>12 套风格系统组合。</span></div><div class="feature"><b>多页面内容</b><span>列表与详情独立维护。</span></div><div class="feature"><b>动效预设</b><span>'+motionLabel(preset.motion)+'。</span></div></div></div></div></div></section>';
}
function proofSection(){
  const fields=(pack.custom_fields||[]).slice(0,4);
  return '<section class="section"><div class="wrap"><div class="head reveal"><div><h2>这个行业真正需要展示什么？</h2><p>模板字段和前台模块都围绕真实业务内容设计。</p></div></div><div class="grid4 stagger">'+fields.map((v,i)=>'<div class="feature"'+motionAttr(i)+'><b>'+String(i+1).padStart(2,'0')+' · '+safe(v)+'</b><p>后台独立维护“'+safe(v)+'”，前台可按当前模板风格展示。</p></div>').join('')+'</div></div></section>';
}
function ctaSection(){
  return '<section class="section"><div class="wrap"><div class="quote reveal"><div><h2>准备进一步了解'+safe(industry.name)+'方案？</h2><p>进入独立联系页面提交需求，首页只保留必要的转化入口。</p></div><a class="btn" style="background:#fff;color:#111827" href="'+route('site-contact.html')+'">联系我们</a></div></div></section>';
}
function renderHome(){
  const pieces={
    hero:homeHero(),stats:statsSection(),products:productsSection(),cases:casesSection(),news:newsSection(),story:storySection(),proof:proofSection(),cta:ctaSection()
  };
  const orders={
    split:['hero','stats','products','cases','news','cta'],
    fullscreen:['hero','story','cases','products','news','cta'],
    centered:['hero','stats','products','proof','news','cta'],
    editorial:['hero','cases','story','products','news','cta'],
    catalog:['hero','products','proof','cases','news','cta'],
    conversion:['hero','stats','products','cta','proof','news'],
    authority:['hero','products','proof','cases','news','cta'],
    portfolio:['hero','cases','products','story','news','cta'],
    commerce:['hero','products','cases','news','story','cta'],
    property:['hero','story','cases','stats','news','cta']
  };
  app.innerHTML=(orders[preset.layout]||orders.split).map(k=>pieces[k]).join('');
}

function hero(title,desc,img){
  const use=img||images.hero;
  return '<section class="pageHero has-image" style="--page-image:url(\''+use+'\')"><div class="wrap"><div class="crumb"><a href="'+route('site-home.html')+'">首页</a> / '+safe(title)+'</div><span class="eyebrow">'+industry.category+'</span><h1>'+safe(title)+'</h1><p>'+safe(desc)+'</p></div></section>';
}
function pager(){return '<div class="pager"><a class="on">1</a><a>2</a><a>3</a><a>→</a></div>'}
function renderProducts(){
  const l=label(),names=productNames().concat([industry.name+'专业服务 D',industry.name+'行业方案 E',industry.name+'长期支持 F']);
  app.innerHTML=hero(l.nav2,'集中展示'+industry.name+'的产品、服务、路线或专业领域。每一项都有独立详情页。',images.products[0])+
    '<section class="section"><div class="wrap"><div class="filterbar"><input class="input" placeholder="搜索'+l.nav2+'…"><select class="input"><option>全部分类</option><option>'+safe((pack.categories&&pack.categories.primary&&pack.categories.primary[0])||'核心分类')+'</option><option>'+safe((pack.categories&&pack.categories.primary&&pack.categories.primary[1])||'解决方案')+'</option></select></div><div class="grid3 stagger">'+names.map((n,i)=>card(n,'product',i)).join('')+'</div>'+pager()+'</div></section>';
}
function renderProduct(){
  const names=productNames(),idx=Number(qs.get('item')||0),name=names[idx%names.length]||names[0],fields=(pack.custom_fields||[]).slice(0,6);
  app.innerHTML=hero(name,'这是独立的详情页面，包含正文、参数、自定义字段、相关内容和询价入口。',images.products[idx%images.products.length])+
    '<section class="section"><div class="wrap detailGrid"><article class="prose"><div class="cover reveal">'+imageTag(images.products[idx%images.products.length],name,'',industry.accent)+'</div><h2>核心特点</h2><p>'+safe(name)+'围绕真实业务场景组织内容，后台可以维护图集、富文本、自定义字段、SEO、发布时间和相关内容。</p><blockquote>内容是资产，模板负责展示。切换设计风格不应该修改客户真实数据。</blockquote><h2>适用场景</h2><p>页面根据行业字段自动输出更合适的信息结构，同时保持 Core、Theme 和 Plugin 相互独立。</p><h2>相关内容</h2><p>详情页可关联案例、文章、下载资料与表单，提高内部链接和转化效率。</p></article><aside class="sidebox"><h3>详细信息</h3>'+fields.map((v,i)=>'<div class="row"><span>'+safe(v)+'</span><b>'+['标准配置','可定制','全国服务','7-15 天','专业支持','按需'][i%6]+'</b></div>').join('')+'<a class="btn" style="width:100%;margin-top:18px" href="'+route('site-contact.html')+'">咨询 / 获取报价</a></aside></div></section>';
}
function renderCases(){
  const l=label(),names=caseNames().concat([industry.name+'项目四',industry.name+'项目五',industry.name+'项目六']);
  app.innerHTML=hero(l.nav3,'案例列表单独成页，用项目类型、场景和结果证明真实能力。',images.cases[0])+
    '<section class="section"><div class="wrap"><div class="filterbar"><select class="input"><option>全部案例</option><option>重点项目</option><option>最新案例</option></select></div><div class="grid3 stagger">'+names.map((n,i)=>card(n,'case',i)).join('')+'</div>'+pager()+'</div></section>';
}
function renderCase(){
  const names=caseNames(),idx=Number(qs.get('item')||0),name=names[idx%names.length]||names[0],img=images.cases[idx%images.cases.length];
  app.innerHTML=hero(name,'案例详情页单独展示项目背景、解决方案、过程和结果。',img)+
    '<section class="section"><div class="wrap detailGrid"><article class="prose"><div class="cover reveal">'+imageTag(img,name,'',industry.accent)+'</div><h2>项目背景</h2><p>客户在项目开始前面临实际业务问题，需要从目标、场景和限制条件出发设计解决方案。</p><h2>解决方案</h2><p>通过明确的信息架构、行业模块和后台字段，把复杂内容变成可持续维护的网站数据。</p><h2>最终结果</h2><p>项目形成独立案例内容，并可关联产品、文章和联系表单，为客户决策提供更多依据。</p></article><aside class="sidebox"><h3>项目概况</h3><div class="row"><span>行业</span><b>'+safe(industry.name)+'</b></div><div class="row"><span>项目时间</span><b>2026-08</b></div><div class="row"><span>项目类型</span><b>'+safe(label().case)+'</b></div><div class="row"><span>状态</span><b>已交付</b></div><a class="btn" style="width:100%;margin-top:18px" href="'+route('site-contact.html')+'">咨询类似项目</a></aside></div></section>';
}
function renderNews(){
  const nn=newsTitles().concat([industry.name+'常见误区与避坑指南',industry.name+'客户案例复盘']);
  app.innerHTML=hero('新闻资讯','新闻中心使用标准列表页，每篇新闻都有独立详情地址、SEO 信息和发布时间。',images.news[0])+
    '<section class="section"><div class="wrap"><div class="filterbar"><input class="input" placeholder="搜索新闻…"><select class="input"><option>全部分类</option><option>'+safe(industry.name)+'知识</option><option>公司动态</option><option>行业资讯</option></select></div><div class="newsList">'+nn.map((n,i)=>'<a class="newsItem reveal" href="'+route('site-news-detail.html','article='+i)+'"><div class="newsThumb">'+imageTag(images.news[i%images.news.length],n,'',industry.accent)+'</div><div><time>2026.09.'+String(21-i*2).padStart(2,'0')+'</time><h3>'+safe(n)+'</h3><p>文章摘要用于新闻列表、搜索结果和分享卡片展示，后台可单独维护。</p></div><span style="font-weight:900;color:var(--accent)">阅读 →</span></a>').join('')+'</div>'+pager()+'</div></section>';
}
function renderArticle(){
  const nn=newsTitles(),idx=Number(qs.get('article')||0),title=nn[idx%nn.length]||nn[0],img=images.news[idx%images.news.length];
  app.innerHTML=hero(title,'2026-09-21 · '+industry.name+'知识 · 阅读约 6 分钟',img)+
    '<section class="section"><div class="wrap detailGrid"><article class="prose"><div class="cover reveal">'+imageTag(img,title,'',industry.accent)+'</div><p>这是标准新闻详情页。正文来自后台富文本编辑器，不需要把所有文章内容塞到首页。</p><h2>为什么这个问题重要？</h2><p>企业官网中的新闻与知识内容不仅用于展示，还承担客户教育、搜索引擎收录、内部链接和长期品牌积累。</p><h2>实际应该怎么做？</h2><p>后台维护标题、摘要、正文、封面、分类、标签、SEO、发布时间和下线时间；前台通过统一内容服务输出。</p><h3>保持内容和模板分离</h3><p>切换模板不会修改文章正文，新的模板只改变文章详情的呈现方式。</p><blockquote>内容是资产，模板是展示方式，两者必须独立。</blockquote></article><aside class="sidebox"><h3>文章信息</h3><div class="row"><span>分类</span><b>'+safe(industry.name)+'知识</b></div><div class="row"><span>发布时间</span><b>2026-09-21</b></div><div class="row"><span>作者</span><b>内容团队</b></div><div class="row"><span>阅读</span><b>1,286</b></div><a class="btn ghost" style="width:100%;margin-top:18px" href="'+route('site-news.html')+'">返回新闻列表</a></aside></div></section>';
}
function renderAbout(){
  app.innerHTML=hero('关于我们','用独立页面介绍企业、团队、发展历程、资质与服务理念。',images.about)+
    '<section class="section"><div class="wrap aboutGrid"><div class="aboutVisual reveal">'+imageTag(images.about,industry.name+'团队与环境','',industry.accent)+'</div><div class="reveal"><span class="eyebrow">ABOUT '+safe(industry.name).toUpperCase()+'</span><h2 style="font-size:40px;line-height:1.18">长期服务'+safe(industry.name)+'客户，<br>把专业能力变成可理解的信息。</h2><p style="color:var(--muted);font-size:17px">关于我们不应该只是几句公司简介，而应该包含企业定位、核心能力、团队与真实服务边界。</p><div class="featureList"><div class="feature"><b>专业团队</b><span>持续积累行业经验。</span></div><div class="feature"><b>标准流程</b><span>交付过程透明可追踪。</span></div><div class="feature"><b>长期维护</b><span>内容、系统和安全持续更新。</span></div><div class="feature"><b>客户优先</b><span>从真实需求出发设计方案。</span></div></div></div></div></section>'+statsSection();
}
function renderContact(){
  app.innerHTML=hero('联系我们','联系页面单独存在，承载表单、电话、邮箱、地址和服务时间。',images.contact)+
    '<section class="section"><div class="wrap contactGrid"><div><div class="contactCards"><div class="contactCard"><b>联系电话</b><p>400-000-2026</p></div><div class="contactCard"><b>企业邮箱</b><p>hello@example.com</p></div><div class="contactCard"><b>服务地址</b><p>杭州市 · 支持全国项目</p></div><div class="contactCard"><b>服务时间</b><p>工作日 09:00–18:00</p></div></div><div class="contactImage reveal" style="margin-top:14px;height:260px;border-radius:var(--radius);overflow:hidden">'+imageTag(images.contact,industry.name+'联系场景','',industry.accent)+'</div></div><form class="form" onsubmit="event.preventDefault();alert(\'演示环境：需求已提交\')"><label class="field"><span>姓名</span><input required></label><label class="field"><span>联系电话</span><input required></label><label class="field"><span>公司名称</span><input></label><label class="field"><span>邮箱</span><input type="email"></label><label class="field full"><span>需求类型</span><select><option>'+safe(label().service)+'</option><option>'+safe(label().case)+'</option><option>其他咨询</option></select></label><label class="field full"><span>需求说明</span><textarea required></textarea></label><div class="field full"><button class="btn">提交需求</button></div></form></div></section>';
}
boot();
