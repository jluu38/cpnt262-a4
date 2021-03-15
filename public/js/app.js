"use strict mode";

const images = [{
    "id": 1,
    "title": "Au Secours!",
    "summary": "A 1924 short silent comedy film directed by Abel Gance and written/starring Max Linder.",
    "width": 1048,
    "height": 1598,
    "localURL": "images/ausecours.png",
    "imgURL": "https://en.wikipedia.org/wiki/Au_Secours!",
    "imgCredit": "University of Oregon Libraries",
    "imgCreditUrl": "https://expo.uoregon.edu/spotlight/public-domain-day-2020/feature/au-secours"
  },
  {
    "id": 2,
    "title": "Battleship Potemkin",
    "summary": "A 1925 Soviet propoganda silent film directed by Sergei Eisenstein.",
    "width": 1200,
    "height": 1694,
    "localURL": "images/battleshippotemkin.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/Battleship_Potemkin",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://en.wikipedia.org/wiki/Battleship_Potemkin#/media/File:Vintage_Potemkin.jpg"
  },
  {
    "id": 3,
    "title": "Carmen",
    "summary": "A 1915 silent drama film directed by Raoul Walsh -- a founding member of the Motion Picture Academy.",
    "width": 568,
    "height": 848,
    "localURL": "images/carmen.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/Carmen_(1915_Raoul_Walsh_film)",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://upload.wikimedia.org/wikipedia/commons/0/01/Theda_Bara_Carmen_poster.jpg"
  },
  {
    "id": 4,
    "title": "Girl Shy",
    "summary": "Considered Harold Lloyd's departure from \"gag films\", it is a 1924 silent romantic comedy.",
    "width": 1149,
    "height": 2048,
    "localURL": "images/girlshy.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/Girl_Shy",
    "imgCredit": "Duke Law, The Center for the Study of the Public Domain",
    "imgCreditUrl": "https://web.law.duke.edu/cspd/publicdomainday/2020/"
  },
  {
    "id": 5,
    "title": "Greed",
    "summary": "The 1924 Erich von Stroheim epic starring ZaSu Pitts in its reconstructed glory running 239 minutes.",
    "width": 1212,
    "height": 1633,
    "localURL": "images/greed.png",
    "imgURL": "https://en.wikipedia.org/wiki/Greed_(1924_film)",
    "imgCredit": "University of Oregon Libraries",
    "imgCreditUrl": "https://expo.uoregon.edu/spotlight/public-domain-day-2020/feature/greed"
  },
  {
    "id": 6,
    "title": "The Haunted House",
    "summary": "A 1921 silent comedy film starring Buster Keaton as an unsuspecting bank teller caught in the midst of a heist.",
    "width": 992,
    "height": 1500,
    "localURL": "images/hauntedhouse.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/The_Haunted_House_(1921_film)",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://en.wikipedia.org/wiki/The_Haunted_House_(1921_film)#/media/File:Haunted_house1921.jpg"
  },
  {
    "id": 7,
    "title": "Häxan",
    "summary": "Danish director Benjamin Christensen's 1922 silent horror essay film.",
    "width": 297,
    "height": 418,
    "localURL": "images/haxan.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/H%C3%A4xan",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://en.wikipedia.org/wiki/H%C3%A4xan#/media/File:Haxan_sv_poster.jpg"
  },
  {
    "id": 2,
    "title": "He Who Gets Slapped",
    "summary": "A 1924 silent psychological thriller based on a Russian play",
    "width": 503,
    "height": 798,
    "localURL": "images/hewhogetsslapped.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/He_Who_Gets_Slapped",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://en.wikipedia.org/wiki/He_Who_Gets_Slapped#/media/File:He_Who_Gets_Slapped.jpg"
  },
  {
    "id": 9,
    "title": "Les Vampires",
    "summary": "French director Louis Feuillade's magnum opus initially released as ten episodes between 1915 and 1916.",
    "width": 717,
    "height": 1001,
    "localURL": "images/lesvampires.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/Les_Vampires",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://commons.wikimedia.org/wiki/File:Lesvampiresposter.jpg"
  }
];

// DOM manipulated gallery output
for (let i = 0; i < images.length; i++) {
  //constants declared in the order they're nested 
  const gallery = document.querySelector(".grid");
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const imgCreditURL = document.createElement("a");
  const imgCredit = document.createElement("p");
  const imgLink = document.createElement("a");
  const title = document.createElement("h3");
  const figCaption = document.createElement("figcaption");

  // images
  img.src = `${images[i].localURL}`;
  img.alt = `${images[i].title}` + " Poster";
  img.height = "450";

  // image credits
  imgCreditURL.href = `${images[i].imgCreditUrl}`;
  imgCredit.innerText = `${images[i].imgCredit}`;
  imgCreditURL.classList.add("creditURL");

  // film wikipedia pages linked to titles
  imgLink.href = `${images[i].imgURL}`;
  title.innerText = `${images[i].title}`;

  // figcaption
  figCaption.innerText = `${images[i].summary}`;

  // appended in nested order 
  gallery.appendChild(figure);
  figure.appendChild(img);
  figure.appendChild(imgCreditURL);
  imgCreditURL.appendChild(imgCredit);
  figure.appendChild(imgLink);
  imgLink.appendChild(title);
  figure.appendChild(figCaption);
}

// gallery modal/lightbox
const modalImages = document.querySelectorAll(".modal-content img");
const modalPopUp = document.querySelector(".image-modal-popup");

// this function removes the need to declare more constants for modal-specific elements
function modalElement(element) {
  return document.querySelector(`.image-modal-popup ${element}`);
}

// changes made to the modal's child elements when an image is clicked
modalImages.forEach(img => {
  img.addEventListener("click", e => {
    e.stopPropagation();
    modalPopUp.classList.toggle("reveal");
    modalElement("img").src = img.src;
    modalElement("img").alt = img.alt;
    modalElement("p").innerText = "Original size: " + img.naturalWidth + "px" + " x " + img.naturalHeight + "px";

    // if/else used to keep consistency of images in modal at 700px since image sizes greatly vary
    // images smaller than 700px are displayed in their original size (which is why this isn"t done with CSS)
    if (img.naturalHeight >= 700) {
      modalElement("img").height = 700;
    } else {
      modalElement("img").height = img.naturalHeight;
    }
  });
});

// closes modal upon any click
document.addEventListener("click", () => {
  modalPopUp.classList.remove("reveal");
});

// Parts of my attempts at a modal w/out external resources (corresponding html/css were deleted --
// this is more so to remind myself where i was logically on the right or wrong track)
// images[i].onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = img.src;
// };

// function modalImg(images) {
//   const expandImg = document.querySelector(".expandImg");
//   expandImg.src = images.src;
//   expandImg.parentElement.style.display = "block";
// }