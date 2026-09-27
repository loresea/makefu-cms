const MARKET_STYLE_NAMES={
  'tech-minimal':'科技极简','industrial-pro':'工业专业','legal-luxury':'专业高端','travel-immersive':'沉浸旅行',
  'home-editorial':'家居杂志','medical-clean':'医疗清洁','education-friendly':'教育成长','food-brand':'餐饮品牌',
  'ecommerce-modern':'现代电商','local-conversion':'本地转化','realestate-premium':'地产高端','creative-studio':'创意工作室'
};
const MARKET_LAYOUT_NAMES={split:'左右分栏',fullscreen:'沉浸全屏',centered:'居中展示',editorial:'杂志排版',catalog:'产品目录',conversion:'获客转化',authority:'专业权威',portfolio:'作品集',commerce:'商城陈列',property:'项目地产'};
const MARKET_USE_CASES={
  'corporate-tech':['企业官网','产品展示','获客转化','SEO内容'],
  'technical-spec':['企业官网','参数展示','资料下载','询盘获客'],
  'industrial-catalog':['企业官网','产品目录','工程案例','询盘获客'],
  'professional-trust':['专业服务','品牌展示','内容SEO','预约咨询'],
  'service-conversion':['获客官网','预约服务','套餐报价','内容SEO'],
  'portfolio-editorial':['作品展示','品牌官网','案例获客','内容SEO'],
  'destination-explorer':['线路展示','预约咨询','内容种草','品牌官网'],
  'healthcare-trust':['预约服务','专业团队','科普内容','品牌官网'],
  'education-programs':['课程展示','预约试听','师资展示','内容SEO'],
  'food-brand':['品牌官网','门店展示','产品展示','加盟获客'],
  'ecommerce-showcase':['商品展示','品牌官网','营销活动','内容SEO'],
  'environment-energy':['解决方案','工程案例','产品展示','询盘获客'],
  'home-living':['案例展示','预约量房','设计师展示','内容SEO'],
  'hospitality-experience':['预订咨询','空间展示','品牌官网','内容种草'],
  'logistics-map':['服务网络','在线询价','项目案例','企业官网'],
  'automotive-showroom':['车型展示','预约体验','门店展示','内容SEO'],
  'local-services':['本地获客','预约服务','服务区域','口碑展示'],
  'real-estate-listings':['项目展示','预约看房','户型展示','内容SEO'],
  'creative-agency':['作品展示','品牌官网','项目案例','预约咨询']
};
const MARKET_ALIAS_MAP={
  renovation:['装修','家装','装饰','室内装修','室内设计','全案设计','家居设计','zhuangxiu','jia zhuang'],
  machinery:['机械','机械设备','工业设备','机器','制造设备','生产设备','jixie'],
  lawyer:['律师','律所','律师事务所','法律服务','法务','lvshi'],
  travel:['旅游','旅行','旅游线路','旅行社','文旅','lvyou'],
  accounting:['代理记账','财税','记账','工商财税','代账','caishui'],
  software:['软件','网站建设','系统开发','小程序','APP','ruanjian'],
  clinic:['诊所','医院','医疗','门诊','yiliao'],
  education:['教育','培训','课程','学校','jiaoyu'],
  'real-estate':['房地产','楼盘','房产','置业','地产','dichan'],
  ecommerce:['电商','零售','商城','网店','dianshang'],
  logistics:['物流','运输','货运','供应链','wuliu'],
  'foreign-trade':['外贸','出口','英文网站','海外','waimao']
};
const MARKET_COLLECTIONS=[
  {id:'recommended',name:'精选推荐'},
  {id:'hot',name:'热门模板'},
  {id:'new',name:'本月新上'},
  {id:'premium',name:'高端企业官网'},
  {id:'conversion',name:'获客型模板'},
  {id:'seo',name:'SEO 友好'},
  {id:'foreign',name:'外贸精选'}
];

function marketHash(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function marketNum(n){return n>=10000?(n/10000).toFixed(n>=100000?0:1)+'w':n>=1000?(n/1000).toFixed(1)+'k':String(n)}
function marketStore(key,def){try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(def))}catch{return def}}
function marketSet(key,val){try{localStorage.setItem(key,JSON.stringify(val))}catch{}}

function marketAliases(x){
  const raw=[x.name,x.display_name,x.brand,x.category,x.slug,x.industry_slug,x.headline,...(x.tags||[])].filter(Boolean);
  const roots=[x.slug,x.industry_slug].filter(Boolean);
  roots.forEach(r=>{if(MARKET_ALIAS_MAP[r])raw.push(...MARKET_ALIAS_MAP[r])});
  if(x.category==='家居建材')raw.push('装修','家居','设计');
  if(x.category==='工业制造')raw.push('制造','工业','设备');
  if(x.category==='企业服务')raw.push('企业服务','商务服务');
  if(x.category==='医疗健康')raw.push('医疗','健康');
  if(x.category==='教育培训')raw.push('教育','培训');
  return [...new Set(raw.map(v=>String(v).toLowerCase()))];
}
function marketBusinessPosition(x,p){
  if(x.industry_slug==='renovation'||x.slug==='renovation') {
    const map={
      'renovation-modern':'中高端全案设计','renovation-natural':'年轻家庭 / 自然住宅','renovation-luxury':'高端私宅 / 别墅',
      'renovation-retro':'设计事务所 / 复古住宅','renovation-oriental':'现代东方 / 高端私宅','renovation-urban':'都市公寓 / LOFT'
    }; return map[x.slug]||'装修设计企业';
  }
  if(x.blueprint_label){
    const key=(x.keywords||[]).slice(0,2).join(' / ');
    return x.blueprint_label+(key?' · '+key:'');
  }
  if(p.style==='legal-luxury'||p.style==='realestate-premium')return '中高端品牌';
  if(p.layout==='conversion')return '获客转化';
  if(p.layout==='portfolio')return '作品展示';
  if(p.layout==='catalog'||p.layout==='commerce')return '产品展示';
  return '企业品牌';
}
function marketFeatures(x){
  if(x.module_labels?.length)return [...x.module_labels.slice(0,5),x.cta||'咨询联系'];
  if(x.industry_slug==='renovation') return ['案例详情','服务详情','设计风格','材料工艺','设计团队','装修知识','预约量房'];
  const map={
    'professional-trust':['专业领域','团队详情','案例详情','观点文章','预约咨询'],
    'industrial-catalog':['产品列表','产品详情','参数字段','应用案例','在线询盘'],
    'technical-spec':['型号参数','技术资料','产品详情','应用案例','在线询盘'],
    'education-programs':['课程列表','课程详情','师资团队','学习成果','预约试听'],
    'destination-explorer':['目的地','旅游线路','线路详情','顾问','预约咨询'],
    'healthcare-trust':['服务项目','医生团队','科普文章','预约咨询','环境设备']
  };
  return map[x.family]||['独立列表页','独立详情页','案例','新闻资讯','联系我们'];
}
function enrichMarketTemplate(x,p,index){
  const h=marketHash((x.slug||x.name)+'|'+index);
  const age=h%120;
  const installs=36+(h%1800);
  const views=installs*5+((h>>5)%7800);
  const favorites=Math.max(8,Math.floor(installs*.27)+(h%90));
  const rating=(4.55+((h%40)/100)).toFixed(1);
  const trend=8+((h>>7)%93);
  const updatedDays=(h>>11)%70;
  const isNew=age<28||String(x.slug).startsWith('renovation-');
  const isHot=installs>1150||trend>78;
  const isPremium=['legal-luxury','realestate-premium','home-editorial'].includes(p.style);
  const uses=x.module_labels?.length?[...x.module_labels.slice(0,3),x.cta||'咨询联系']:(MARKET_USE_CASES[x.family]||['企业官网','品牌展示','内容SEO']);
  const badges=[];
  if(isHot)badges.push('热门');
  if(isNew)badges.push('新品');
  if(Number(rating)>=4.8)badges.push('精品');
  if(trend>82)badges.push('上升');
  return {
    x,p,index,aliases:marketAliases(x),uses,features:marketFeatures(x),position:marketBusinessPosition(x,p),
    stats:{installs,views,favorites,rating:Number(rating),trend,updatedDays,age},
    flags:{isNew,isHot,isPremium},badges,
    score:installs*.35+views*.02+favorites*.15+Number(rating)*100*.15+trend*5*.1+(isNew?110:0)
  };
}
function marketMatches(v,query){
  const q=String(query||'').trim().toLowerCase(); if(!q)return true;
  const hay=[...v.aliases,...v.uses,v.position,MARKET_STYLE_NAMES[v.p.style]||v.p.style,MARKET_LAYOUT_NAMES[v.p.layout]||v.p.layout,...v.features].join(' ').toLowerCase();
  return q.split(/\s+/).every(k=>hay.includes(k));
}
function marketInCollection(v,id){
  if(!id||id==='all')return true;
  if(id==='recommended')return v.score>500||v.badges.includes('精品');
  if(id==='hot')return v.flags.isHot;
  if(id==='new')return v.flags.isNew;
  if(id==='premium')return v.flags.isPremium;
  if(id==='conversion')return v.uses.some(x=>x.includes('获客')||x.includes('预约'));
  if(id==='seo')return v.uses.some(x=>x.includes('SEO')||x.includes('内容'));
  if(id==='foreign')return /外贸|跨境|出口|foreign|cross-border/i.test(v.aliases.join(' '));
  return true;
}
function marketSort(rows,mode='recommended'){
  const copy=[...rows];
  const sorter={
    recommended:(a,b)=>b.score-a.score,
    hot:(a,b)=>b.stats.trend-a.stats.trend||b.stats.views-a.stats.views,
    installs:(a,b)=>b.stats.installs-a.stats.installs,
    favorites:(a,b)=>b.stats.favorites-a.stats.favorites,
    rating:(a,b)=>b.stats.rating-a.stats.rating||b.stats.installs-a.stats.installs,
    new:(a,b)=>a.stats.age-b.stats.age,
    updated:(a,b)=>a.stats.updatedDays-b.stats.updatedDays,
    trending:(a,b)=>b.stats.trend-a.stats.trend
  }[mode]||((a,b)=>b.score-a.score);
  return copy.sort(sorter);
}
function marketFavorites(){return marketStore('makefu-template-favorites',[])}
function marketInstalled(){return marketStore('makefu-template-installed',[])}
function marketRecent(){return marketStore('makefu-template-recent',[])}
function marketToggleFavorite(slug){const a=marketFavorites(),i=a.indexOf(slug);i>=0?a.splice(i,1):a.unshift(slug);marketSet('makefu-template-favorites',a.slice(0,100));return i<0}
function marketMarkInstalled(slug){const a=marketInstalled().filter(x=>x!==slug);a.unshift(slug);marketSet('makefu-template-installed',a.slice(0,100))}
function marketMarkRecent(slug){const a=marketRecent().filter(x=>x!==slug);a.unshift(slug);marketSet('makefu-template-recent',a.slice(0,30))}
function marketIsFavorite(slug){return marketFavorites().includes(slug)}
function marketMyFilter(v,kind){const slug=v.x.slug;if(kind==='favorites')return marketFavorites().includes(slug);if(kind==='installed')return marketInstalled().includes(slug);if(kind==='recent')return marketRecent().includes(slug);return true}

window.MARKET_STYLE_NAMES=MARKET_STYLE_NAMES;
window.MARKET_LAYOUT_NAMES=MARKET_LAYOUT_NAMES;
window.MARKET_COLLECTIONS=MARKET_COLLECTIONS;
window.enrichMarketTemplate=enrichMarketTemplate;
window.marketMatches=marketMatches;
window.marketInCollection=marketInCollection;
window.marketSort=marketSort;
window.marketToggleFavorite=marketToggleFavorite;
window.marketMarkInstalled=marketMarkInstalled;
window.marketMarkRecent=marketMarkRecent;
window.marketIsFavorite=marketIsFavorite;
window.marketMyFilter=marketMyFilter;
window.marketNum=marketNum;
