"use strict mode";

// fetch api for gallery output
fetch("api/v0")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Response was not okay");
    }
    return response.json();
  })
  // loop from previous assignment
  .then(function (images) {

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

        if (img.naturalHeight >= 700) {
          modalElement("img").height = 700;
        } else {
          modalElement("img").height = img.naturalHeight;
        }
      });
    });
    document.addEventListener("click", () => {
      modalPopUp.classList.remove("reveal");
    });
  })
  .catch(function (error) {
    console.log(error);
  });