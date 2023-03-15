//Initial References
let image = document.querySelector(".product__images img");
let lens = document.querySelector(".product__images .lens");

let imageWidth = image.offsetWidth;
let imageHeight = image.offsetHeight;

image.addEventListener("mousemove", (e) => {
  var posX = ((e.pageX - image.offsetLeft) / imageWidth).toFixed(4) * 100;
  var posY = ((e.pageY - image.offsetTop) / imageHeight).toFixed(4) * 100;
  lens.style.backgroundPosition = posX + "%" + posY + "%";
});
