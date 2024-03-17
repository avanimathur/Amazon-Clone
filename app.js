const right=document.querySelector(".right-btn");
right.addEventListener("click",function(event){
   const conent=document.querySelector(".slide-carousel");
   conent.scrollLeft+=1100;
   event.preventDefault();
})

const left=document.querySelector(".left-btn");
left.addEventListener("click",function(event){
   const conent=document.querySelector(".slide-carousel");
   conent.scrollLeft-=1100;
   event.preventDefault();
})

const toTop=document.querySelector(".to-top");

window.addEventListener("scroll", ()=>{
   if(window.pageYOffset>100) {
      toTop.classList.add("active");
   } else {
      toTop.classList.remove("active");
   }
})