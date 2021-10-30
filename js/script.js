const navId1 = document.getElementById("navigation-1"),
  navId2 = document.getElementById("navigation-2"),
  navId3 = document.getElementById("navigation-3")
f1 = document.getElementsByClassName("fenetre-1"),
  f2 = document.getElementsByClassName("fenetre-2"),
  f3 = document.getElementsByClassName("fenetre-3");
/* ToggleBtnId = document.getElementById("toggle_btn"),
navMenuLink = document.getElementsByClassName("nav_menu_link"),
CloseBtnId = document.getElementById("close_btn") */

navId1.addEventListener("click", () => {
  navId1.classList.add("active");
  navId2.classList.remove("active");
  navId3.classList.remove("active");
  for (var i = 0; i < f1.length; i++) {
    f1[i].className = "fenetre-1 display-block";
  }
  for (var i = 0; i < f2.length; i++) {
    f2[i].className = "fenetre-2 display-none";
  }
  for (var i = 0; i < f3.length; i++) {
    f3[i].className = "fenetre-3 display-none";
  }

  //navMenuLink.classList.add("showBlackColor");
});
navId2.addEventListener("click", () => {
  navId1.classList.remove("active");
  navId2.classList.add("active");
  navId3.classList.remove("active");

  for (var i = 0; i < f1.length; i++) {
    f1[i].className = "fenetre-1 display-none";
  }
  for (var i = 0; i < f2.length; i++) {
    f2[i].className = "fenetre-2 display-block";
  }
  for (var i = 0; i < f3.length; i++) {
    f3[i].className = "fenetre-3 display-none";
  }

  //navMenuLink.classList.add("showBlackColor");
});
navId3.addEventListener("click", () => {
  navId1.classList.remove("active");
  navId2.classList.remove("active");
  navId3.classList.add("active");

  for (var i = 0; i < f1.length; i++) {
    f1[i].className = "fenetre-1 display-none";
  }
  for (var i = 0; i < f2.length; i++) {
    f2[i].className = "fenetre-2 display-none";
  }
  for (var i = 0; i < f3.length; i++) {
    f3[i].className = "fenetre-3 display-block";
  }
  //navMenuLink.classList.add("showBlackColor");
});
// ==== SHOW MENU ==== //
// ToggleBtnId.addEventListener("click", () => {
//   navId.classList.add("show");
//   for (var i = 0; i < navMenuLink.length; i++) {
//     navMenuLink[i].className += " showBlackColor";
//   }
//   //navMenuLink.classList.add("showBlackColor");
// });

// // ==== HIDE MENU ==== //
// CloseBtnId.addEventListener("click", () => {
//   navId.classList.remove("show");
//   for (var i = 0; i < navMenuLink.length; i++) {
//     navMenuLink[i].className += "nav_menu_link";
//   }
// });

// // ==== Animate on Scroll Initialize  ==== //
// AOS.init();

// // ==== GSAP Animations ==== //
// // ==== LOGO  ==== //
// gsap.from(".logo", {
//   opacity: 0,
//   y: -10,
//   delay: 1,
//   duration: 0.3,
// });
// // ==== NAV-MENU ==== //
// gsap.from(".nav_menu_list .nav_menu_item", {
//   opacity: 0,
//   y: -10,
//   delay: 1.4,
//   duration: 0.3,
//   stagger: 0.3
// });
// // ==== TOGGLE BTN ==== //
// gsap.from(".toggle_btn", {
//   opacity: 0,
//   y: -10,
//   delay: 1.4,
//   duration: 0.3
// });
// // ==== MAIN HEADING  ==== //
// gsap.from(".main-heading", {
//   opacity: 0,
//   y: 20,
//   delay: 2.4,
//   duration: 0.3,
// });
// // ==== INFO TEXT ==== //
// gsap.from(".info-text", {
//   opacity: 0,
//   y: 20,
//   delay: 2.8,
//   duration: 0.3,
// });
// // ==== CTA BUTTONS ==== //
// gsap.from(".btn_wrapper", {
//   opacity: 0,
//   y: 20,
//   delay: 2.8,
//   duration: 0.3,
// });
// // ==== TEAM IMAGE ==== //
// gsap.from(".team_img_wrapper img", {
//   opacity: 0,
//   y: 20,
//   delay: 3,
//   duration: 0.3,
// });
