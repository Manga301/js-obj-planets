import "./styles.css";

const solarSystem = document.getElementById("solarSystem");
const planetsObj = [
  {
    name: "Mercury",
    moons: 0,
    image: "./images/mercury.png"
  },
  {
    name: "Venus",
    moons: 0,
    image: "./images/venus.png"
  },
  {
    name: "Earth",
    moons: 1,
    image: "./images/earth.png"
  },
  {
    name: "Mars",
    moons: 2,
    image: "./images/mars.png"
  },
  {
    name: "Jupiter",
    moons: 67,
    image: "./images/jupiter.png"
  },
  {
    name: "Saturn",
    moons: 62,
    image: "./images/saturn.png"
  },
  {
    name: "Uranus",
    moons: 27,
    image: "./images/uranus.png"
  },
  {
    name: "Neptune",
    moons: 14,
    image: "./images/neptune.png"
  }
];

// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

// Stretch goals:
// - 1: Make the numbers count up on page load
// - 2: Make the planet names bold.
let planets = "";
let moons = 0;
let message = "";
let totalMoons = 0;

for (let i = 0; i < planetsObj.length; i++) {
  planets = planetsObj[i].name;
  moons = planetsObj[i].moons;
  message += `<div class="planet-el"><img src=${planetsObj[i].image} alt=${planets} class="planet-img"><p><strong>${planets}</strong> has ${moons} moons.</p>`;
  totalMoons += moons;
}

solarSystem.innerHTML = `<h1>There are ${totalMoons} moons in the solar system.</h1>`;
solarSystem.innerHTML += `${message} </div>`;
