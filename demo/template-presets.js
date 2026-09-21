const TEMPLATE_STYLES=[
  'tech-minimal','industrial-pro','legal-luxury','travel-immersive','home-editorial','medical-clean',
  'education-friendly','food-brand','ecommerce-modern','local-conversion','realestate-premium','creative-studio'
];
const TEMPLATE_LAYOUTS=['split','fullscreen','centered','editorial','catalog','conversion','authority','portfolio','commerce','property'];
const TEMPLATE_MOTIONS=['fade-up','fade-left','zoom-reveal','mask-reveal','hover-lift','image-zoom','arrow-shift','counter-up','stagger','parallax-light'];

const FAMILY_DESIGN_MAP={
  'corporate-tech':{styles:['tech-minimal','creative-studio','industrial-pro'],layouts:['centered','split','portfolio','conversion']},
  'technical-spec':{styles:['industrial-pro','tech-minimal','medical-clean'],layouts:['catalog','split','centered']},
  'industrial-catalog':{styles:['industrial-pro','tech-minimal','realestate-premium'],layouts:['catalog','split','property']},
  'professional-trust':{styles:['legal-luxury','medical-clean','home-editorial'],layouts:['authority','editorial','split']},
  'service-conversion':{styles:['local-conversion','tech-minimal','legal-luxury'],layouts:['conversion','split','centered']},
  'portfolio-editorial':{styles:['home-editorial','creative-studio','realestate-premium'],layouts:['editorial','portfolio','fullscreen']},
  'destination-explorer':{styles:['travel-immersive','creative-studio','home-editorial'],layouts:['fullscreen','editorial','portfolio']},
  'healthcare-trust':{styles:['medical-clean','tech-minimal','home-editorial'],layouts:['authority','split','centered']},
  'education-programs':{styles:['education-friendly','tech-minimal','creative-studio'],layouts:['conversion','centered','split']},
  'food-brand':{styles:['food-brand','creative-studio','travel-immersive'],layouts:['fullscreen','editorial','commerce']},
  'ecommerce-showcase':{styles:['ecommerce-modern','creative-studio','home-editorial'],layouts:['commerce','portfolio','centered']},
  'environment-energy':{styles:['tech-minimal','travel-immersive','industrial-pro'],layouts:['split','catalog','fullscreen']},
  'home-living':{styles:['home-editorial','realestate-premium','creative-studio'],layouts:['editorial','fullscreen','portfolio']},
  'hospitality-experience':{styles:['travel-immersive','food-brand','realestate-premium'],layouts:['fullscreen','editorial','property']},
  'logistics-map':{styles:['industrial-pro','tech-minimal','local-conversion'],layouts:['catalog','split','conversion']},
  'automotive-showroom':{styles:['realestate-premium','industrial-pro','creative-studio'],layouts:['fullscreen','catalog','portfolio']},
  'local-services':{styles:['local-conversion','education-friendly','tech-minimal'],layouts:['conversion','split','centered']},
  'real-estate-listings':{styles:['realestate-premium','home-editorial','legal-luxury'],layouts:['property','fullscreen','editorial']},
  'creative-agency':{styles:['creative-studio','ecommerce-modern','home-editorial'],layouts:['portfolio','fullscreen','editorial']}
};

function hashString(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function getTemplatePreset(industry,index=0){
  const h=hashString(industry.slug+'|'+industry.name);
  const map=FAMILY_DESIGN_MAP[industry.family]||{styles:TEMPLATE_STYLES,layouts:TEMPLATE_LAYOUTS};
  const style=map.styles[(h+index)%map.styles.length];
  const layout=map.layouts[(Math.floor(h/7)+index*3)%map.layouts.length];
  const motion=TEMPLATE_MOTIONS[(Math.floor(h/13)+index)%TEMPLATE_MOTIONS.length];
  const heroVariant=['photo','mesh','editorial','framed','overlay','minimal'][(h+index*5)%6];
  const cardVariant=['soft','outline','sharp','glass','image-first'][(Math.floor(h/5)+index)%5];
  const navVariant=['light','glass','dark','line'][(Math.floor(h/11)+index)%4];
  const density=['airy','balanced','compact'][(Math.floor(h/17)+index)%3];
  const imageShape=['landscape','portrait','wide','square','offset'][(Math.floor(h/19)+index)%5];
  const radius=[4,8,14,20][(h+index)%4];
  const hueShift=(h%17)-8;
  return {style,layout,motion,heroVariant,cardVariant,navVariant,density,imageShape,radius,hueShift,
    fingerprint:[style,layout,motion,heroVariant,cardVariant,navVariant,density,imageShape,radius,hueShift].join('|')};
}
window.getTemplatePreset=getTemplatePreset;
window.TEMPLATE_STYLES=TEMPLATE_STYLES;
window.TEMPLATE_LAYOUTS=TEMPLATE_LAYOUTS;
window.TEMPLATE_MOTIONS=TEMPLATE_MOTIONS;
