const slides=document.querySelectorAll(".slide"),dots=document.querySelectorAll(".dots i");let current=0;
function show(i){slides.forEach(x=>x.classList.remove("active"));dots.forEach(x=>x.classList.remove("on"));current=i;slides[i].classList.add("active");dots[i].classList.add("on")}
setInterval(()=>show((current+1)%slides.length),1000);
function toggleMenu(){document.getElementById("navLinks").classList.toggle("show")}
