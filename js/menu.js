
document.addEventListener('DOMContentLoaded',()=>{
 const b=document.querySelector('.menu-toggle');
 const n=document.querySelector('.nav-links');
 if(b&&n){b.onclick=()=>n.classList.toggle('open');}
});
