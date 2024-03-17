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

const toTopButton = document.querySelector('.backtotop');

toTopButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
