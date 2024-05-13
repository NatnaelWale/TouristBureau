"use strict";

let hikes = [
  {
    id: "H101",
    name: "Birding Loop",
    description:
      "The Birding Loop takes you through cedar forests, open plains, and beautiful spring time creeks.  Along the way, you might see some of out 225 annually recorded bird species, including the beautiful Painted Bunting, the adorable Tufted Titmouse, or even a high-flying Red-Tailed Hawk. The terrain is generally flat and the trail is well marked.",
    scenicImage: "Images/birding_loop_1.png",
    trailMapImage: "Images/birding_loop_2.png",
    length: "2.3 miles",
    difficulty: 2,
  },
  {
    id: "H102",
    name: "Deep Blue Pool Trail",
    description:
      "This gem features an amazing natural pool surrounded by overhanging cliffs.  A 1-mile trail leads down to the pool from the parking lot. The trail is moderately steep, requiring solid footwork but the destination is worth the walk!",
    scenicImage: "Images/deep_blue_1.png",
    trailMapImage: "Images/deep_blue_2.png",
    length: "2 miles",
    difficulty: 2,
  },
  {
    id: "H103",
    name: "Overlook Trail",
    description:
      "The Overlook Trail offers a sweeping view of the valley on this quick, but steep, trail. Keep a close eye on small children and do not get too close to exposed edges.",
    scenicImage: "Images/overlook_trail_1.png",
    trailMapImage: "Images/overlook_trail_2.png",
    length: ".7 miles",
    difficulty: 2,
  },
];

let newClearOption = { id: "0", name: "Please select one", scenicImage: "", trailMapImage: "" };
hikes.unshift(newClearOption);

let hikingCategory = document.getElementById("hikingCategory");
let displayResult = document.getElementById("displayResult");


window.onload = () => {
  populateHikingData();
  checkWhichHikingIsSelected();
};


function populateHikingData() {
  // console.log("populate");
  for (let i = 0; i < hikes.length; i++) {
    let hikingName = hikes[i].name;
    let hikingId = hikes[i].id;
    let newOption = document.createElement("Option");
    newOption.textContent = hikingName;
    newOption.value = hikingId;
    hikingCategory.appendChild(newOption);
  }
}

function checkWhichHikingIsSelected() {
  hikingCategory.addEventListener("change", function () {

    let selectedHikingId = hikingCategory.value;

    displayResult.innerHTML = "";
    displayResult.style.visibility = "hidden";

    let selectedHiking = hikes.find(hike => hike.id === selectedHikingId);


    if (selectedHikingId === "0") {
        displayResult.innerHTML = " ";
    } else {
          let hikingDiv = document.createElement("div");
          hikingDiv.className = "hiking";
  
          let name = document.createElement("h1");
          name.textContent = `Name: ${selectedHiking.name}`;
  
          let description = document.createElement("P");
          description.textContent = `Description: ${selectedHiking.description}`;
  
          let length = document.createElement("p");
          length.textContent = `Length: ${selectedHiking.length}`;
  
          let difficulty = document.createElement("p");
          difficulty.textContent = `Difficulty: ${selectedHiking.difficulty}`;
  
          let scenicImage = document.createElement("img");
          scenicImage.src = selectedHiking.scenicImage;
  
          let trailMapImage = document.createElement("img");
          trailMapImage.src = selectedHiking.trailMapImage;
  
          hikingDiv.appendChild(name);
          hikingDiv.appendChild(description);
          hikingDiv.appendChild(length);
          hikingDiv.appendChild(difficulty);
          hikingDiv.appendChild(scenicImage);
          hikingDiv.appendChild(trailMapImage);
          displayResult.style.visibility = "visible";
          displayResult.appendChild(hikingDiv);
        };
  });
}

// let newImageElement = document.createElement("img");
// newImageElement.src = teamImage;
// messageBox.appendChild(newImageElement);

//   if(teamImage != " "){
//   let imgtag = '<img src="' + teamImage + '" width=300px height=300px>';
//   imageBox.innerHTML = imgtag;
// } else {
//   imageBox.innerHTML = ""
// };
