window.addEventListener("load", function () {
  //下記particles-js↓のところはHTMLで指定したidと合わせてください
  particlesJS("particles-js", {
    //パーティクルの設定
    particles: {
      number: { value: 72, density: { enable: true, value_area: 400 } },
      color: { value: "#a571d9" },
      shape: {
        type: "star",
        stroke: { width: 1, color: "#e345e6" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 1.6240621041348633,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00d1ff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: {
          distance: 611.3886113886114,
          line_linked: { opacity: 0.6960913660388353 },
        },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
});
