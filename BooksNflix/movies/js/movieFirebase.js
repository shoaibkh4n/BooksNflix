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

  const getID = location.search;
  const urlQuery = new URLSearchParams(getID);
  const movieIDs = parseInt(urlQuery.get("movieID"));
  
  firebaseDB(movieIDs);

function firebaseDB(movieID){
  var ref = firebase.database().ref("movies/"+movieID);
    ref.once("value")
  .then(function(Snapshot) {
      // const key = snapshot.key;
      const movieDescriptions = Snapshot.val().movieDescription;
      const movieName = Snapshot.val().movieName;
      const movieFullImage = Snapshot.val().movieFullImage;
      const ottLink = Snapshot.val().ottLink;
      const platform = Snapshot.val().platform;
      const eBook = Snapshot.val().linkOnlineBook;
      const yearRelease = Snapshot.val().yearRelease;
      const watchTime = Snapshot.val().watchTime;
      const genre = Snapshot.val().genre;
      const rating = Snapshot.val().movieRating;
      document.title = movieName;

      const content =  document.querySelector('.container');

        content.innerHTML = `           
     <img src="${movieFullImage}" alt="Snow">
     <div class="wraper-container">
     
     <p class="desc1 ">${movieName}</p>
     <p class="desc2">
       ${yearRelease}&nbsp•&nbsp${watchTime} min&nbsp•&nbsp${genre}&nbsp•&nbsp<span class="star"><i class="fas fa-star"></i></span> ${rating}
       <br><br>${movieDescriptions}</p>
     <h2 class="h-secondary">Available On:</h2>
     <div class="button-wrap">
    <a href="${ottLink}" target="_blank" class="btn2"><i class="far fa-play-circle"></i>&nbsp${platform} </a>
     <a href="${eBook}" target="_blank" class="btn"><i class="fas fa-book-open"></i>&nbspEBook </a>
   </div>
   </div>
      `
});
}