const templatePreviewCache=new Map();
function previewHash(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function previewEsc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[m]));}
function stylePalette(style,accent){
  const dark=['creative-studio','industrial-pro','legal-luxury','realestate-premium'].includes(style);
  if(dark)return {bg:'#0b1020',panel:'#121827',text:'#f8fafc',muted:'#aab4c4',accent};
  if(style==='home-editorial')return {bg:'#eee7df',panel:'#faf8f4',text:'#2c2722',muted:'#7c7064',accent};
  if(style==='medical-clean')return {bg:'#eef9fb',panel:'#ffffff',text:'#153842',muted:'#67818a',accent};
  if(style==='education-friendly')return {bg:'#fffaf0',panel:'#ffffff',text:'#22304b',muted:'#6f7890',accent};
  if(style==='food-brand')return {bg:'#fff7ed',panel:'#ffffff',text:'#4a2619',muted:'#886d61',accent};
  return {bg:'#f7f9fc',panel:'#ffffff',text:'#111827',muted:'#667085',accent};
}
function makeTemplatePreview(industry,preset){
  const key=[industry.slug,preset.style,preset.layout,preset.navVariant,industry.accent].join('|');
  if(templatePreviewCache.has(key))return templatePreviewCache.get(key);
  const p=stylePalette(preset.style,industry.accent||'#f97316'),h=previewHash(key);
  const navDark=['dark','stacked'].includes(preset.navVariant)||['creative-studio','industrial-pro','legal-luxury','realestate-premium'].includes(preset.style);
  const navBg=navDark?'#0b1020':p.panel,navText=navDark?'#e5e7eb':p.text;
  const heroImage=['#1d4ed8','#0f766e','#7c3aed','#b45309','#be123c','#0369a1'][h%6];
  const photo2=['#0f766e','#334155','#92400e','#7c2d12','#166534','#4c1d95'][(h>>3)%6];
  const name=previewEsc(industry.name);
  let hero='';
  if(preset.layout==='fullscreen'){
    hero='<rect x="0" y="52" width="640" height="230" fill="'+heroImage+'"/><rect x="0" y="52" width="640" height="230" fill="url(#shade)"/><text x="42" y="132" font-size="31" font-weight="800" fill="#fff">'+name+'</text><text x="42" y="160" font-size="12" fill="#ffffffd0">行业官网 · 多页面模板</text><rect x="42" y="184" width="88" height="28" rx="14" fill="'+p.accent+'"/>';
  }else if(preset.layout==='editorial'||preset.layout==='portfolio'){
    hero='<rect x="32" y="78" width="240" height="190" rx="4" fill="'+heroImage+'"/><rect x="292" y="78" width="316" height="190" rx="4" fill="'+p.panel+'"/><text x="320" y="128" font-size="28" font-weight="800" fill="'+p.text+'">'+name+'</text><rect x="320" y="150" width="210" height="8" rx="4" fill="'+p.muted+'" opacity=".5"/><rect x="320" y="172" width="165" height="8" rx="4" fill="'+p.muted+'" opacity=".35"/><rect x="320" y="205" width="92" height="30" rx="4" fill="'+p.accent+'"/>';
  }else if(preset.layout==='centered'){
    hero='<text x="320" y="118" text-anchor="middle" font-size="31" font-weight="800" fill="'+p.text+'">'+name+'</text><rect x="210" y="142" width="220" height="8" rx="4" fill="'+p.muted+'" opacity=".4"/><rect x="268" y="170" width="104" height="30" rx="15" fill="'+p.accent+'"/><rect x="70" y="218" width="500" height="92" rx="14" fill="'+heroImage+'"/>';
  }else{
    hero='<text x="42" y="118" font-size="29" font-weight="800" fill="'+p.text+'">'+name+'</text><rect x="42" y="142" width="210" height="8" rx="4" fill="'+p.muted+'" opacity=".45"/><rect x="42" y="166" width="156" height="8" rx="4" fill="'+p.muted+'" opacity=".3"/><rect x="42" y="202" width="96" height="30" rx="6" fill="'+p.accent+'"/><rect x="330" y="82" width="268" height="178" rx="14" fill="'+heroImage+'"/>';
  }
  const cards=[0,1,2,3].map((i)=>{
    const x=32+i*146,y=340;
    const fill=i%2?photo2:heroImage;
    return '<rect x="'+x+'" y="'+y+'" width="132" height="128" rx="10" fill="'+p.panel+'"/><rect x="'+x+'" y="'+y+'" width="132" height="72" rx="10" fill="'+fill+'"/><rect x="'+(x+12)+'" y="'+(y+86)+'" width="88" height="7" rx="3.5" fill="'+p.text+'" opacity=".78"/><rect x="'+(x+12)+'" y="'+(y+104)+'" width="105" height="6" rx="3" fill="'+p.muted+'" opacity=".28"/>';
  }).join('');
  const svg='<svg xmlns="http://www.w3.org/2000/svg" width="640" height="500" viewBox="0 0 640 500"><defs><linearGradient id="shade" x1="0" x2="1"><stop stop-color="#000" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity=".08"/></linearGradient></defs><rect width="640" height="500" fill="'+p.bg+'"/><rect x="0" y="0" width="640" height="52" fill="'+navBg+'"/><circle cx="30" cy="26" r="12" fill="'+p.accent+'"/><rect x="52" y="20" width="82" height="10" rx="5" fill="'+navText+'" opacity=".85"/><rect x="390" y="22" width="42" height="7" rx="3.5" fill="'+navText+'" opacity=".52"/><rect x="446" y="22" width="42" height="7" rx="3.5" fill="'+navText+'" opacity=".52"/><rect x="502" y="22" width="42" height="7" rx="3.5" fill="'+navText+'" opacity=".52"/>'+hero+cards+'<rect x="32" y="486" width="576" height="1" fill="'+p.muted+'" opacity=".15"/></svg>';
  const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
  templatePreviewCache.set(key,url);return url;
}
window.makeTemplatePreview=makeTemplatePreview;
