function makeIndustryLogo(name, accent, family){
  const text = String(name || '码科服');
  const color = accent || '#f97316';
  let hash = 0; for (const ch of text + (family||'')) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  const shape = hash % 5;
  const initial = text.slice(0,2);
  const marks = [
    '<path d="M10 10h13l7 7-7 7H10z" fill="'+color+'"/><circle cx="16" cy="17" r="3.2" fill="white"/>',
    '<rect x="8" y="8" width="22" height="22" rx="7" fill="'+color+'"/><path d="M13 22l6-10 6 10" stroke="white" stroke-width="2.2" fill="none"/>',
    '<circle cx="19" cy="19" r="12" fill="'+color+'"/><path d="M12 19h14M19 12v14" stroke="white" stroke-width="2.2"/>',
    '<path d="M19 6l12 7v12l-12 7-12-7V13z" fill="'+color+'"/><path d="M13 19h12" stroke="white" stroke-width="2.2"/>',
    '<rect x="7" y="11" width="24" height="16" rx="4" fill="'+color+'"/><circle cx="14" cy="19" r="3" fill="white"/><path d="M20 15h7M20 20h7" stroke="white" stroke-width="2"/>'
  ];
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="260" height="48" viewBox="0 0 260 48">'+
    '<rect width="260" height="48" rx="8" fill="transparent"/>'+
    '<g transform="translate(2 5)">'+marks[shape]+'</g>'+
    '<text x="47" y="22" font-family="Arial,PingFang SC,Microsoft YaHei,sans-serif" font-size="16" font-weight="800" fill="#0f172a">'+escapeXml(text)+'</text>'+
    '<text x="47" y="37" font-family="Arial,sans-serif" font-size="8.5" letter-spacing="1.7" fill="#94a3b8">MAKEFU INDUSTRY</text>'+
    '</svg>';
  return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
}
function escapeXml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[m]));}
window.makeIndustryLogo = makeIndustryLogo;