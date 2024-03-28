const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAL-aQlbu1BVd7wr7_Jfm0H0JaxrasAoQ",
  authDomain: "login-page-44c1e.firebaseapp.com",
  projectId: "login-page-44c1e",
  storageBucket: "login-page-44c1e.appspot.com",
  messagingSenderId: "473590976822",
  appId: "1:473590976822:web:13273da0418bc36883a397"
};

const app = initializeApp(firebaseConfig)
const password = document.getElementById("password").value;
//sumbit button

const sumbit = document.getElementById("submit");
SubmitEvent.addEventListener("click", function (event) {
    event.preventDefault()
    alert
})