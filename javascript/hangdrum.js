function playSound(e) {
  if (e.type === "touchstart") {
    e.stopPropagation();
    let changedTouch = e.changedTouches[0];
    let elem = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    console.log(elem.dataset.key);
    const audio = document.querySelector(`audio[data-key="${elem.dataset.key}"]`);
    const key = document.querySelector(`.key[data-key="${elem.dataset.key}"]`);
    if(!audio) return; // stop the function from running
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing');
  }
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop the function from running
  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add('playing');
};

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
window.addEventListener('touchstart', playSound);