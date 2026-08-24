(function () {
  const sprite = document.getElementById('sprite');
  if (!sprite) return;

  const FRAME_TIME = 100; // ms per frame
  const frame = (n) => `assets/wave-${n}.png`;

  let timer = null;
  let loopFrame = 2; // alternates between 2 and 3 while hovering

  function clearTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function loopStep() {
    sprite.src = frame(loopFrame);
    loopFrame = loopFrame === 2 ? 3 : 2;
    timer = setTimeout(loopStep, FRAME_TIME);
  }

  function playSequence(frames, onComplete) {
    clearTimer();
    let i = 0;
    function step() {
      sprite.src = frame(frames[i]);
      i++;
      if (i < frames.length) {
        timer = setTimeout(step, FRAME_TIME);
      } else if (onComplete) {
        onComplete();
      }
    }
    step();
  }

  sprite.closest('.sprite-wrap').addEventListener('mouseenter', () => {
    playSequence([1, 2, 3], () => {
      loopFrame = 2;
      loopStep();
    });
  });

  sprite.closest('.sprite-wrap').addEventListener('mouseleave', () => {
    clearTimer();
    playSequence([1, 0]);
  });
})();