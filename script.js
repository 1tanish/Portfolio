var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
widthd= () => {if (width > 1024) {
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}};
widthd();

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
firstpageanime();

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
