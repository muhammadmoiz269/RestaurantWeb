
var logo=document.getElementById("logo");
var eat=document.getElementById("eat");
var home=document.getElementById("home");
var about=document.getElementById("about");
var chef=document.getElementById("chef");
var menu=document.getElementById("menu");
var call=document.getElementById("call");
var contact=document.getElementById("contact");
var page1menu=document.querySelector(".page1-menu")

console.log(menu)
window.addEventListener("scroll",function(e)
{
    if(window.scrollY>538)
    {
        logo.style.color="red";
        eat.style.color="red";
        home.style.color="red";
        about.style.color="red";
        chef.style.color="red";
        contact.style.color="red";
        menu.style.color="red";
        call.style.color="red";
    
       
        

        
    }
    else{
        call.style.color="white";
        logo.style.color="white";
        eat.style.color="white";
        home.style.color="white";
        about.style.color="white";
        chef.style.color="white";
        contact.style.color="white";
        menu.style.color="white";
    }
})