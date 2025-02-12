// Import the firebase functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
  onAuthStateChanged
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCc-Hoh16aNtew8CVlPACSkx9VSGT5FKiA",
    authDomain: "groove-hits.firebaseapp.com",
    projectId: "groove-hits",
    storageBucket: "groove-hits.appspot.com",
    messagingSenderId: "894366884955",
    appId: "1:894366884955:web:42c1083998d187ace90b7e"
  };


//-------------------------------------- Initialize Services------------------------------------------//
const app = initializeApp(firebaseConfig);
const auth = getAuth();

console.log ('Index Read!');

const login = document.getElementById("login");
const logout = document.getElementById("logout");
const userDP = document.getElementById("userDP");
const my_music = document.getElementById("my_music");
const userID = document.getElementById("userID");
const display2 = document.getElementById("display2");
const EndRouth = "http://127.0.0.1:5500/Private/login.html"

//check if user is authenticated
onAuthStateChanged(auth, (user) => {
    if (user) {
      window.uid = user.uid;
      const userName = user.displayName;
      const userEmail = user.email;

      logout.classList.remove("hidden");
      userID.title = uid;
      userDP.src = "images/placeholder.png";

      if (display2 != null) {
      display2.classList.remove("hidden");
    }

    } else {
      window.location.href = EndRouth;
      // login.classList.remove("hidden");
      // my_music.classList.add("hidden");
      
      if (display2 != null) {
      const display1 = document.getElementById("display1");
      const loginRequest = document.createElement("div");
      loginRequest.classList.add("alert");
      loginRequest.innerHTML = "<a href='login.html'>Log in </a> to upload your music to Splash hits.";

      display1.appendChild(loginRequest);
    }

      login.onclick = function(){
        window.location.href = EndRouth;
    }

      console.log("User is not authenticated");
    }    
  });
  