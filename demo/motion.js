function initMotion(){
  const root=document.documentElement;
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){root.classList.add('reduce-motion');document.querySelectorAll('[data-motion],.reveal,.stagger>*').forEach(el=>el.classList.add('is-visible'));return}
  root.classList.add('motion-ready');
  const targets=[...document.querySelectorAll('[data-motion],.reveal,.stagger>*')];
  const revealNow=el=>el.classList.add('is-visible');
  if(!('IntersectionObserver' in window)){targets.forEach(revealNow);return}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){revealNow(e.target);io.unobserve(e.target)}
  }),{threshold:0.03,rootMargin:'120px 0px 120px 0px'});
  targets.forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top<window.innerHeight+160&&r.bottom>-120)revealNow(el);else io.observe(el);
  });
  setTimeout(()=>targets.forEach(revealNow),1800);

  document.querySelectorAll('[data-counter]').forEach(el=>{
    const target=Number(el.dataset.counter||0),suffix=el.dataset.suffix||'';
    const run=()=>{const start=performance.now(),dur=900;function tick(t){const p=Math.min(1,(t-start)/dur);el.textContent=Math.round(target*(1-Math.pow(1-p,3)))+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)};
    if(!('IntersectionObserver' in window)){run();return}
    const io2=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){run();io2.unobserve(e.target)}}),{threshold:.15,rootMargin:'80px 0px'});
    io2.observe(el);
  });
}
window.initMotion=initMotion;
