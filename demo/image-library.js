const IMAGE_POOLS={
  tech:[
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=84'
  ],
  industrial:[
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=84'
  ],
  professional:[
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=84'
  ],
  travel:[
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=84'
  ],
  home:[
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=84'
  ],
  medical:[
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1800&q=84'
  ],
  education:[
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=84'
  ],
  food:[
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1800&q=84'
  ],
  commerce:[
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=84'
  ],
  local:[
    'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=84'
  ],
  property:[
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=84'
  ],
  creative:[
    'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1800&q=84'
  ],
  energy:[
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1800&q=84'
  ],
  logistics:[
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1800&q=84'
  ],
  auto:[
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1800&q=84',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1800&q=84'
  ]
};
const FAMILY_IMAGE_MAP={
  'corporate-tech':'tech','technical-spec':'industrial','industrial-catalog':'industrial','professional-trust':'professional',
  'service-conversion':'professional','portfolio-editorial':'creative','destination-explorer':'travel','healthcare-trust':'medical',
  'education-programs':'education','food-brand':'food','ecommerce-showcase':'commerce','environment-energy':'energy',
  'home-living':'home','hospitality-experience':'travel','logistics-map':'logistics','automotive-showroom':'auto',
  'local-services':'local','real-estate-listings':'property','creative-agency':'creative'
};
function imageHash(s){let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))>>>0;return h}
function getIndustryImages(industry){
  const key=FAMILY_IMAGE_MAP[industry.family]||'professional';
  const pool=IMAGE_POOLS[key]||IMAGE_POOLS.professional;
  const h=imageHash(industry.slug);
  const rotate=(n)=>pool[(h+n)%pool.length];
  return {hero:rotate(0),products:[rotate(1),rotate(2),rotate(3)],cases:[rotate(2),rotate(3),rotate(1)],news:[rotate(3),rotate(1),rotate(2)],about:rotate(1),contact:rotate(2)};
}
function fallbackImageData(label='MAKEFU',accent='#f97316'){
  const safe=String(label).replace(/[&<>"]/g,'');
  const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="'+accent+'"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="980" cy="130" r="220" fill="#ffffff12"/><circle cx="180" cy="650" r="300" fill="#ffffff0d"/><text x="70" y="650" font-size="54" font-family="Arial,sans-serif" font-weight="800" fill="white">'+safe+'</text><text x="72" y="700" font-size="20" font-family="Arial,sans-serif" fill="#ffffffb0">MAKEFU CMS INDUSTRY VISUAL</text></svg>';
  return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
}
function imageTag(url,alt,cls='',accent='#f97316'){
  const fb=fallbackImageData(alt,accent).replace(/'/g,'%27');
  return '<img class="'+cls+'" src="'+url+'" alt="'+String(alt).replace(/"/g,'')+'" loading="lazy" onerror="this.onerror=null;this.src=\''+fb+'\'">';
}
window.getIndustryImages=getIndustryImages;
window.fallbackImageData=fallbackImageData;
window.imageTag=imageTag;
