const result = document.querySelector(".description");
const planetElement = document.querySelector("#planetSelect");
const inputElement = document.querySelector("#mass");
const imgElement = document.querySelector("#planetImage");
imgElement.innerHTML = new Image();

const calculateButton = document.querySelector("#calculateButton");
calculateButton.addEventListener("click", () => {
  const selectedPlanet = planetElement.value;
  const mass = parseFloat(inputElement.value);

  if (isNaN(mass)) {
    result.textContent = "Invalid input";
    return;
  }

  if (selectedPlanet === "Earth") {
    result.textContent = (mass * 1 * 9.80665).toFixed(2) + ' N';
    imgElement.src = "images/earth.png";
  } else if (selectedPlanet === "Jupiter") {
    result.textContent = (mass * 2.528 * 9.80665).toFixed(2) + ' N';
    imgElement.src = "images/jupiter.png";
  } else if (selectedPlanet === "Mars") {
    result.textContent = (mass * 0.377 * 9.80665).toFixed(2) + ' N';
    imgElement.src = "images/mars.png";
  } else if (selectedPlanet === "Mercury") {
    result.textContent = (mass * 0.378 * 9.80665).toFixed(2) + ' N';
    imgElement.src = "images/mercury.png";
  } else if (selectedPlanet === "Moon") {
    result.textContent = (mass * 0.166 * 9.80665).toFixed(2) + ' N';
    imgElement.src = "images/moon.png";
  } else if (selectedPlanet === "Neptune") {
    result.textContent = (mass * 1.125 * 9.80665).toFixed(2) + ' N';
    imgElement.src = "images/neptune.png";
  } else if (selectedPlanet === "Saturn") {
    result.textContent = (mass * 1.064 * 9.80665).toFixed(2) + ' N';
    imgElement.src = "images/saturn.png";
  } else if (selectedPlanet === "Uranus") {
    result.textContent = (mass * 0.889 * 9.80665).toFixed(2) + ' N';
    imgElement.src = "images/uranus.png";
  } else if (selectedPlanet === "Venus") {
    result.textContent = (mass * 0.907 * 9.80665).toFixed(2) + ' N';
    imgElement.src = "images/venus.png";
  } else {
    result.textContent = "Please select a planet";
  }
});

// CHAT GPT code
// const gravitationalAcceleration = {
//   Earth: 1,
//   Jupiter: 2.528,
//   Mars: 0.377,
//   Mercury: 0.378,
//   Moon: 0.166,
//   Neptune: 1.125,
//   Saturn: 1.064,
//   Uranus: 0.889,
//   Venus: 0.907
// };
// calculateButton.addEventListener("click", () => {
//   const mass = parseFloat(inputElement.value);

//   if (isNaN(mass)) {
//     result.textContent = "Invalid input";
//     return;
//   }

//   const selectedPlanet = planetElement.value;

//   if (selectedPlanet === "") {
//     result.textContent = "Please select a planet";
//     return;
//   }

//   const gravitationalAccel = gravitationalAcceleration[selectedPlanet];
//   result.textContent = (mass * gravitationalAccel * 9.80665).toFixed(2) + " N";

//   const imageName = selectedPlanet.toLowerCase();
//   imgElement.src = `images/${imageName}.png`;
// });
// imgElement.src = "images/earth.png";
// imgElement.alt = "Earth";
