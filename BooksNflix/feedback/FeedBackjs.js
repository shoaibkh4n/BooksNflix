var firebaseConfig = {
    apiKey: "AIzaSyBW1gvponknATBhmaclEIYXh6bdVPJZs78",
    authDomain: "booksandflix-82d60.firebaseapp.com",
    projectId: "booksandflix-82d60",
    storageBucket: "booksandflix-82d60.appspot.com",
    messagingSenderId: "871600227959",
    appId: "1:871600227959:web:46b96bb69c6fe64d03a872",
    measurementId: "G-1BB1S350KS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const scrollUp = document.querySelector('.scroll-btn--up');
const submit = document.querySelector(".submit");
const alert = document.querySelector('.alert');


// Database creation and refrencing it to db

const moviesDBRef = firebase.database().ref('feedBack');


// Function that is used in document
function submitForm(e){
    e.preventDefault();
    const name = getInputValues('Name');
    const eMail = getInputValues('E_mail');
    const feedBack= getInputValues('FeedBack');
    

    if(name && eMail && feedBack){
        sendData(name, eMail, feedBack);

        document.querySelector(".input-chat").reset();
        alert.innerHTML = "feedback submitted Successfully!!!"
        alert.style.backgroundColor = "rgba(38, 190, 38, 0.719)";
        alert.style.display = "block";

        setTimeout(() => {
            alert.style.transition = "250ms ease";
            alert.style.display = "none";
            
        }, 4500);

    }
    else{
        alert.style.display = "block";
    }
}
function getInputValues(id){
    return document.getElementById(id).value;
}

// function to send movie data to database

function sendData(name, eMail, feedBack){
    const setDB = moviesDBRef.push();
    setDB.set({
        name:name,
        eMail: eMail,
        feedBack:feedBack,
        });
}

const windows = window.addEventListener('scroll', scrollHide);
const plane = document.querySelector('.plane');

function scrollHide(){
    if (document.documentElement.scrollTop > 30) {
        // plane.style.opacity = "1";
        // plane.style.visibility = "visible";
        // plane.style.display = "block";
        plane.style.transform = "scale(1)";
        
        
      } else {
        // plane.style.opacity = "0";
        // plane.style.visibility = "hidden";
        // plane.style.display = "block";
        plane.style.transform = "scale(0)";
        
      }
}

plane.addEventListener('click',e=>{
    window.scrollTo(0,0);
})



submit.addEventListener('click', submitForm);
