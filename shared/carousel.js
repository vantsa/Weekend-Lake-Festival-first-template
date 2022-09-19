const state = {};
const carouselList = document.querySelector('.carousel_list');
const carouselItems = document.querySelectorAll('.carousel_item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel_item');

  if (!isItem || newActive.classList.contains('carousel_item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  const prev2 = elems.find((elem) => elem.dataset.pos == -3);
  const next2 = elems.find((elem) => elem.dataset.pos == 3);
  const prev3 = elems.find((elem) => elem.dataset.pos == -4);
  const next3 = elems.find((elem) => elem.dataset.pos == 4);
  const prev4 = elems.find((elem) => elem.dataset.pos == -5);
  const next4 = elems.find((elem) => elem.dataset.pos == 5);
  // const prev5 = elems.find((elem) => elem.dataset.pos == -6);
  // const next5 = elems.find((elem) => elem.dataset.pos == 6);
  
  current.classList.remove('carousel_item_active');
  
  [current, prev, next, first, last, prev2, next2, prev3, next3, prev4, next4].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 5) {
    return -current
  } 
  return diff;
}