/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
      // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
      imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
  });
};

// Function to animate the first grid
// const animateFirstGrid = () => {
//   const grid = document.querySelector('[data-grid-first]');
//   const gridImages = grid.querySelectorAll('.grid__img');
//
//   gsap.timeline({
//     defaults: {
//       ease: 'sine'
//     },
//     scrollTrigger: {
//       trigger: grid,
//       start: '-30% 55%',
//       end: '120% 80%',
//       // pin: grid.parentNode,
//       scrub: true,
//       // pinSpacing: false,
//       markers: true,
//     }
//   })
//   .from(gridImages, {
//     stagger: 0.07,
//     y: () => gsap.utils.random(window.innerHeight, window.innerHeight * 1.8)
//   })
//   // text content
//   .from(grid.parentNode.querySelector('.content__title'), {
//     duration: 1.2,
//     ease: 'power4',
//     yPercent: 180,
//     autoAlpha: 0
//   }, 0.8);
// };

const animateSecondGrid = () => {
  const grid = document.querySelector('[data-grid-second]');
  const gridImages = grid.querySelectorAll('.grid__img');
  const middleIndex = Math.floor(gridImages.length / 2);

  gsap.timeline({
    defaults: {
      ease: 'power3'
    },
    scrollTrigger: {
      trigger: grid,
      start: '-35% center',
      end: '120% 80%',
      pinSpacing: false,
      // start: 'center center',
      // end: '+=250%',
      // pin: grid.parentNode,
      scrub: 0.5,
      markers: true,
    }
  })
  .from(gridImages, {
    stagger: {
      amount: 0.3,
      from: 'center'
    },
    y: window.innerHeight,
    transformOrigin: '50% 0%',
    rotation: pos => {
      const distanceFromCenter = Math.abs(pos - middleIndex);
      return pos < middleIndex ? distanceFromCenter * 3 : distanceFromCenter * -3;
    },
  })
  // text content
  .from(grid.querySelectorAll('.grid__item'), {
    stagger: {
      amount: 0.3,
      from: 'center'
    },
    yPercent: 100,
    autoAlpha: 0
  }, 0);
};

// Main initialization function
const init = () => {
  // Animate the header (frame)
  // animateFrame();

  // Call animations for each grid based on their data attributes
  // animateFirstGrid();
  animateSecondGrid();
  // animateThirdGrid();
  // animateFourthGrid();
  // animateFourthV2Grid();
  // animateFifthGrid();
  // animateSixthGrid();
  // animateSeventhGrid();
  // animateEighthGrid();
  // animateNinthGrid();
};
// Preload images and initialize animations
preloadImages('.grid__img').then(() => {
  document.body.classList.remove('loading'); // Remove the loading class from the body
  init();
  window.scrollTo(0, 0);
});
