 const menu = document.querySelector('#menu-icon');
 const navbar= document.querySelector('.navbar');
menu.onclick=() =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll=()=>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active'); 
}

const sr=ScrollReveal({
  distance:'60px',
  duration:2500,
  reset:true
})

sr.reveal('.home-text',{delay:200,origin:'top'})
sr.reveal('.about, .skills ,.contact,.oo,.home-text',{delay:200,origin:'top'})


