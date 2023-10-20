"use strict";

// Elements
const qrInput = document.getElementById("qr-input");
const imgBox = document.getElementById("img-box");
const qrImage = document.getElementById("qr-image");
const generateBtn = document.querySelector(".generate-btn");
// End of Elements

// Function
// generate QR
const generateQR = () => {
  if (qrInput.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`;
    imgBox.classList.add("show-img");
  } else {
    qrInput.classList.add("error");
    setTimeout(() => {
      qrInput.classList.remove("error");
    }, 1000);
  }
};
// End of Function

// Event Handlers
generateBtn.addEventListener("click", generateQR);
// End of Event Handler
