// Menú móvil
const menuBtn=document.getElementById('mobile-menu-btn'),mobileMenu=document.getElementById('mobile-menu');
menuBtn.addEventListener('click',()=>{
  mobileMenu.classList.toggle('hidden');mobileMenu.classList.toggle('flex');
  menuBtn.setAttribute('aria-expanded',!mobileMenu.classList.contains('hidden'));
});
mobileMenu.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>{mobileMenu.classList.add('hidden');mobileMenu.classList.remove('flex')}));

// Vista ampliada de las interfaces de los sistemas
const systemPreview=document.getElementById('system-preview');
const systemPreviewTitle=document.getElementById('system-preview-title');
const systemPreviewImage=document.getElementById('system-preview-image');
document.querySelectorAll('[data-system-preview]').forEach(button=>button.addEventListener('click',()=>{
  const card=button.closest('article');
  const image=card?.querySelector('.interface-slot img');
  const title=card?.querySelector('h3')?.textContent?.trim();
  if(!image||!title)return;
  systemPreviewTitle.textContent=title;
  systemPreviewImage.src=image.currentSrc||image.src;
  systemPreviewImage.alt=image.alt;
  systemPreview.showModal();
}));
document.getElementById('system-preview-close').addEventListener('click',()=>systemPreview.close());
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&systemPreview.open)systemPreview.close();
});
systemPreview.addEventListener('click',event=>{
  if(event.target===systemPreview)systemPreview.close();
});

// Enlace activo del menú de escritorio según la sección visible
const navLinks=[...document.querySelectorAll('#desktop-nav a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)navLinks.forEach(l=>{
    const on=l.getAttribute('href')==='#'+e.target.id;
    l.classList.toggle('text-brand-orange',on);l.classList.toggle('text-gray-300',!on);
  });
}),{threshold:.4});
document.querySelectorAll('main section[id]').forEach(s=>io.observe(s));

document.querySelectorAll('[data-quote-service]').forEach(link=>link.addEventListener('click',()=>{
  const message=document.querySelector('#form textarea[name="mensaje"]');
  if(message&&!message.value.trim())message.value=`Quiero cotizar: ${link.dataset.quoteService}.`;
}));

// Formulario -> WhatsApp (cambia el número: código de país + número, sin + ni espacios)
const WA_NUMBER='50242902870';
document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();const f=e.target,m=document.getElementById('form-msg');
  if(!f.checkValidity()){m.textContent='Completa todos los campos con datos válidos.';return}
  const t=`Hola, soy ${f.nombre.value} (${f.correo.value}). ${f.mensaje.value}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`,'_blank','noopener');
  m.textContent='Abriendo WhatsApp…';
});
