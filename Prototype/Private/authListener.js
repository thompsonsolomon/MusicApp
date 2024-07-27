// // Import the firebase functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCc-Hoh16aNtew8CVlPACSkx9VSGT5FKiA",
//   authDomain: "groove-hits.firebaseapp.com",
//   projectId: "groove-hits",
//   storageBucket: "groove-hits.appspot.com",
//   messagingSenderId: "894366884955",
//   appId: "1:894366884955:web:42c1083998d187ace90b7e",
// };

// //-------------------------------------- Initialize Services------------------------------------------//
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// const loginPage = "http://127.0.0.1:5502/admin.html";
// const dashboard = "http://127.0.0.1:5502/dashboard.html";

// //check if user is authenticated
// onAuthStateChanged(auth, (user) => {
//   function validateAuth() {
//     if (!user) {
//       console.log("no user found ");
//       window.location.replace(loginPage);
//     }
//   }

//   function validateLoginIN() {
//     console.log(auth);
//     if (auth !== null) {
//       window.location.replace(dashboard);
//     }
//   }
// });



// const EndRouth = "/login.html"
const EndRouth = "http://127.0.0.1:5502/Private/login.html"
var loginButton = document.getElementById("login")
var logOutButton = document.getElementById("logout")
function validateAuth() {
  const auth = localStorage.getItem("authData");
  console.log(auth);
  if (auth === null) {
    console.log("no user found ");
    window.location.href = EndRouth
    loginButton.style.display = "block"
    logOutButton.style.display = "none"

  }
}

function validateLoginIN() {
  const auth = localStorage.getItem("authData");  
  console.log(auth);
  if (auth !== null) {
    window.location.href = "http://127.0.0.1:5500/Private/index.html"
    
    loginButton.style.display = "none"
    logOutButton.style.display = "block"

   }
}

