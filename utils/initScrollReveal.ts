// @ts-nocheck
// ScrollReveal doesn't ship TypeScript declarations

export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 500,
      origin: "left",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 1000,
      origin: "left",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 1000,
      origin: "left",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 500,
      origin: "left",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 1000,
      origin: "right",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 800,
      origin: "bottom",
    },
  },
];

export async function initScrollReveal() {
  const ScrollReveal = (await import("scrollreveal")).default;
  const sr = ScrollReveal();

  // Determine mobile origin at runtime
  const isMobile = window.innerWidth <= 768;

  targetElements.forEach(({ element, animation }) => {
    const origin =
      isMobile &&
      animation.origin !== "bottom" &&
      animation.origin !== "top"
        ? "bottom"
        : animation.origin;

    sr.reveal(element, {
      ...defaultProps,
      ...animation,
      origin,
    });
  });
}
