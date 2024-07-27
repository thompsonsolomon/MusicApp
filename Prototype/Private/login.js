// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, 
    signInWithPopup,
    signInWithEmailAndPassword,
    FacebookAuthProvider,
    TwitterAuthProvider,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc-Hoh16aNtew8CVlPACSkx9VSGT5FKiA",
  authDomain: "groove-hits.firebaseapp.com",
  databaseURL: "https://groove-hits-default-rtdb.firebaseio.com",
  projectId: "groove-hits",
  storageBucket: "groove-hits.appspot.com",
  messagingSenderId: "894366884955",
  appId: "1:894366884955:web:42c1083998d187ace90b7e"
};

console.log("Log in!")

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize auth
const auth = getAuth();
const googleAuth = new GoogleAuthProvider();
const fbAuth = new FacebookAuthProvider();
const twitterAuth = new TwitterAuthProvider();

//Login user
const loginForm = document.getElementById("login")
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log('clicked')

  //Getting the input fields
  const email = loginForm.email.value 
  const password = loginForm.password.value

  // default routh after login
 const EndRouth = "/my_music.html"

  signInWithEmailAndPassword(auth, email, password)
  .then((cred) =>{
    console.log('user logged in:' + cred.user)

    localStorage.setItem("authData", JSON.stringify(cred.user));


    // window.location.href = EndRouth
    window.location.pathname = EndRouth
  })
  .catch((err) => {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorMessage)

    if (errorMessage == 'Firebase: Error (auth/invalid-email).'){
      alert('Invalid email')
    }
    if (errorMessage == 'Firebase: Error (auth/user-not-found).'){
      alert('User not found')
    }
    
    if (errorMessage == 'Firebase: Error (auth/wrong-password).'){
      alert('Invalid password')
    }
  })
})

//login with facebook
const fbLogin = document.getElementById("fb")
fbLogin.addEventListener('click', (e)=>{
  e.preventDefault()
  console.log('fb clicked')

  const auth = getAuth();
  signInWithPopup(auth, fbAuth)
    .then((result) => {
    // The signed-in user info.
    const user = result.user;

    localStorage.setItem("authData", JSON.stringify(result.user));

    
    window.location.href = EndRouth
    console.log('user logged in:' + user)
    })

    .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    console.log(errorMessage)
    console.log(credential)

    if (errorMessage == 'Firebase: Error (auth/account-exists-with-different-credential).'){
      alert('Email associated with the FaceBook account is already in use')
    }

    })
    
    });



//login with twitter
const twitterLogin = document.getElementById("twitter")
twitterLogin.addEventListener('click', (e)=>{
  e.preventDefault()
  console.log('twitter clicked')

  signInWithPopup(auth, twitterAuth)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    localStorage.setItem("authData", JSON.stringify(result.user));


    window.location.href = EndRouth
    console.log('user logged in:' + user)
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...

    console.log(errorMessage)
    console.log(credential)
  });
})

//login with google
const googleLogin = document.getElementById("google")
googleLogin.addEventListener('click', (e)=>{
  e.preventDefault()
  console.log('google clicked')

  signInWithPopup(auth, googleAuth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...


    localStorage.setItem("authData", JSON.stringify(result.user));


    
    // window.location.href = EndRouth
    console.log('user logged in:' + user)
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // 

    console.log(errorMessage)
  })
})

