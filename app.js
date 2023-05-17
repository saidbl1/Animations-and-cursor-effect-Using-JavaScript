const cursor_circle = document.querySelector(".cursor-circle"),
  cursor = document.querySelectorAll(".cursor"),
  elements = document.querySelectorAll(".getHover"),
  image_wrap = document.querySelector(".image-wrap");

let timeline = gsap.timeline({
  defaults: { duration: 1, ease: "power3.inOut" },
});

timeline
  .to(".image-wrap", {
    height: "600px",
    backgroundSize: "105%",
    duration: 1.5,
    ease: "power4.inOut",
  })
  .to(
    ".image-wrap",
    {
      height: "350px",
      backgroundPosition: "50% 55%",
      y: "0",
    },
    1.5
  )
  .from(
    ".big-name",
    {
      y: getYDistance(".big-name"),
    },
    1.5
  )
  .from(
    ".hide",
    {
      opacity: "0",
    },
    1.5
  );

function getYDistance(el) {
  return (
    window.innerHeight - document.querySelector(el).getBoundingClientRect().top
  );
}

window.addEventListener("mousemove", (e) => {
  let xPosition = e.clientX;
  let yPosition = e.clientY;

  cursor.forEach((el) => {
    el.style.transform = `translate(calc(-50% + ${xPosition}px), calc( -50% + ${yPosition}px))`;
    el.style.opacity = "1";
  });
});

// mouse gets bigger on hover
elements.forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursor_circle.classList.add("biggerCursor");
  });
  el.addEventListener("mouseout", () => {
    cursor_circle.classList.remove("biggerCursor");
  });
});

image_wrap.addEventListener("mousemove", (e) => {
  let rect = image_wrap.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  let xSpeed = 0.008,
    ySpeed = 0.02;

  let xMoving = x - image_wrap.clientWidth / 2;
  let yMoving = y - image_wrap.clientHeight / 2;

  image_wrap.style.backgroundPosition = `calc(50% + ${
    xMoving * xSpeed
  }px) calc(55% + ${yMoving * ySpeed}px)`;
});

image_wrap.addEventListener("mouseover", () => {
  image_wrap.style.transition = ".2s background-position";
  setTimeout(() => {
    image_wrap.style.transition = "0s background-position";
  }, 200);
});

image_wrap.addEventListener("mouseout", () => {
  image_wrap.style.transition = ".5s background-position";
  image_wrap.style.backgroundPosition = "50% 55%";
});

setTimeout(() => {
  image_wrap.style.pointerEvents = "auto";
}, timeline.endTime() * 1000);

// hide  cursor_circle and cursor_point when mouse enter and leave the page
const cursor_point = document.querySelector(".cursor-point");
document.addEventListener("mouseenter", () => {
  cursor_circle.style.display = "block";
  cursor_point.style.display = "block";
});
document.addEventListener("mouseleave", () => {
  cursor_circle.style.display = "none";
  cursor_point.style.display = "none";
});

// logo change on hover

const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", (event) => {
  event.target.src = "./img/lightGreen.png";
});
logo.addEventListener("mouseout", (event) => {
  event.target.src = "./img/lightBlue.png";
});
