function initMotion(){
  const targets=document.querySelectorAll('[data-motion],.reveal,.stagger>*');
  if(!('IntersectionObserver' in window)){targets.forEach(el=>el.classList.add('is-visible'));return}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
  targets.forEach(el=>io.observe(el));
  document.querySelectorAll('[data-counter]').forEach(el=>{
    const io2=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const target=Number(el.dataset.counter||0);const suffix=el.dataset.suffix||'';const start=performance.now(),dur=900;function tick(t){const p=Math.min(1,(t-start)/dur);el.textContent=Math.round(target*(1-Math.pow(1-p,3)))+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);io2.unobserve(el)}),{threshold:.4});io2.observe(el)
  });
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reduce-motion')}
}
window.initMotion=initMotion;
