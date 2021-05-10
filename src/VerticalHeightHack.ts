// This trick is from here:
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
//
// The page should fit the available viewport exactly

function setCustomVHProperty() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

window.addEventListener("resize", setCustomVHProperty)
setCustomVHProperty()
