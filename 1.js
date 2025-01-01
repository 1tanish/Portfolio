const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});

function mousefollower(e) {
     window.addEventListener("mousemove", function (dets) {
        console.log(dets.clientX, dets.clientY);
       document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px ,${dets.clientY}px)`
    })
}
mousefollower()



function firstpageanime() {
    var tl=gsap.timeline();

    tl.from('#navbar', {
        y:'-10',
        opacity:0,
        duration:.2,
        ease:Expo
    })
    .to('.boxelem',{
        y:0,
        ease:Expo.easeInOut,
        duration:.5,
        stagger:.2
    })
}
firstpageanime()




const details = document.getElementsByClassName("details");
const micro = document.getElementsByClassName("micro");


// const isHover = e => e.parentElement.querySelector(':hover') === e;
// document.addEventListener('mousemove', function checkHover() {
//   const hovered = isHover(micro);
//   if (hovered !== checkHover.hovered) {
//     console.log(hovered ? 'hovered' : 'not hovered');
//     checkHover.hovered = hovered;
//   }
// });
// Convert projex HTMLCollection to an array and add event listeners to each element
// Array.from(micro).forEach((proj) => {
//   proj.addEventListener("click", (e) => {
//     Array.from(details).forEach((detail) => {
//       if ((detail.style.display === "none" || detail.style.display === "")) {
//         detail.style.display = "block"; // Show the details
//       } else {
//         detail.style.display = "none"; // Hide the details
//       }
//     });
//   });
// });
