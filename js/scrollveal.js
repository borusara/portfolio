const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    origin: "bottom",
    duration: 1e3,
    desktop: !0,
    mobile: !0
};
ScrollReveal().reveal(".hero-title", {
    ...defaultProps,
    delay: 500,
    origin: window.innerWidth > 768 ? "left" : "bottom"
}), ScrollReveal().reveal(".name", {
    ...defaultProps,
    distance: "0px",
    delay: 700,
    scale: 0
}), ScrollReveal().reveal(".hero-cta", {
    ...defaultProps,
    delay: 1200,
    origin: window.innerWidth > 768 ? "left" : "bottom"
}), ScrollReveal().reveal(".scroll-down-link", {
    ...defaultProps,
    delay: 2e3,
    origin: "top"
}), ScrollReveal().reveal(".section-title", {
    ...defaultProps,
    delay: 400,
    distance: "0px"
}), ScrollReveal().reveal(".about-wrapper__image", {
    ...defaultProps,
    delay: 800
}), ScrollReveal().reveal(".about-wrapper__info", {
    ...defaultProps,
    delay: 1200,
    distance: "50px",
    origin: window.innerWidth > 768 ? "left" : "top"
}), ScrollReveal().reveal(".project-wrapper__text", {
    ...defaultProps,
    delay: 600,
    origin: window.innerWidth > 768 ? "left" : "bottom"
}), ScrollReveal().reveal(".project-wrapper__image", {
    ...defaultProps,
    delay: 600,
    scale: .9,
    origin: window.innerWidth > 768 ? "right" : "bottom"
}), ScrollReveal().reveal(".contact-wrapper", {
    ...defaultProps,
    delay: 600
}), ScrollReveal().reveal(".fa", {
    ...defaultProps,
    delay: 500,
    interval: 100
});