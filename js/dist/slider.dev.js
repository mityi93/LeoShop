"use strict";

var slides = document.querySelectorAll('.slide'),
    item = document.querySelectorAll('.items'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    dot = document.querySelectorAll('.dots');
var index = 0;

var activeSlide = function activeSlide(n) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      slide = _step.value;
      slide.classList.remove('active');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  slides[n].classList.add('active');
};

var activeItem = function activeItem(q) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = item[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      items = _step2.value;
      items.classList.remove('active');
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  item[q].classList.add('active');
};

var activeDot = function activeDot(n) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = dot[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      dots = _step3.value;
      // удаляет class active
      dots.classList.remove('active');
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  dot[n].classList.add('active');
};

var CurrentSlide = function CurrentSlide(ind) {
  activeItem(ind);
  activeDot(ind);
};

var nextSlide = function nextSlide() {
  if (index == slides.length - 1) {
    //если index на последней точке то ему присваевается начальное значение index=0 и выполняется функция activeSlide и activeDot
    index = 0;
    activeSlide(index);
  } else {
    //если index не на последней точке то он делает 1 шаг вперед
    index++;
    activeSlide(index);
    clearInterval(interval);
  }
}; //назад


var prevSlide = function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
};

dot.forEach(function (items, indexDot) {
  items.addEventListener('click', function () {
    index = indexDot;
    CurrentSlide(index);
  });
});
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
var interval = setInterval(nextSlide, 6000);