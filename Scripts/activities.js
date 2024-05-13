"use strict";

let categories = [
  "Adventures",
  "Arts & Crafts",
  "Museums",
  "Wine Tastings",
  "Other",
];

// Let's add a "select one" option in to the array to be the first element

categories.unshift("Please select one");

let activities = [
  {
    category: "Adventures",
    id: "A101",
    name: "Valley Hot Air Balloons",
    description:
      "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
    location: "121 S. Main Street",
    price: 265.0,
  },
  {
    category: "Adventures",
    id: "A102",
    name: "River Runners: Float Trip",
    description:
      "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
    location: "145 FM 103",
    price: 65.0,
  },
  {
    category: "Adventures",
    id: "A103",
    name: "River Runners: Ride the Rapids",
    description:
      "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
    location: "145 FM 103",
    price: 145.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC101",
    name: "Painting with a Twist : Oils",
    description:
      "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC102",
    name: "Painting with a Twist : Watercolor",
    description:
      "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Museums",
    id: "M101",
    name: "Bravings Airship Museum",
    description:
      "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
    location: "101 Airfield Drive",
    price: 10.0,
  },
  {
    category: "Museums",
    id: "M102",
    name: "Forks and Spoons Museum",
    description:
      "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
    location: "1056 Lost Knives Court",
    price: 3.0,
  },
  {
    category: "Museums",
    id: "M103",
    name: "Steenges Computing Museum",
    description:
      "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
    location: "103 Technology Way",
    price: 0.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-101",
    name: "Hastings Winery Tours and Tastings",
    description:
      "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
    location: "10987 FM 1187",
    price: 12.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-102",
    name: "Lone Oak Winery",
    description:
      "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
    location: "121 Burleson Court",
    price: 0.0,
  },
  {
    category: "Other",
    id: "OTH101",
    name: "Fire Department: Ride Along",
    description:
      "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
    location: "10 Redline Drive",
    price: 25.0,
  },
  {
    category: "Other",
    id: "OTH102",
    name: "Homes For Our Neighbors",
    description:
      "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
    location: "Call (555) 555-5555",
    price: 0.0,
  },
];

// Let's determine the known fields

let activitiesCategory = document.getElementById("activitiesCategory")
let displayResult = document.getElementById("displayResult");
let checkOutSection = document.getElementById("checkOutSection");
let numTickets = document.getElementById("numTickets");
let finalMessage = document.getElementById("finalMessage");
let email = document.getElementById("email");
let nameOnCard = document.getElementById("cname");
let cardNumber = document.getElementById("ccnum");
let expiredYear = document.getElementById("expyear");
let cvv  = document.getElementById("cvv");

// Let's determine the buttons

let confirmPurchaseBtn = document.getElementById("confirmPurchaseBtn");
let resetBtn = document.getElementById("resetBtn");


window.onload = () => {
  populateActivityCategoryData();
  checkWhichActivityIsSelected();
};

function populateActivityCategoryData() {
  // console.log("populateData")
  for (let i = 0; i < categories.length; i++) {
    let activityCategory = categories[i];
    // console.log(activityCategory);
    let newOption = document.createElement("option");
    newOption.textContent = activityCategory;
    newOption.value = activityCategory;
    activitiesCategory.appendChild(newOption);
  }
}

function checkWhichActivityIsSelected() {
  activitiesCategory.addEventListener("change", function () {
    let selectedActivityName = activitiesCategory.value;

    let selectedActivityArray = [];

    displayResult.innerHTML = "";
    displayResult.style.visibility = "hidden";
    checkOutSection.style.visibility = "hidden";

    for (let i = 0; i < activities.length; i++) {
      if (
        selectedActivityName == "Adventures" &&
        activities[i].category == "Adventures"
      ) {
        selectedActivityArray.push(activities[i]);
      } else if (
        selectedActivityName == "Arts & Crafts" &&
        activities[i].category == "Arts & Crafts"
      ) {
        selectedActivityArray.push(activities[i]);
      } else if (
        selectedActivityName == "Museums" &&
        activities[i].category == "Museums"
      ) {
        selectedActivityArray.push(activities[i]);
      } else if (
        selectedActivityName == "Wine Tastings" &&
        activities[i].category == "Wine Tastings"
      ) {
        selectedActivityArray.push(activities[i]);
      } else if (
        selectedActivityName == "Other" &&
        activities[i].category == "Other"
      ) {
        selectedActivityArray.push(activities[i]);
      }
    }

    selectedActivityArray.forEach((activity) => {
      let activityDiv = document.createElement("div");
      activityDiv.className = "activity";

      let category = document.createElement("h2");
      category.textContent = `Category: ${activity.category}`;

      let name = document.createElement("h3");
      name.textContent = `Name: ${activity.name}`;

      let description = document.createElement("p");
      description.textContent = `Description: ${activity.description}`;

      let location = document.createElement("p");
      location.textContent = `Location: ${activity.location}`;

      let price = document.createElement("p");
      price.textContent = `Price: $${activity.price.toFixed(2)}`;
      
      
      let purchaseButton = document.createElement("button");
      if (activity.price > 0) {
        
        purchaseButton.className = "purchase-btn";
        purchaseButton.textContent = "Purchase Ticket";
        purchaseButton.addEventListener("click", function () {
            checkOutSection.style.visibility = "visible";
            checkOutSection.scrollIntoView();
        confirmPurchaseBtn.addEventListener("click", function () {
            let totalPrice = activity.price * numTickets.value;
            finalMessage.textContent = `Your credit card has been charged $${totalPrice} for ${numTickets.value} tickets to ${activity.name}. A confirmation email has been sent to ${email.value}`;
            finalMessage.style.visibility = "visible";
            checkOutSection.scrollIntoView();
            resetBtn.addEventListener("click", function() {
                numTickets.value = " ";
                email.value = " ";
                nameOnCard.value = " ";
                cardNumber.value = " ";
                expiredYear.value = " ";
                cvv.value = " ";
                finalMessage.textContent = "";
                finalMessage.style.visibility = "hidden"
            })
        })
        });
      };

      activityDiv.appendChild(category);
      activityDiv.appendChild(name);
      activityDiv.appendChild(description);
      activityDiv.appendChild(location);
      activityDiv.appendChild(price);
      if (activity.price > 0) {
      activityDiv.appendChild(purchaseButton);
      }
      displayResult.style.visibility = "visible";
      displayResult.appendChild(activityDiv);
    });
  });
}
