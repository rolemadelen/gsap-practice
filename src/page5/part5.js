const texts = document.querySelectorAll('.container-text');

gsap.utils.toArray(texts).forEach((item) => {
  gsap.to(item, {
    yPercent: -300,
    ease: 'none',
    duration: 0.5,
    scrollTrigger: {
      trigger: item,
      start: 'top bottom',
      scrub: 0.5,
    },
  });
});

gsap.utils.toArray('.container .label').forEach((item, i) => {
  gsap.to(item, {
    xPercent: (i & 1) == 0 ? -80 : 80,
    ease: 'none',
    duration: 0.5,
    scrollTrigger: {
      trigger: item,
      start: 'top bottom',
      scrub: 0.5,
    },
  });
});
