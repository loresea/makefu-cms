const qs=new URLSearchParams(location.search);
const slug=qs.get('industry')||'machinery';
const page=document.body.dataset.page||'home';
let industry,pack;

const familyLabels={
'industrial-catalog':{nav2:'产品中心',nav3:'应用案例',service:'产品与能力',case:'项目案例'},
'technical-spec':{nav2:'产品中心',nav3:'技术案例',service:'技术产品',case:'应用案例'},
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
'real-estate-listings':{nav2:'项目中心',nav3:'置业案例',service:'项目与房源',case:'项目案例'},
'destination-explorer':{nav2:'精选路线',nav3:'旅行故事',service:'路线与服务',case:'旅行故事'}
};

function mix(hex,percent){let n=parseInt(hex.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;if(percent>=0){r+=Math.round((255-r)*percent/100);g+=Math.round((255-g)*percent/100);b+=Math.round((255-b)*percent/100)}else{const p=1+percent/100;r=Math.round(r*p);g=Math.round(g*p);b=Math.round(b*p)}return'#'+[r,g,b].map(v=>Math.max(0,Math.min(255,v)).toString(16).padStart(2,'0')).join('')}
function route(file,extra=''){return './'+file+'?industry='+encodeURIComponent(slug)+(extra?'&'+extra:'')}
function label(){return familyLabels[industry.family]||familyLabels['service-conversion']}

async function boot(){
  const [reg,packs]=await Promise.all([fetch('./industries.json').then(r=>r.json()),fetch('./industry-packs.json').then(r=>r.json())]);
  industry=reg.industries.find(x=>x.slug===slug)||reg.industries[0];
  pack=packs.packs.find(x=>x.slug===industry.slug)||packs.packs[0];
  const root=document.documentElement;
  root.style.setProperty('--accent',industry.accent);
  root.style.setProperty('--accent-dark',mix(industry.accent,-35));
  root.style.setProperty('--soft',mix(industry.accent,88));
  document.body.classList.add('family-'+industry.family);
  document.title=(document.title||'')+' · '+industry.name;
  renderShell();
  renderPage();
}
function renderShell(){
  const l=label();
  document.querySelector('#brand').innerHTML='<img alt="'+industry.name+' Logo" src="'+makeIndustryLogo(industry.name,industry.accent,industry.family)+'">';
  document.querySelector('#topText').textContent=industry.category+' · 行业官网模板';
  document.querySelector('#navLinks').innerHTML=[
    ['site-home.html','首页','home'],
    ['site-products.html',l.nav2,'products'],
    ['site-cases.html',l.nav3,'cases'],
    ['site-news.html','新闻资讯','news'],
    ['site-about.html','关于我们','about']
  ].map(([f,t,k])=>'<a class="'+(page===k?'on':'')+'" href="'+route(f)+'">'+t+'</a>').join('');
  document.querySelector('#navCta').href=route('site-contact.html');
  document.querySelector('#footerBrand').textContent=industry.name+'示例企业';
  document.querySelector('#footerDesc').textContent=industry.headline;
  document.querySelector('#footerServices').innerHTML=(pack.menus||[]).slice(1,5).join('<br>'); const cr=document.querySelector('.copyright'); if(cr) cr.innerHTML='<a href="https://www.makefu.com/" target="_blank" rel="noopener">© 2026 '+industry.name+'示例站 · 技术支持：码科服网站开发</a> <span style="margin:0 10px">·</span> 浙ICP备2026XXXX号-1';
}
function renderPage(){
  if(page==='home') return renderHome();
  if(page==='products') return renderProducts();
  if(page==='product') return renderProduct();
  if(page==='cases') return renderCases();
  if(page==='case') return renderCase();
  if(page==='news') return renderNews();
  if(page==='article') return renderArticle();
  if(page==='about') return renderAbout();
  if(page==='contact') return renderContact();
}
function cards(names,type){
  return names.map((n,i)=>'<a class="card" href="'+(type==='product'?route('site-product.html','item='+i):route('site-case.html','item='+i))+'"><div class="media"></div><div class="body"><small>'+industry.category+'</small><h3>'+n+'</h3><p>'+['清晰展示核心信息、适用场景和服务边界。','通过真实内容帮助客户理解差异与价值。','支持后台独立维护、SEO 与前台 API 调用。'][i%3]+'</p><div class="tags"><span class="tag">行业内容</span><span class="tag">可维护</span></div></div></a>').join('');
}
function productNames(){const m={travel:['京都慢旅 6 日','云南秋色 8 日','欧洲私家团'],renovation:['全案设计','旧房翻新','软装搭配'],accounting:['小规模代理记账','一般纳税人服务','财税顾问'],lawyer:['公司商事','劳动用工','婚姻家事']};return m[industry.slug]||[industry.name+'核心产品 A',industry.name+'解决方案 B',industry.name+'定制服务 C']}
function caseNames(){const m={travel:['日本关西亲子私家团','川西摄影小团','欧洲蜜月定制'],renovation:['170㎡改善型住宅','98㎡旧房翻新','商业空间改造'],accounting:['科技企业财税规范项目','电商公司历史账务梳理','外贸企业税务顾问'],lawyer:['股权回购争议专项','高级管理人员竞业限制争议','复杂家事财产梳理']};return m[industry.slug]||[industry.name+'项目案例一',industry.name+'客户案例二',industry.name+'交付案例三']}
function newsTitles(){return [industry.name+'客户最常关心的 6 个问题','选择'+industry.name+'服务商时要看什么？',industry.name+'网站内容应该怎样持续更新？','2026 年'+industry.name+'行业趋势与注意事项','一个真实'+industry.name+'项目是怎么落地的？']}
function renderHome(){
  const l=label(), pn=productNames(), cn=caseNames(), nn=newsTitles();
  app.innerHTML='<section class="homeHero"><div class="wrap heroGrid"><div><span class="eyebrow">'+industry.category+' · '+l.service+'</span><h1>'+industry.headline+'</h1><p>这是面向'+industry.name+'企业的多页面生产级官网模板。首页只负责概览和转化，产品、案例、新闻、关于我们和联系页面全部独立。</p><div class="actions"><a class="btn" href="'+route('site-contact.html')+'">获取方案</a><a class="btn ghost" href="'+route('site-products.html')+'">'+l.nav2+'</a></div></div><div class="visual"></div></div></section>'+
  '<div class="wrap"><div class="stats"><div><b>10+</b><span>行业经验</span></div><div><b>100+</b><span>客户项目</span></div><div><b>24h</b><span>快速响应</span></div><div><b>4.9/5</b><span>客户评价</span></div></div></div>'+
  '<section class="section"><div class="wrap"><div class="head"><div><h2>'+l.service+'</h2><p>首页只展示重点内容，点击进入独立列表和详情页面。</p></div><a href="'+route('site-products.html')+'">查看全部 →</a></div><div class="grid3">'+cards(pn,'product')+'</div></div></section>'+
  '<section class="section alt"><div class="wrap"><div class="head"><div><h2>'+l.case+'</h2><p>用真实项目、过程和结果建立信任。</p></div><a href="'+route('site-cases.html')+'">全部案例 →</a></div><div class="grid3">'+cards(cn,'case')+'</div></div></section>'+
  '<section class="section"><div class="wrap"><div class="head"><div><h2>新闻与行业知识</h2><p>新闻列表和文章详情是独立页面，不使用锚点跳转。</p></div><a href="'+route('site-news.html')+'">新闻中心 →</a></div><div class="grid3">'+nn.slice(0,3).map((n,i)=>'<a class="card" href="'+route('site-news-detail.html','article='+i)+'"><div class="body"><small>2026.09.'+(21-i*3)+'</small><h3>'+n+'</h3><p>持续更新专业内容，为客户教育和 SEO 提供长期价值。</p></div></a>').join('')+'</div></div></section>'+
  '<section class="section alt"><div class="wrap"><div class="head"><div><h2>准备进一步了解？</h2><p>进入独立联系页面提交需求，不在首页塞满所有信息。</p></div><a class="btn" href="'+route('site-contact.html')+'">联系我们</a></div></div></section>';
}
function renderProducts(){
  const l=label(), names=[...productNames(),industry.name+'专业服务 D',industry.name+'行业方案 E',industry.name+'长期支持 F'];
  app.innerHTML=hero(l.nav2,'集中展示'+industry.name+'的产品、服务、路线或专业领域。每一项都有独立详情页。')+
  '<section class="section"><div class="wrap"><div class="filterbar"><input class="input" placeholder="搜索'+l.nav2+'…"><select class="input"><option>全部分类</option><option>'+((pack.categories?.primary||[])[0]||'核心分类')+'</option><option>'+((pack.categories?.primary||[])[1]||'解决方案')+'</option></select></div><div class="grid3">'+cards(names,'product')+'</div>'+pager()+'</div></section>';
}
function renderProduct(){
  const names=productNames(), idx=Number(qs.get('item')||0), name=names[idx%names.length]||names[0];
  const fields=(pack.custom_fields||[]).slice(0,6);
  app.innerHTML=hero(name,'这是独立的详情页面，包含正文、参数、自定义字段、相关内容和询价入口。')+
  '<section class="section"><div class="wrap detailGrid"><article class="prose"><div class="cover"></div><h2>核心特点</h2><p>'+name+'围绕真实业务场景组织内容，后台可以维护图集、富文本、自定义字段、SEO、发布时间和相关内容。</p><blockquote>模板负责展示，数据来自统一 FrontendContentService / REST API。</blockquote><h2>适用场景</h2><p>页面可以根据行业字段自动输出更合适的参数结构，同时保持 Core、Theme 和 Plugin 相互独立。</p><h2>相关内容</h2><p>详情页可关联案例、文章、下载资料与表单，提高网站内部链接和转化效率。</p></article><aside class="sidebox"><h3>详细信息</h3>'+fields.map((f,i)=>'<div class="row"><span>'+f+'</span><b>'+['标准配置','可定制','全国服务','7-15 天','专业支持','按需'][i%6]+'</b></div>').join('')+'<a class="btn" style="width:100%;margin-top:18px" href="'+route('site-contact.html')+'">咨询 / 获取报价</a></aside></div></section>';
}
function renderCases(){
  const l=label(), names=[...caseNames(),industry.name+'项目四',industry.name+'项目五',industry.name+'项目六'];
  app.innerHTML=hero(l.nav3,'案例列表单独成页，用项目类型、场景和结果证明真实能力。')+
  '<section class="section"><div class="wrap"><div class="filterbar"><select class="input"><option>全部案例</option><option>重点项目</option><option>最新案例</option></select></div><div class="grid3">'+cards(names,'case')+'</div>'+pager()+'</div></section>';
}
function renderCase(){
  const names=caseNames(), idx=Number(qs.get('item')||0), name=names[idx%names.length]||names[0];
  app.innerHTML=hero(name,'案例详情页单独展示项目背景、解决方案、过程和结果。')+
  '<section class="section"><div class="wrap detailGrid"><article class="prose"><div class="cover"></div><h2>项目背景</h2><p>客户在项目开始前面临实际业务问题，需要从目标、场景和限制条件出发设计解决方案。</p><h2>解决方案</h2><p>通过明确的信息架构、行业模块和后台字段，把复杂内容变成可持续维护的网站数据。</p><h2>最终结果</h2><p>项目形成独立案例内容，并可关联产品、文章和联系表单，为客户决策提供更多依据。</p></article><aside class="sidebox"><h3>项目概况</h3><div class="row"><span>行业</span><b>'+industry.name+'</b></div><div class="row"><span>项目时间</span><b>2026-08</b></div><div class="row"><span>项目类型</span><b>'+label().case+'</b></div><div class="row"><span>状态</span><b>已交付</b></div><a class="btn" style="width:100%;margin-top:18px" href="'+route('site-contact.html')+'">咨询类似项目</a></aside></div></section>';
}
function renderNews(){
  const nn=[...newsTitles(),industry.name+'常见误区与避坑指南',industry.name+'客户案例复盘'];
  app.innerHTML=hero('新闻资讯','新闻中心使用标准列表页，每篇新闻都有独立详情地址、SEO 信息和发布时间。')+
  '<section class="section"><div class="wrap"><div class="filterbar"><input class="input" placeholder="搜索新闻…"><select class="input"><option>全部分类</option><option>'+industry.name+'知识</option><option>公司动态</option><option>行业资讯</option></select></div><div class="newsList">'+nn.map((n,i)=>'<a class="newsItem" href="'+route('site-news-detail.html','article='+i)+'"><div class="newsThumb"></div><div><time>2026.09.'+String(21-i*2).padStart(2,'0')+'</time><h3>'+n+'</h3><p>文章摘要用于新闻列表、搜索结果和分享卡片展示，后台可单独维护。</p></div><span style="font-weight:900;color:var(--accent)">阅读 →</span></a>').join('')+'</div>'+pager()+'</div></section>';
}
function renderArticle(){
  const nn=newsTitles(), idx=Number(qs.get('article')||0), title=nn[idx%nn.length]||nn[0];
  app.innerHTML=hero(title,'2026-09-21 · '+industry.name+'知识 · 阅读约 6 分钟')+
  '<section class="section"><div class="wrap detailGrid"><article class="prose"><div class="cover"></div><p>这是标准新闻详情页。正文来自后台富文本编辑器，不需要把所有文章内容塞到首页。</p><h2>为什么这个问题重要？</h2><p>企业官网中的新闻与知识内容不仅用于展示，还承担客户教育、搜索引擎收录、内部链接和长期品牌积累。</p><h2>实际应该怎么做？</h2><p>后台维护标题、摘要、正文、封面、分类、标签、SEO、发布时间和下线时间；前台通过统一内容服务输出。</p><h3>保持内容和模板分离</h3><p>切换模板不会修改文章正文，新的模板只改变文章详情的呈现方式。</p><blockquote>内容是资产，模板是展示方式，两者必须独立。</blockquote></article><aside class="sidebox"><h3>文章信息</h3><div class="row"><span>分类</span><b>'+industry.name+'知识</b></div><div class="row"><span>发布时间</span><b>2026-09-21</b></div><div class="row"><span>作者</span><b>内容团队</b></div><div class="row"><span>阅读</span><b>1,286</b></div><a class="btn ghost" style="width:100%;margin-top:18px" href="'+route('site-news.html')+'">返回新闻列表</a></aside></div></section>';
}
function renderAbout(){
  app.innerHTML=hero('关于我们','用独立页面介绍企业、团队、发展历程、资质与服务理念。')+
  '<section class="section"><div class="wrap aboutGrid"><div class="aboutVisual"></div><div><span class="eyebrow">ABOUT '+industry.name.toUpperCase()+'</span><h2 style="font-size:40px;line-height:1.18">长期服务'+industry.name+'客户，<br>把专业能力变成可理解的信息。</h2><p style="color:var(--muted);font-size:17px">关于我们不应该只是几句公司简介，而应该包含企业定位、核心能力、团队与真实服务边界。</p><div class="featureList"><div class="feature"><b>专业团队</b><span>持续积累行业经验。</span></div><div class="feature"><b>标准流程</b><span>交付过程透明可追踪。</span></div><div class="feature"><b>长期维护</b><span>内容、系统和安全持续更新。</span></div><div class="feature"><b>客户优先</b><span>从真实需求出发设计方案。</span></div></div></div></div></section>'+
  '<section class="section alt"><div class="wrap"><div class="head"><div><h2>发展与能力</h2><p>可以继续扩展团队、资质、合作伙伴、荣誉和时间轴模块。</p></div></div><div class="stats" style="margin-top:0"><div><b>2016</b><span>开始行业服务</span></div><div><b>100+</b><span>累计项目</span></div><div><b>20+</b><span>团队成员</span></div><div><b>98%</b><span>客户持续合作率</span></div></div></div></section>';
}
function renderContact(){
  app.innerHTML=hero('联系我们','联系页面单独存在，承载表单、电话、邮箱、地址和服务时间。')+
  '<section class="section"><div class="wrap contactGrid"><div><div class="contactCards"><div class="contactCard"><b>联系电话</b><p>400-000-2026</p></div><div class="contactCard"><b>企业邮箱</b><p>hello@example.com</p></div><div class="contactCard"><b>服务地址</b><p>杭州市 · 支持全国项目</p></div><div class="contactCard"><b>服务时间</b><p>工作日 09:00–18:00</p></div></div></div><form class="form" onsubmit="event.preventDefault();alert(\'演示环境：需求已提交\')"><label class="field"><span>姓名</span><input required></label><label class="field"><span>联系电话</span><input required></label><label class="field"><span>公司名称</span><input></label><label class="field"><span>邮箱</span><input type="email"></label><label class="field full"><span>需求类型</span><select><option>'+label().service+'</option><option>'+label().case+'</option><option>其他咨询</option></select></label><label class="field full"><span>需求说明</span><textarea required></textarea></label><div class="field full"><button class="btn">提交需求</button></div></form></div></section>';
}
function hero(title,desc){return '<section class="pageHero"><div class="wrap"><div class="crumb"><a href="'+route('site-home.html')+'">首页</a> / '+title+'</div><span class="eyebrow">'+industry.category+'</span><h1>'+title+'</h1><p>'+desc+'</p></div></section>'}
function pager(){return '<div class="pager"><a class="on">1</a><a>2</a><a>3</a><a>→</a></div>'}
boot();