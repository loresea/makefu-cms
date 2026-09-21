const logoCache=new Map();
function escapeLogoText(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[m]));}
function logoHash(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function makeIndustryLogoSvg(name,accent='#f97316',family='',mode='light'){
  const text=String(name||'码科服'),h=logoHash(text+'|'+family),shape=h%10;
  const wordColor=mode==='dark'?'#f8fafc':'#0f172a',subColor=mode==='dark'?'#cbd5e1':'#94a3b8';
  const mark=[
    '<path d="M4 12h24l10 10-10 10H4z" fill="'+accent+'"/><circle cx="15" cy="22" r="5" fill="#fff"/>',
    '<rect x="4" y="4" width="36" height="36" rx="11" fill="'+accent+'"/><path d="M12 28l10-16 10 16M16 23h12" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>',
    '<circle cx="22" cy="22" r="19" fill="'+accent+'"/><path d="M12 22h20M22 12v20" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>',
    '<path d="M22 2l18 10v20L22 42 4 32V12z" fill="'+accent+'"/><path d="M13 22h18" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>',
    '<rect x="4" y="8" width="36" height="28" rx="7" fill="'+accent+'"/><circle cx="14" cy="22" r="5" fill="#fff"/><path d="M23 16h10M23 22h10M23 28h7" stroke="#fff" stroke-width="2.2"/>',
    '<path d="M4 34L13 10l9 14 7-10 11 20z" fill="'+accent+'"/><circle cx="29" cy="11" r="4" fill="'+accent+'"/>',
    '<path d="M7 8h30v28H7z" rx="3" fill="'+accent+'"/><path d="M13 29V15h6l5 7 5-7h2v14" fill="none" stroke="#fff" stroke-width="2.4"/>',
    '<circle cx="22" cy="22" r="19" fill="none" stroke="'+accent+'" stroke-width="4"/><path d="M13 27l9-16 9 16" fill="none" stroke="'+accent+'" stroke-width="3"/>',
    '<rect x="5" y="5" width="34" height="34" rx="17" fill="'+accent+'"/><path d="M12 25c5-8 10-10 20-7-4 3-7 8-8 13" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>',
    '<path d="M22 3l7 12 13 2-9 10 2 13-13-6-13 6 2-13-9-10 13-2z" fill="'+accent+'"/><circle cx="22" cy="22" r="5" fill="#fff"/>'
  ][shape];
  const familyText=(family||'industry').replace(/-/g,' ').toUpperCase();
  return '<svg xmlns="http://www.w3.org/2000/svg" width="310" height="48" viewBox="0 0 310 48" role="img" aria-label="'+escapeLogoText(text)+'">'+
    '<g transform="translate(1 1)">'+mark+'</g>'+
    '<text x="54" y="22" font-family="Arial, PingFang SC, Microsoft YaHei, sans-serif" font-size="16.5" font-weight="800" fill="'+wordColor+'">'+escapeLogoText(text)+'</text>'+
    '<text x="54" y="37" font-family="Arial, sans-serif" font-size="8.2" font-weight="700" letter-spacing="1.25" fill="'+subColor+'">MAKEFU · '+escapeLogoText(familyText.slice(0,24))+'</text>'+
  '</svg>';
}
function makeIndustryLogo(name,accent='#f97316',family='',mode='light'){
  const key=[name,accent,family,mode].join('|');if(logoCache.has(key))return logoCache.get(key);
  try{
    const svg=makeIndustryLogoSvg(name,accent,family,mode);
    const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
    logoCache.set(key,url);return url;
  }catch(e){
    const word=mode==='dark'?'#f8fafc':'#0f172a';
    const fallback='<svg xmlns="http://www.w3.org/2000/svg" width="250" height="48"><rect x="4" y="4" width="40" height="40" rx="10" fill="'+accent+'"/><text x="24" y="31" text-anchor="middle" font-family="Arial" font-size="17" font-weight="800" fill="white">M</text><text x="55" y="29" font-family="Arial,PingFang SC,Microsoft YaHei" font-size="16" font-weight="800" fill="'+word+'">'+escapeLogoText(name||'码科服')+'</text></svg>';
    return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(fallback);
  }
}
function industryLogoMarkup(name,accent,family,cls='',mode='light'){
  const n=String(name||'码科服').replace(/"/g,'');
  return '<img class="'+cls+'" src="'+makeIndustryLogo(name,accent,family,mode)+'" alt="'+n+' Logo" onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'logoFallback\',textContent:\''+n.replace(/'/g,'')+'\'}))">';
}
window.makeIndustryLogo=makeIndustryLogo;
window.makeIndustryLogoSvg=makeIndustryLogoSvg;
window.industryLogoMarkup=industryLogoMarkup;
