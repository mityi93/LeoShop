const slides = document.querySelectorAll('.slide'),
      item = document.querySelectorAll('.items'),
      prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      dot = document.querySelectorAll('.dots');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
      slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeItem = q => {
  for(items of item) {
    items.classList.remove('active');
  }
    item[q].classList.add('active');
}

const activeDot = n => {
  for(dots of dot) {
    // удаляет class active
      dots.classList.remove('active'); 
  }
  dot[n].classList.add('active'); 
}

const CurrentSlide = ind => {
  activeItem (ind);
  activeDot(ind);
}

const nextSlide = () =>{
    if (index == slides.length - 1) { //если index на последней точке то ему присваевается начальное значение index=0 и выполняется функция activeSlide и activeDot
      index = 0;
      activeSlide(index);
    } else { //если index не на последней точке то он делает 1 шаг вперед
      index++;
      activeSlide(index);
      clearInterval(interval);
    }
}
//назад
const prevSlide=()=>{
  if (index==0) {
    index=slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

dot.forEach((items,indexDot) => {
  items.addEventListener('click', ()=> {
    index = indexDot;
    CurrentSlide(index);
  })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval (nextSlide,6000);