const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});

// function mousefollower(e) {
//      window.addEventListener("mousemove", function (dets) {
//         console.log(dets.clientX, dets.clientY);
//        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px ,${dets.clientY}px)`
//     })
// }
// mousefollower()

function firstpageanime() {
    var tl=gsap.timeline();

    tl.from('#navbar', {
        y:'-10',
        opacity:0,
        duration:1,
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

// const details = document.getElementsByClassName("details");
// const micro = document.getElementsByClassName("micro");


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



// const contact = document.querySelector('.contact'); // Your navigation link

// function scrollbottom(){
//     contact.addEventListener('click', (event) => {
//   event.preventDefault();
//   const targetId = event.target.getAttribute('#bottom'); // Get the target section ID
//   scroller.scrollTo(document.querySelector(targetId), { // Scroll to the target
//     duration: 800, // Optional: Set animation duration
//     easing: 'easeInOutCubic'
//   });
// });}
// scrollbottom();


const time= document.querySelector('.time');
const year= document.querySelector('.year');

function updateTime() {
    const c = '\u00A9';
    const now = new Date();
    const hours = now.getHours().toLocaleString().padStart(2, '0');
    const minutes = now.getMinutes().toLocaleString().padStart(2, '0');
    const years = now.getFullYear().toString().padStart(2, '0' )
    time.textContent = `${hours}:${minutes} IST`;
    year.textContent = `${years}${c}`;
}

setInterval(updateTime, 1000);

updateTime();
