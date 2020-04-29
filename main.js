
TweenMax.to(".bgloader", 4, {
        delay: 6.6,
        top: "-110%",
        ease: Expo.easeInOut
});

//Ring Animations 
let t1 = new TimelineMax();
t1.from('.ringOne' ,4 ,{
    delay:0.4,
    opacity:0,
    y:40,
    ease:Expo.easeInOut
}).from('.ringTwo' , 4 ,{
    delay:0.9,
    opacity:0,
    y:40,
    ease:Expo.easeInOut
},"-=5").to('.ringOne' , 4 ,{
    delay:0.4,
    x:40,
    ease:Expo.easeInOut
}).to('.ringTwo' , 4 , {
    delay:0.9,
    x:40,
    ease:Expo.easeInOut
},"-=5")


// navbar Animations 
TweenMax.from('.navbar .left' , 3, {
    delay:8.4,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
});
TweenMax.from('.navbar .right' , 3 , {
    delay:8.5,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
});

//paragroh and buttons animations 
TweenMax.from('p' , 4 , {
    delay:8.7,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
});
TweenMax.from('.btn-left' , 4 , {
    delay:8.8,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})
TweenMax.from('.btn' , 4 , {
    delay:8.9,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
});


//animation Footer 
TweenMax.from('.footer' , 4 , {
    delay:9,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})

// Animation header 

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 10000 + 50 * i;
    }
  });
