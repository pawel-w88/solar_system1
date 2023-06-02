// function calculateWeight() {
//     var weightInput = document.getElementById("weight");
//     var planetSelect = document.getElementById("planet");
//     var resultDiv = document.getElementById("result");

//     var weight = parseFloat(weightInput.value);
//     var gravity = parseFloat(planetSelect.value);

//     if (isNaN(weight) || isNaN(gravity)) {
//       resultDiv.textContent = "Please enter valid input.";
//     } else {
//       var weightOnPlanet = weight * gravity;
//       resultDiv.textContent = "The object weighs approximately " + weightOnPlanet.toFixed(2) + " kg on this planet.";
//     }
//   }

//   function changePlanetImage() {
//     var planetSelect = document.getElementById("planet");
//     var planetImage = document.getElementById("planet-image");
//     var planetValue = planetSelect.value;

//     switch (planetValue) {
//       case "0.38":
//         planetImage.src = "mars.png";
//         break;
//       case "0.91":
//         planetImage.src = "venus.png";
//         break;
//       case "0.38":
//         planetImage.src = "mars.png";
//         break;
//       case "2.34":
//         planetImage.src = "jupiter.png";
//         break;
//       case "0.93":
//         planetImage.src = "saturn.png";
//         break;
//       case "0.92":
//         planetImage.src = "uranus.png";
//         break;
//       case "1.12":
//         planetImage.src = "neptune.png";
//         break;
//       default:
//         planetImage.src = "mercury.jpg";
//         break;
//     }
//   }