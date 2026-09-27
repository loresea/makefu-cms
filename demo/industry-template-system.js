/* Makefu CMS Industry Template System V2
 * 200 industries × 6 variants = 1200 templates.
 * Legacy single-template entries are not used by the V2 marketplace.
 */
const INDUSTRY_FAMILY_BLUEPRINTS={
'corporate-tech':{
 label:'数字科技/科技企业',
 modules:[['products','产品中心'],['solutions','解决方案'],['cases','客户案例'],['downloads','资料中心'],['articles','行业资讯'],['forms','咨询线索']],
 nav:[['home','首页'],['products','产品中心'],['solutions','解决方案'],['cases','客户案例'],['downloads','资料中心'],['articles','行业资讯'],['contact','联系我们']],
 home:['products','solutions','cases','technology','articles','cta'],
 detailNoun:'产品',
 variants:[
  ['科技极简','tech-minimal','split','light','企业技术实力与核心产品并重'],
  ['深色未来','tech-minimal','fullscreen','dark','适合 AI、云计算、SaaS 等科技品牌'],
  ['B2B 获客','local-conversion','conversion','brand','强调询盘、方案与客户案例'],
  ['产品平台','ecommerce-modern','catalog','light','强调产品矩阵、版本与功能'],
  ['专业蓝图','industrial-pro','authority','light','强调交付能力、架构与行业方案'],
  ['品牌科技','creative-studio','portfolio','dark','适合注重品牌感的科技公司']
 ]},
'technical-spec':{
 label:'技术参数型',
 modules:[['products','产品中心'],['applications','应用领域'],['cases','工程案例'],['downloads','技术资料'],['certifications','资质认证'],['forms','询价线索']],
 nav:[['home','首页'],['products','产品中心'],['applications','应用领域'],['cases','工程案例'],['downloads','技术资料'],['certifications','资质认证'],['contact','询价联系']],
 home:['products','specs','applications','cases','certifications','cta'],
 detailNoun:'设备/产品',
 variants:[
  ['参数专家','industrial-pro','catalog','light','参数、型号和技术文档优先'],
  ['黑色工程','industrial-pro','fullscreen','dark','重技术、重工业视觉'],
  ['国际技术','tech-minimal','split','light','适合外贸与国际 B2B'],
  ['解决方案','local-conversion','conversion','brand','从应用问题切入转化'],
  ['实验室感','medical-clean','authority','light','精密、洁净、可信赖'],
  ['先锋智造','creative-studio','portfolio','dark','适合自动化与高端装备']
 ]},
'industrial-catalog':{
 label:'工业产品目录型',
 modules:[['products','产品中心'],['applications','应用行业'],['cases','工程案例'],['certifications','生产实力'],['articles','新闻资讯'],['forms','询价线索']],
 nav:[['home','首页'],['products','产品中心'],['applications','应用行业'],['cases','工程案例'],['certifications','工厂实力'],['articles','新闻资讯'],['contact','联系我们']],
 home:['products','factory','applications','cases','certifications','cta'],
 detailNoun:'产品',
 variants:[
  ['工业目录','industrial-pro','catalog','light','型号清晰、便于选型'],
  ['重工力量','industrial-pro','fullscreen','dark','工厂、设备和工程能力优先'],
  ['外贸制造','tech-minimal','split','light','国际采购与询盘导向'],
  ['工程方案','local-conversion','conversion','brand','按场景与工程需求组织内容'],
  ['精密制造','tech-minimal','authority','light','适合高精度与高标准制造'],
  ['制造品牌','creative-studio','portfolio','dark','品牌形象与工业摄影结合']
 ]},
'professional-trust':{
 label:'专业信任型',
 modules:[['services','专业服务'],['team','专业团队'],['cases','典型案例'],['articles','专业观点'],['certifications','资质荣誉'],['forms','咨询线索']],
 nav:[['home','首页'],['services','专业领域'],['team','专业团队'],['cases','典型案例'],['articles','专业观点'],['about','关于我们'],['contact','预约咨询']],
 home:['services','team','cases','trust','articles','cta'],
 detailNoun:'服务',
 variants:[
  ['权威经典','legal-luxury','authority','light','稳重、权威、强调资历'],
  ['现代商务','tech-minimal','split','light','现代企业客户导向'],
  ['高端合伙人','legal-luxury','fullscreen','dark','高净值与复杂项目定位'],
  ['专业获客','local-conversion','conversion','brand','强调咨询入口与案例证明'],
  ['知识型','home-editorial','editorial','light','观点文章与知识内容驱动'],
  ['精品事务所','creative-studio','portfolio','dark','年轻、高端、精品团队']
 ]},
'service-conversion':{
 label:'服务转化型',
 modules:[['services','服务项目'],['pricing','服务套餐'],['process','办理流程'],['cases','客户案例'],['articles','知识中心'],['forms','客户线索']],
 nav:[['home','首页'],['services','服务项目'],['pricing','服务套餐'],['process','办理流程'],['cases','客户案例'],['articles','知识中心'],['contact','立即咨询']],
 home:['services','pricing','process','cases','articles','cta'],
 detailNoun:'服务',
 variants:[
  ['清爽获客','local-conversion','conversion','brand','服务与咨询入口突出'],
  ['企业专业','professional-trust','authority','light','适合企业客户与长期服务'],
  ['透明套餐','ecommerce-modern','catalog','light','价格、套餐与办理内容清晰'],
  ['本地口碑','local-conversion','centered','warm','突出城市服务与客户评价'],
  ['内容增长','home-editorial','editorial','light','SEO 内容与知识获客'],
  ['高端顾问','legal-luxury','split','dark','顾问式服务与品牌价值']
 ]},
'portfolio-editorial':{
 label:'作品案例型',
 modules:[['cases','作品案例'],['services','服务项目'],['team','主创团队'],['process','服务流程'],['articles','灵感/资讯'],['forms','预约咨询']],
 nav:[['home','首页'],['cases','作品案例'],['services','服务项目'],['team','主创团队'],['process','服务流程'],['articles','灵感资讯'],['contact','联系我们']],
 home:['cases','services','process','team','articles','cta'],
 detailNoun:'案例',
 variants:[
  ['现代作品集','home-editorial','portfolio','light','大图作品与留白'],
  ['杂志编辑','creative-studio','editorial','light','不对称排版与内容叙事'],
  ['深色艺术','creative-studio','fullscreen','dark','沉浸式作品展示'],
  ['自然生活','home-editorial','centered','warm','柔和、自然、生活方式感'],
  ['品牌事务所','legal-luxury','split','light','高级、克制、专业'],
  ['大胆先锋','creative-studio','portfolio','brand','大字号与强视觉识别']
 ]},
'destination-explorer':{
 label:'旅游目的地型',
 modules:[['routes','旅游线路'],['destinations','目的地'],['services','定制服务'],['team','旅行顾问'],['articles','旅行内容'],['forms','预约咨询']],
 nav:[['home','首页'],['routes','旅游线路'],['destinations','目的地'],['services','定制旅行'],['team','旅行顾问'],['articles','旅行灵感'],['contact','咨询预订']],
 home:['routes','destinations','services','team','articles','cta'],
 detailNoun:'旅游线路',
 variants:[
  ['自然探索','travel-immersive','fullscreen','light','风景大图和目的地发现'],
  ['高端定制','legal-luxury','split','dark','私人定制与高端旅行'],
  ['年轻潮流','creative-studio','portfolio','brand','年轻、自由、社交感'],
  ['亲子度假','education-friendly','centered','warm','安全、家庭、行程清晰'],
  ['文化深度','home-editorial','editorial','light','文化内容和路线叙事'],
  ['极地冒险','tech-minimal','fullscreen','dark','探险、户外与目的地沉浸']
 ]},
'healthcare-trust':{
 label:'医疗健康型',
 modules:[['services','诊疗/服务项目'],['doctors','医生/专家'],['facilities','环境设备'],['cases','服务案例'],['articles','健康科普'],['forms','预约挂号']],
 nav:[['home','首页'],['services','诊疗项目'],['doctors','医生团队'],['facilities','环境设备'],['articles','健康科普'],['about','机构介绍'],['contact','预约咨询']],
 home:['services','doctors','facilities','trust','articles','cta'],
 detailNoun:'服务项目',
 variants:[
  ['医疗洁净','medical-clean','authority','light','专业、清洁、可信赖'],
  ['温暖关怀','education-friendly','centered','warm','适合母婴、养老与护理'],
  ['专家权威','professional-trust','authority','light','专家、资质与诊疗能力'],
  ['预约转化','local-conversion','conversion','brand','突出预约与到院咨询'],
  ['高端医疗','legal-luxury','split','dark','高端医疗与私密服务'],
  ['健康内容','home-editorial','editorial','light','健康知识与长期内容运营']
 ]},
'education-programs':{
 label:'教育课程型',
 modules:[['programs','课程/项目'],['teachers','师资团队'],['outcomes','学习成果'],['services','教学服务'],['articles','校园/资讯'],['forms','预约试听']],
 nav:[['home','首页'],['programs','课程项目'],['teachers','师资团队'],['outcomes','学习成果'],['articles','资讯动态'],['about','关于我们'],['contact','预约试听']],
 home:['programs','teachers','outcomes','services','articles','cta'],
 detailNoun:'课程',
 variants:[
  ['成长友好','education-friendly','centered','warm','亲和、清晰、适合家庭决策'],
  ['名校权威','professional-trust','authority','light','学校、升学与成果导向'],
  ['年轻课堂','creative-studio','portfolio','brand','适合艺术、编程与兴趣教育'],
  ['课程转化','local-conversion','conversion','brand','试听、课程与咨询转化优先'],
  ['学院杂志','home-editorial','editorial','light','校园内容和学术气质'],
  ['国际教育','tech-minimal','split','dark','国际化、双语与现代校园']
 ]},
'food-brand':{
 label:'食品/品牌型',
 modules:[['products','产品/菜单'],['cases','品牌场景'],['stores','门店/渠道'],['services','品牌故事'],['articles','食材/资讯'],['forms','合作咨询']],
 nav:[['home','首页'],['products','产品中心'],['services','品牌故事'],['stores','门店渠道'],['cases','品牌场景'],['articles','品牌资讯'],['contact','合作联系']],
 home:['products','story','cases','stores','articles','cta'],
 detailNoun:'产品',
 variants:[
  ['自然食材','food-brand','editorial','warm','食材、产地与自然质感'],
  ['潮流品牌','creative-studio','portfolio','brand','年轻消费品牌视觉'],
  ['精品餐饮','legal-luxury','fullscreen','dark','高端餐饮与精品品牌'],
  ['零售转化','ecommerce-modern','commerce','light','产品与购买决策优先'],
  ['产地故事','home-editorial','editorial','light','强调产地、工艺和品牌故事'],
  ['连锁招商','local-conversion','conversion','brand','门店、加盟与渠道合作']
 ]},
'ecommerce-showcase':{
 label:'商品零售型',
 modules:[['products','商品中心'],['collections','系列分类'],['cases','使用场景'],['stores','门店/渠道'],['articles','品牌内容'],['forms','采购咨询']],
 nav:[['home','首页'],['products','商品中心'],['collections','系列分类'],['cases','使用场景'],['services','品牌故事'],['articles','品牌内容'],['contact','联系我们']],
 home:['products','collections','cases','reviews','articles','cta'],
 detailNoun:'商品',
 variants:[
  ['现代商城','ecommerce-modern','commerce','light','商品陈列清晰、转化直接'],
  ['品牌生活','home-editorial','editorial','warm','生活方式与品牌感'],
  ['黑色旗舰','legal-luxury','fullscreen','dark','高端商品与旗舰店质感'],
  ['年轻潮流','creative-studio','portfolio','brand','潮流、时尚与新品展示'],
  ['参数选购','tech-minimal','catalog','light','适合数码、家电与功能型商品'],
  ['内容种草','home-editorial','centered','light','评测、场景与内容驱动购买']
 ]},
'environment-energy':{
 label:'能源环保型',
 modules:[['solutions','解决方案'],['products','设备/产品'],['projects','工程项目'],['applications','应用场景'],['certifications','资质能力'],['forms','项目咨询']],
 nav:[['home','首页'],['solutions','解决方案'],['products','产品设备'],['projects','工程项目'],['applications','应用场景'],['certifications','企业实力'],['contact','项目咨询']],
 home:['solutions','products','projects','technology','certifications','cta'],
 detailNoun:'解决方案',
 variants:[
  ['绿色科技','tech-minimal','split','light','清洁、科技、可持续'],
  ['工程能源','industrial-pro','authority','dark','大型项目与工程能力'],
  ['数据可信','medical-clean','authority','light','监测指标与专业数据'],
  ['方案获客','local-conversion','conversion','brand','行业痛点与项目咨询'],
  ['未来能源','creative-studio','fullscreen','dark','新能源与未来技术感'],
  ['国际绿色','home-editorial','editorial','light','ESG、可持续与国际品牌']
 ]},
'home-living':{
 label:'家居生活型',
 modules:[['products','产品/方案'],['cases','空间案例'],['services','定制服务'],['materials','材质工艺'],['articles','家居内容'],['forms','预约咨询']],
 nav:[['home','首页'],['products','产品方案'],['cases','空间案例'],['services','定制服务'],['materials','材质工艺'],['articles','家居灵感'],['contact','预约咨询']],
 home:['cases','products','services','materials','articles','cta'],
 detailNoun:'产品/方案',
 variants:[
  ['自然家居','home-editorial','portfolio','warm','自然、舒适、生活方式'],
  ['现代极简','tech-minimal','split','light','简洁、理性、现代住宅'],
  ['高端家居','legal-luxury','fullscreen','dark','高端定制与大宅质感'],
  ['产品目录','ecommerce-modern','catalog','light','系列、参数与选购清晰'],
  ['设计杂志','home-editorial','editorial','light','空间案例与设计灵感'],
  ['年轻焕新','creative-studio','portfolio','brand','年轻、色彩与个性空间']
 ]},
'hospitality-experience':{
 label:'餐饮酒店体验型',
 modules:[['services','服务/房型'],['products','菜单/套餐'],['cases','空间体验'],['stores','门店/地址'],['articles','品牌故事'],['forms','预订咨询']],
 nav:[['home','首页'],['services','服务体验'],['products','菜单套餐'],['cases','空间环境'],['stores','门店地址'],['articles','品牌故事'],['contact','预订咨询']],
 home:['hero','services','products','cases','stores','cta'],
 detailNoun:'服务/套餐',
 variants:[
  ['度假沉浸','travel-immersive','fullscreen','warm','图片沉浸与体验感'],
  ['精品奢华','legal-luxury','fullscreen','dark','精品酒店与高端餐厅'],
  ['自然生活','home-editorial','editorial','warm','民宿、咖啡与生活方式'],
  ['连锁转化','local-conversion','conversion','brand','门店、预订和团购入口'],
  ['城市现代','tech-minimal','split','light','现代商务与城市空间'],
  ['文化主题','creative-studio','portfolio','brand','文化、主题与独特体验']
 ]},
'logistics-map':{
 label:'物流供应链型',
 modules:[['services','物流服务'],['network','服务网络'],['cases','运输案例'],['certifications','运力资质'],['articles','行业资讯'],['forms','在线询价']],
 nav:[['home','首页'],['services','物流服务'],['network','服务网络'],['cases','运输案例'],['certifications','运力资质'],['articles','行业资讯'],['contact','在线询价']],
 home:['services','network','capacity','cases','certifications','cta'],
 detailNoun:'物流服务',
 variants:[
  ['物流地图','industrial-pro','split','light','线路网络与服务区域优先'],
  ['运力重装','industrial-pro','fullscreen','dark','车队、仓储与运输能力'],
  ['国际货代','tech-minimal','authority','light','港口、国际网络与 B2B'],
  ['在线询价','local-conversion','conversion','brand','询价与业务转化优先'],
  ['供应链科技','tech-minimal','catalog','dark','数字化供应链与系统能力'],
  ['专业可信','professional-trust','authority','light','资质、安全与交付稳定']
 ]},
'automotive-showroom':{
 label:'汽车展示型',
 modules:[['vehicles','车型/车辆'],['services','购车/租赁服务'],['stores','门店网络'],['cases','客户场景'],['articles','汽车资讯'],['forms','预约试驾']],
 nav:[['home','首页'],['vehicles','车型中心'],['services','服务方案'],['stores','门店网络'],['cases','用车场景'],['articles','汽车资讯'],['contact','预约体验']],
 home:['vehicles','services','features','stores','articles','cta'],
 detailNoun:'车型',
 variants:[
  ['旗舰展厅','legal-luxury','fullscreen','dark','大图车型和旗舰质感'],
  ['科技座舱','tech-minimal','split','dark','新能源与智能汽车'],
  ['购车转化','local-conversion','conversion','brand','报价、试驾与门店转化'],
  ['车型目录','ecommerce-modern','catalog','light','车型、参数与对比清晰'],
  ['生活方式','home-editorial','editorial','light','场景、旅行与车主生活'],
  ['运动先锋','creative-studio','portfolio','brand','性能、个性与年轻视觉']
 ]},
'local-services':{
 label:'本地服务型',
 modules:[['services','服务项目'],['pricing','价格套餐'],['cases','服务案例'],['locations','服务区域'],['reviews','客户评价'],['forms','预约下单']],
 nav:[['home','首页'],['services','服务项目'],['pricing','价格套餐'],['cases','服务案例'],['locations','服务区域'],['reviews','客户评价'],['contact','立即预约']],
 home:['services','pricing','cases','locations','reviews','cta'],
 detailNoun:'服务',
 variants:[
  ['本地直达','local-conversion','conversion','brand','电话、预约、区域直接转化'],
  ['口碑清爽','education-friendly','centered','light','客户评价与服务透明'],
  ['专业标准','professional-trust','authority','light','流程、标准与团队能力'],
  ['价格透明','ecommerce-modern','catalog','light','套餐和价格清晰'],
  ['社区温暖','home-editorial','editorial','warm','亲和、可信、本地生活'],
  ['年轻服务','creative-studio','portfolio','brand','年轻品牌与移动端优先']
 ]},
'real-estate-listings':{
 label:'房地产项目型',
 modules:[['properties','楼盘/项目'],['cases','户型/案例'],['services','置业服务'],['team','置业顾问'],['articles','楼市资讯'],['forms','预约看房']],
 nav:[['home','首页'],['properties','楼盘项目'],['cases','户型展示'],['services','置业服务'],['team','置业顾问'],['articles','楼市资讯'],['contact','预约看房']],
 home:['properties','cases','services','location','team','cta'],
 detailNoun:'楼盘',
 variants:[
  ['高端地产','realestate-premium','fullscreen','dark','高端住宅和品牌项目'],
  ['项目目录','ecommerce-modern','catalog','light','楼盘、户型、价格信息清晰'],
  ['城市生活','home-editorial','editorial','warm','生活方式与区域价值'],
  ['获客看房','local-conversion','conversion','brand','预约看房与线索转化'],
  ['投资理性','professional-trust','authority','light','数据、区域与资产逻辑'],
  ['国际置业','tech-minimal','split','dark','跨区域和国际客户导向']
 ]},
'creative-agency':{
 label:'创意机构型',
 modules:[['cases','作品案例'],['services','创意服务'],['team','创意团队'],['process','合作流程'],['articles','观点灵感'],['forms','项目咨询']],
 nav:[['home','首页'],['cases','作品案例'],['services','创意服务'],['team','创意团队'],['process','合作流程'],['articles','观点灵感'],['contact','项目咨询']],
 home:['cases','services','team','process','articles','cta'],
 detailNoun:'作品',
 variants:[
  ['作品先锋','creative-studio','portfolio','brand','强视觉与作品优先'],
  ['极简工作室','tech-minimal','split','light','极简、克制、品牌感'],
  ['黑色创意','creative-studio','fullscreen','dark','影视、广告与视觉冲击'],
  ['杂志编辑','home-editorial','editorial','light','内容叙事与作品文章'],
  ['品牌咨询','professional-trust','authority','light','策略、案例与商业结果'],
  ['获客机构','local-conversion','conversion','brand','服务套餐与项目咨询']
 ]}
};

const INDUSTRY_SPECIAL_OVERRIDES={
 renovation:{
  preserve_existing:true,
  variants:[
   {slug:'renovation-modern',name:'筑家 DESIGN',display_name:'装修 · 现代极简',preview:'./renovation-modern.html',style:'home-editorial',layout:'portfolio',accent:'#a16207',headline:'大留白、原木、真实案例主导的现代极简全案装修官网。'},
   {slug:'renovation-natural',name:'木舍空间',display_name:'装修 · 自然小清新',preview:'./renovation-natural.html',style:'education-friendly',layout:'editorial',accent:'#73895c',headline:'明亮、自然、年轻家庭导向的小清新住宅设计官网。'},
   {slug:'renovation-luxury',name:'MAISON AUREA',display_name:'装修 · 欧式轻奢',preview:'./renovation-luxury.html',style:'legal-luxury',layout:'fullscreen',accent:'#c39a5b',headline:'黑金、香槟金与高端私宅摄影构成的欧式轻奢模板。'},
   {slug:'renovation-retro',name:'拾光设计事务所',display_name:'装修 · 复古事务所',preview:'./renovation-retro.html',style:'creative-studio',layout:'editorial',accent:'#9b3f2f',headline:'杂志感、不对称排版和复古材质语言的设计事务所模板。'},
   {slug:'renovation-oriental',name:'观堂空间',display_name:'装修 · 东方现代',preview:'./renovation-oriental.html',style:'realestate-premium',layout:'authority',accent:'#8b6b4c',headline:'留白、木石、宋式审美与现代东方空间秩序的高端模板。'},
   {slug:'renovation-urban',name:'构域空间',display_name:'装修 · 都市工业',preview:'./renovation-urban.html',style:'tech-minimal',layout:'commerce',accent:'#2563eb',headline:'黑白灰、金属、微水泥与智能系统构成的都市先锋装修模板。'}
  ]
 }
};

const INDUSTRY_MODULE_FIELDS={
 products:[['model','型号/系列','text'],['category','产品分类','text'],['specs','核心参数','richtext'],['applications','适用场景','tags'],['price_mode','价格/询价方式','text']],
 services:[['audience','适用客户','text'],['scope','服务范围','richtext'],['period','服务周期','text'],['deliverables','交付内容','richtext'],['price_mode','价格方式','text']],
 solutions:[['pain_point','客户问题','richtext'],['industry','适用行业','tags'],['architecture','方案架构','richtext'],['result','预期效果','richtext']],
 applications:[['scene','应用场景','text'],['requirements','关键需求','richtext'],['recommended','推荐方案','relation']],
 cases:[['client_type','客户类型','text'],['project_scale','项目规模','text'],['challenge','项目难点','richtext'],['solution','解决方案','richtext'],['result','项目结果','richtext']],
 downloads:[['file_type','资料类型','text'],['version','版本','text'],['file','下载文件','media']],
 certifications:[['cert_no','证书/资质编号','text'],['issuer','颁发机构','text'],['validity','有效期','text'],['certificate','证书图片','media']],
 pricing:[['price','价格/起步价','text'],['includes','包含内容','richtext'],['audience','适用客户','text']],
 process:[['step','流程阶段','text'],['duration','预计时间','text'],['deliverable','阶段交付','text']],
 routes:[['days','行程天数','number'],['destinations','目的地','tags'],['price','参考价格','text'],['departure','出发信息','text'],['suitable','适合人群','text']],
 destinations:[['region','地区','text'],['season','推荐季节','text'],['highlights','目的地亮点','richtext']],
 programs:[['duration','课程周期','text'],['audience','适合对象','text'],['schedule','上课方式','text'],['tuition','费用','text'],['outcomes','学习目标','richtext']],
 teachers:[['title','职位/职称','text'],['years','从业年限','number'],['specialties','擅长方向','tags'],['bio','个人简介','richtext']],
 outcomes:[['type','成果类型','text'],['result','成果说明','richtext'],['year','年份','number']],
 doctors:[['title','职称','text'],['specialty','擅长领域','tags'],['years','从业年限','number'],['qualification','执业资质','text'],['schedule','出诊/服务时间','text']],
 facilities:[['type','设施类型','text'],['brand','品牌/型号','text'],['purpose','用途','richtext']],
 stores:[['address','地址','text'],['phone','联系电话','text'],['hours','营业时间','text'],['services','服务范围','tags']],
 collections:[['positioning','系列定位','text'],['audience','目标人群','text'],['features','系列特点','richtext']],
 projects:[['location','项目地点','text'],['scale','项目规模','text'],['period','项目周期','text'],['result','项目成果','richtext']],
 network:[['region','覆盖区域','text'],['routes','主要线路','tags'],['capacity','服务能力','text']],
 vehicles:[['model','车型/型号','text'],['price','价格','text'],['power','动力/能源','text'],['range','续航/里程','text'],['configuration','核心配置','richtext']],
 locations:[['region','服务区域','text'],['response','响应时间','text'],['coverage','覆盖说明','richtext']],
 reviews:[['customer','客户称呼','text'],['score','评分','number'],['content','评价内容','richtext']],
 properties:[['address','项目地址','text'],['area','面积区间','text'],['layout','户型','tags'],['price','参考价格','text'],['status','销售/交付状态','text']],
 team:[['title','职位','text'],['years','从业年限','number'],['specialties','擅长领域','tags'],['bio','个人简介','richtext']],
 materials:[['brand','品牌/来源','text'],['grade','等级/标准','text'],['craft','工艺说明','richtext']]
};

const VARIANT_ACCENTS=['#2563eb','#111827','#16a34a','#7c3aed','#ea580c','#0f766e'];
function makeBrand(industry,variantIndex){
 const short=String(industry.name).replace(/行业|公司|服务|设备|系统|中心|事务所|培训|装饰/g,'').slice(0,6);
 const suffix=['优选','智造','臻选','新域','领航','创见'][variantIndex]||'品牌';
 return short+suffix;
}
function resolveIndustryBlueprint(industry){
 const deep=window.getDeepIndustryProfile?window.getDeepIndustryProfile(industry):null;
 if(deep){
  const matrix=window.DEEP_VISUAL_MATRIX||[
   ['tech-minimal','split','light'],['legal-luxury','fullscreen','dark'],['local-conversion','conversion','brand'],
   ['home-editorial','editorial','light'],['ecommerce-modern','catalog','light'],['creative-studio','portfolio','dark']
  ];
  return {
   label:deep.label,detailNoun:deep.detailNoun,cta:deep.cta,modules:deep.modules,nav:deep.nav,home:deep.home,
   keywords:deep.keywords||[],metrics:deep.metrics||[],
   variants:(deep.variantLabels||[]).map((direction,i)=>[direction,matrix[i][0],matrix[i][1],matrix[i][2],(deep.keywords||[]).slice(0,3).join(' · ')])
  };
 }
 return INDUSTRY_FAMILY_BLUEPRINTS[industry.family]||INDUSTRY_FAMILY_BLUEPRINTS['professional-trust'];
}
function buildIndustryTemplates(industries){
 const out=[];
 for(const industry of industries){
  const special=INDUSTRY_SPECIAL_OVERRIDES[industry.slug];
  const deep=window.getDeepIndustryProfile?window.getDeepIndustryProfile(industry):null;
  if(special?.variants){
   special.variants.forEach((v,i)=>out.push({...industry,...v,industry_slug:industry.slug,industry_name:industry.name,variant_index:i,family:industry.family,category:industry.category,direction:v.display_name?.split(' · ')[1]||('设计方向 '+(i+1)),keywords:deep?.keywords||[],metrics:deep?.metrics||[],cta:deep?.cta||'立即咨询',tags:[v.display_name,industry.name,'成品模板',...(deep?.keywords||[])]}));
   continue;
  }
  const bp=resolveIndustryBlueprint(industry);
  bp.variants.forEach((v,i)=>{
   const [direction,style,layout,tone,position]=v;
   const slug=industry.slug+'-v'+(i+1);
   out.push({
    ...industry,
    slug,
    industry_slug:industry.slug,
    industry_name:industry.name,
    source_industry_slug:industry.slug,
    variant_index:i,
    name:makeBrand(industry,i),
    display_name:industry.name+' · '+direction,
    direction,
    style,layout,tone,
    accent:VARIANT_ACCENTS[(i+industry.slug.length)%VARIANT_ACCENTS.length],
    headline:direction+'方向。围绕'+industry.name+'的'+(bp.keywords||[]).join('、')+'等真实业务场景设计，包含完整列表、详情、案例/内容与'+(bp.cta||'咨询')+'页面。',
    preview:'./industry-template.html?industry='+encodeURIComponent(industry.slug)+'&variant='+i+'&page=home',
    tags:[industry.name,direction,bp.label,position,...(bp.keywords||[])],
    blueprint_label:bp.label,
    keywords:bp.keywords||[],
    metrics:bp.metrics||[],
    cta:bp.cta||'立即咨询'
   });
  });
 }
 return out;
}
function buildIndustryManifest(industry){
 const bp=resolveIndustryBlueprint(industry);
 const modules=['pages','media','articles','forms',...bp.modules.map(x=>x[0])];
 const content_types={};
 bp.modules.forEach(([id,label])=>{if(INDUSTRY_MODULE_FIELDS[id])content_types[id]={label,fields:INDUSTRY_MODULE_FIELDS[id].map(([key,fieldLabel,type])=>({key,label:fieldLabel,type}))}});
 return {
  version:'2.1.0',industry:industry.slug,industry_name:industry.name,pack_name:industry.name+'行业结构包',
  family:industry.family,profile_label:bp.label,required_modules:[...new Set(modules)],
  content_types,
  backend_menu:[
   {group:'网站内容',items:bp.modules.filter(x=>!['forms'].includes(x[0])).map(x=>({module:x[0],label:x[1]}))},
   {group:'客户线索',items:[{module:'forms',label:bp.cta||'咨询/预约线索'}]}
  ],
  nav:bp.nav.map(x=>({page:x[0],label:x[1]})),
  home_blocks:bp.home,
  detail_noun:bp.detailNoun,
  keywords:bp.keywords||[],
  metrics:bp.metrics||[],
  install_modes:{
   theme_only:{label:'仅安装模板',apply_modules:false,apply_menu:false,apply_fields:false,import_demo:false},
   structure:{label:'模板 + 行业结构',apply_modules:true,apply_menu:true,apply_fields:true,import_demo:false},
   demo:{label:'模板 + 完整演示数据',apply_modules:true,apply_menu:true,apply_fields:true,import_demo:true,backup_before:true}
  },
  uninstall_policy:{theme_remove_keeps_data:true,module_disable_keeps_data:true,drop_data_requires_explicit_confirmation:true}
 };
}
function getIndustryBlueprint(industry){return resolveIndustryBlueprint(industry)}
window.INDUSTRY_FAMILY_BLUEPRINTS=INDUSTRY_FAMILY_BLUEPRINTS;
window.resolveIndustryBlueprint=resolveIndustryBlueprint;
window.buildIndustryTemplates=buildIndustryTemplates;
window.buildIndustryManifest=buildIndustryManifest;
window.getIndustryBlueprint=getIndustryBlueprint;
