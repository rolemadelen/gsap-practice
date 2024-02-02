const boxes = document.querySelectorAll('.item');

// basic animation
gsap.to(boxes[0], {
  duration: 2,
  x: 'random([250, 350, 500])',
  borderRadius: 100,
  rotation: 360,
});

// trigger
gsap.to(boxes[1], {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,
  scrollTrigger: {
    trigger: boxes[1], // starting point
  },
});

// toggleActions
gsap.to(boxes[2], {
  duration: 2,
  x: 'random(250, 500)',
  borderRadius: 100,
  rotation: 360,

  scrollTrigger: {
    trigger: boxes[2],
    toggleActions: 'play pause reverse none',
  },
});

// start, end
gsap.to(boxes[3], {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,

  scrollTrigger: {
    trigger: boxes[3],
    start: 'top 50%',
    end: 'bottom 20%',
    toggleActions: 'play pause reverse pause',
    markers: false,
  },
});

// scrub
gsap.to(boxes[4], {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,

  scrollTrigger: {
    trigger: boxes[4],
    start: 'top 50%',
    end: 'bottom 20%',
    scrub: 0.5, // true, 1, 2, ...
    markers: false,
  },
});

// pin
gsap.to(boxes[5], {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,

  scrollTrigger: {
    trigger: boxes[5],
    start: 'top 50%',
    end: 'top 100px',
    pin: true,
    scrub: true,
    markers: false,
  },
});

// toggle class
gsap.to(boxes[6], {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,

  scrollTrigger: {
    trigger: boxes[6],
    start: 'top center',
    end: 'bottom top',
    scrub: true,
    markers: false,
    toggleClass: 'active',
    id: 'box7',
  },
});

// callback
gsap.to(boxes[7], {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,

  scrollTrigger: {
    trigger: boxes[7],
    start: 'top center',
    end: 'bottom 30%',
    scrub: true,
    markers: false,
    // onEnter
    // onLeave
    // onEnterBack
    // onLeaveBack
    // onUpdate
    onToggle: (self) => {
      console.log('onToggle', self.isActive);
    },
  },
});
