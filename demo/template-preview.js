const templatePreviewCache=new Map();
function previewHash(s){let h=2166136261;for(const ch of String(s)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function makeTemplatePreview(industry,preset){
  const key=[industry.slug,industry.industry_slug,industry.variant_index,preset?.style,preset?.layout,industry.accent].join('|');
  if(templatePreviewCache.has(key))return templatePreviewCache.get(key);
  let url='';
  if(typeof window.getIndustryVisuals==='function'){
    const visuals=window.getIndustryVisuals(industry,12);
    const idx=(Number(industry.variant_index??0)+previewHash(key))%Math.max(1,visuals.length);
    url=visuals[idx]||'';
  }
  if(!url&&typeof window.getIndustryImages==='function'){
    const imgs=window.getIndustryImages(industry);
    url=imgs.hero||imgs.about||'';
  }
  if(!url&&typeof window.generatedIndustryVisual==='function'){
    url=window.generatedIndustryVisual(industry.name,industry.accent||'#f97316',Number(industry.variant_index||0));
  }
  if(!url){
    const accent=industry.accent||'#f97316';
    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760"><defs><linearGradient id="g"><stop stop-color="'+accent+'"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>';
    url='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
  }
  templatePreviewCache.set(key,url);
  return url;
}
window.makeTemplatePreview=makeTemplatePreview;
