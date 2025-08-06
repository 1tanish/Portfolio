var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const widthd = () => {
  if (width > 1024) {
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }
};
widthd();

function firstpageanime() {
  var tl = gsap.timeline();
  tl.from("#navbar", {
    // y:'-10',
    transform: "scale(50)",
    opacity: 1,
    delay: 0.5,
    duration: 1,
    ease: Expo,
  }).to(".boxelem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 0.5,
    stagger: 0.2,
  });
}
firstpageanime();

const time = document.querySelector(".time");
const year = document.querySelector(".year");

function updateTime() {
  const c = "\u00A9";
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const years = now.getFullYear().toString().padStart(2, "0");
  time.textContent = `${hours}:${minutes} IST`;
  year.textContent = `${years}${c}`;
}

setInterval(updateTime, 1000);

updateTime();
