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

const changeColorNavbar = () => {
    // const darkSections = document.querySelectorAll('[data-theme="Dark"]');
    document.querySelectorAll('[data-theme="Dark"]').forEach((element) => {

        ScrollTrigger.create({
            trigger: element,
            start: 'top 60px',
            end: 'bottom 60px',
            onEnter: (self) => {
                document.querySelectorAll('.nav-link,.navbar-toggler').forEach(function (element) {
                    element.classList.add('text-white');
                });
            },
            onEnterBack: (self) => {
                document.querySelectorAll('.nav-link,.navbar-toggler').forEach(function (element) {
                    element.classList.add('text-white');
                });
            },
            onLeave: (self) => {
                document.querySelectorAll('.nav-link,.navbar-toggler').forEach(function (element) {
                    element.classList.remove('text-white');
                });
            },
            onLeaveBack: (self) => {
                document.querySelectorAll('.nav-link,.navbar-toggler').forEach(function (element) {
                    element.classList.remove('text-white');
                });
            },
        });
    });
}

const animateSecondGrid = () => {
    const grid = document.querySelector('[data-grid-second]');
    const gridImages = grid.querySelectorAll('.grid__img');
    const middleIndex = Math.floor(gridImages.length / 2);

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        // Desktop animations
        "(min-width: 768px)": function () {
            gsap.timeline({
                defaults: {
                    ease: 'power3'
                },
                scrollTrigger: {
                    trigger: grid,
                    start: '-35% center',
                    end: '120% 80%',
                    pinSpacing: false,
                    scrub: 0.5,
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
                .from(grid.querySelectorAll('.grid__caption'), {
                    stagger: {
                        amount: 0.3,
                        from: 'center'
                    },
                    yPercent: 100,
                    autoAlpha: 0
                }, 0);
        },

        // Mobile animations
        "(max-width: 767px)": function () {
            gsap.timeline({
                defaults: {
                    ease: 'power3'
                },
                scrollTrigger: {
                    trigger: grid,
                    start: '-30% center',
                    end: '100% 80%',
                    pinSpacing: false,
                    scrub: 0.5,
                }
            })
                .from(gridImages, {
                    stagger: {
                        amount: 0.2,
                        from: 'center'
                    },
                    y: window.innerHeight * 0.4,  // Reduced y movement for smaller screens
                    transformOrigin: '50% 0%',
                    rotation: pos => {
                        const distanceFromCenter = Math.abs(pos - middleIndex);
                        return pos < middleIndex ? distanceFromCenter * 2 : distanceFromCenter * -2;
                    },
                })
                .from(grid.querySelectorAll('.grid__caption'), {
                    stagger: {
                        amount: 0.2,
                        from: 'center'
                    },
                    yPercent: 100,
                    autoAlpha: 0
                }, 0);
        }
    });
};

// Main initialization function
const init = () => {
    changeColorNavbar();
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

const initSmoothScrolling = () => {
    // Initialize Lenis for smooth scroll effects. Lerp value controls the smoothness.
    const lenis = new Lenis({lerp: 0.15});

    // Sync ScrollTrigger with Lenis' scroll updates.
    lenis.on('scroll', ScrollTrigger.update);

    // Ensure GSAP animations are in sync with Lenis' scroll frame updates.
    gsap.ticker.add(time => {
        lenis.raf(time * 1000); // Convert GSAP's time to milliseconds for Lenis.
    });

    // Turn off GSAP's default lag smoothing to avoid conflicts with Lenis.
    gsap.ticker.lagSmoothing(0);
};


initSmoothScrolling();

// Preload images and initialize animations
preloadImages('.grid__img').then(() => {
    // Activate the smooth scrolling feature.
    document.body.classList.remove('loading'); // Remove the loading class from the body
    init();
    window.scrollTo(0, 0);

});
