const boxes = document.querySelectorAll('.item');

const ani1 = gsap.timeline();
ani1
  .to(boxes[0], { rotation: 720, scale: 0, borderRadius: 200 })
  .to(boxes[0], { rotation: 0, scale: 1, borderRadius: 20 });

ScrollTrigger.create({
  animation: ani1,
  trigger: '#container1',
  start: 'top top',
  end: '+=2000',
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: false,
});

const ani2 = gsap.timeline();
ani2
  .from(boxes[1], { y: -100, autoAlpha: 0, borderRadius: 200 })
  .from(boxes[2], { y: -100, autoAlpha: 0, borderRadius: 200 })
  .from(boxes[3], { y: -100, autoAlpha: 0, borderRadius: 200 });

ScrollTrigger.create({
  animation: ani2,
  trigger: '#container2',
  start: 'top top',
  end: '+=2000',
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: false,
});

const ani3 = gsap.timeline();
ani3.from('#container3 .item', {
  autoAlpha: 0,
  y: -100,
  ease: 'back.out(4)',
  stagger: {
    amount: 3,
    from: 'random',
  },
});

ScrollTrigger.create({
  animation: ani3,
  trigger: '#container3',
  start: 'top top',
  end: '+=3000',
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1,
});

const ani4 = gsap.timeline();
ani4.from('#container4 .item', {
  autoAlpha: 0,
  scale: 5,
  width: '100vw',
  height: '100vh',
});

ScrollTrigger.create({
  animation: ani4,
  trigger: '#container4',
  start: 'top top',
  end: '+=3000',
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1,
});

const ani5 = gsap.timeline();
ani5
  .to('#container5 .text1', { xPercent: 300 }, 'text')
  .to('#container5 .text2', { xPercent: -300 }, 'text')
  .to('#container5 .text3', { xPercent: 300 }, 'text')
  .to('#container5 .text4', { xPercent: -300 }, 'text');

ScrollTrigger.create({
  animation: ani5,
  trigger: '#container5',
  start: 'top top',
  end: '+=3000',
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1,
});

const ani6 = gsap.timeline();
ani6
  .to('#container6 .text', { scale: 60, duration: 2, autoAlpha: 1 })
  .to('#container6 .text', { autoAlpha: 0 });

ScrollTrigger.create({
  animation: ani6,
  trigger: '#container6',
  start: 'top top',
  end: '+=3000',
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: false,
});

const ani7 = gsap.timeline();
ani7
  .from('#container7 .text1', { autoAlpha: 0, duration: 0.5, y: 50 }, '+=1')
  .from('#container7 .text2', { autoAlpha: 0, duration: 0.5, y: 50 }, '+=1')
  .from('#container7 .text3', { autoAlpha: 0, duration: 0.5, y: 50 }, '+=1')
  .from('#container7 .text4', { autoAlpha: 0, duration: 0.5, y: 50 }, '+=1')
  .from('#container7 .text5', { autoAlpha: 0, duration: 0.5, y: 50 }, '+=1')
  .from('#container7 .text6', { autoAlpha: 0, duration: 0.5, y: 50 }, '+=1')
  .from('#container7 .text7', { autoAlpha: 0, duration: 0.5, y: 50 }, '+=1');

ScrollTrigger.create({
  animation: ani7,
  trigger: '#container7',
  start: 'top top',
  end: '+=6000',
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1,
});

const ani8 = gsap.timeline();
ani8
  .from('#container8 .text1', { x: innerWidth * 1 })
  .from('#container8 .text2', { x: innerWidth * -1 })
  .from('#container8 .text3', { x: innerWidth * 1 })
  .from('#container8 .image1', {
    x: innerWidth * 1,
    rotation: 360,
    scale: 1.5,
  });

ScrollTrigger.create({
  animation: ani8,
  trigger: '#container8',
  start: 'top top',
  end: '+=4000',
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1,
});
