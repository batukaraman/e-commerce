const slider = document.querySelector('.shopping-card__products');
const controls = [...document.querySelectorAll('.shopping-card__control')];

controls[1].addEventListener('click', () => {
  slider.scrollTop  += slider.offsetHeight + 8 + 6;
  let interval1 = setInterval(() => {
    if (slider.offsetHeight + slider.scrollTop >= slider.scrollHeight) {
      controls[1].classList.add("disabled");
      clearInterval(interval1);
    }
  }, 10);
  let interval2 = setInterval(() => {
    if (slider.scrollTop != 0) {
      controls[0].classList.remove("disabled");
      clearInterval(interval2);
    }
  }, 10);
});

controls[0].addEventListener('click', () => {
    slider.scrollTop -= slider.offsetHeight + 8 + 8;
    let interval1 = setInterval(() => {
      if (slider.offsetHeight + slider.scrollTop <= slider.scrollHeight) {
        controls[1].classList.remove("disabled");
        clearInterval(interval1);
      }
    }, 10);
    let interval2 = setInterval(() => {
      if (slider.scrollTop == 0) {
        controls[0].classList.add("disabled");
        clearInterval(interval2);
      }
    }, 10);
});
