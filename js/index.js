var dob = new Date("05/22/2009");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);

document.getElementById("age").innerHTML = age;

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 180,
    loop: true,
    strings: [
        'I like to code.',
        'I like to watch Anime.',
        'I like to read Manga.',
        'I like to play E-Games.',
        'I like to learn New Things.',
        'I like you too 💖.',
    ],
});

// Navigation
// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateY(0%)') {
        nav.style.transform = 'translateY(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateY(-200%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});
nav.addEventListener('click', () => {
    if (nav.style.transform != 'translateY(0%)') {
        nav.style.transform = 'translateY(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateY(-200%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

// particlesssss
particlesJS("hero", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#000000"
        },
        "shape": {
            "type": "triangle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 10
            },
            "image": {
                "src": "images/pfp8.jpg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": false
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 100,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
const quoteAPI = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=45865&format=jsonp&lang=en&jsonp=?';
const getQuote = () => $.getJSON(quoteAPI, (a) => {
    $("#quote").text(`"${a.quoteText}"`);
    $("#author").text(a.quoteAuthor);
});
$(() => getQuote());
setInterval(getQuote, 9000);
