import React from "react";
import { NavLink } from "react-router-dom";
import Particles from 'react-particles-js';

const BgParticles = () => {
  return (
    <Particles
    style={{
        width: "auto",
        height: "auto",
        background: "#C33C3C",
      }}
    params={{
        "particles": {
            "number": {
              "value": 500,
              "density": {
                "enable": true,
                "value_area": 4890.406785639845
              }
            },
            "color": {
              "value": "#000000"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.7856719098241062,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 15,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 500,
              "color": "#e8e1e1",
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 0.5,
              "direction": "top",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              },
              "onresize": {
                "enable": true,
                "density_auto": true,
                "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 0.5
                }
              },
              "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 10
              },
              "repulse": {
                "distance": 200,
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
	}} />
  );
};

export default BgParticles;
