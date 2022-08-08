'use strict'

const thebtn = document.querySelector('#thebtn')
const element = document.querySelector('#clkbtnpls')
var count = 1;
thebtn.addEventListener("click", function(){
    // alert("YOU CLICKED THE BUTTON " + (count++) + " TIMES HOW DARE THOU")
    element.innerHTML="HOW DARE YOU"
    setTimeout(() =>{
        element.innerHTML="anyway HI!!!!!"
    }, 800)

    setTimeout(() =>{
        element.innerHTML="how are you"
    }, 1800)

    setTimeout(() =>{
        element.innerHTML="i hope your good"
    }, 2800)

    setTimeout(() =>{
        element.innerHTML="well bye now"
    }, 3800)

    setTimeout(() =>{
        element.innerHTML="your still here?"
    }, 6800)

    setTimeout(() =>{
        element.innerHTML="well heres my twitch frand"
    }, 7800)

    setTimeout(() =>{
        alert("www.twitch.tv/lizard_loserr")
    }, 8800)
});
