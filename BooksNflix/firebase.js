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

  var ref = firebase.database().ref("movies");




  function referenceSection(types,limitTill){
    ref.orderByChild("type").equalTo(types).limitToFirst(limitTill).once("value")
    
  .then(function(snapshot) {
    snapshot.forEach(function(Snapshot) {
      const type = Snapshot.val().type
      // const key = snapshot.key;
      const cardImage = Snapshot.val().cardImage;
      const movieID = Snapshot.key;
      const movieDescriptions = Snapshot.val().movieDescription;
      const movieName = Snapshot.val().movieName;
      const carousel = document.querySelector('.carousel-images');

      displayCard(".trendingSeemore",".trending","Trending");
      displayCard(".actionSeemore",".action", "Action");
      displayCard(".dramaSeemore",".drama", "Drama" );
      displayCard(".crimeSeemore",".crime", "Crime" );
      displayCard(".horrorSeemore",".horror", "Horror" );
      displayCard(".scifiSeemore",".scifi", "Sci-Fi" );
      displayCard(".comedySeemore",".comedy", "Comedy" );
      displayCard(".thrillerSeemore",".thriller", "Thriller" );

      function displayCard(seeMore,classID,sectionName){
        const seeMoreSection = document.querySelector(seeMore);
        seeMoreSection.innerHTML= `<a href="/SeeMore/seeMore.html?sm=${sectionName}" ><span class="show-more">See more <i class="fas fa-angle-double-right show-more-arrow"></i></span></a>`


        const individualSection = document.querySelector(classID);
        if(type == sectionName){
          individualSection.innerHTML += `
           <li> <div  class="individual-card">
      
           <div class="wishlist-main">
             <div class="wishlist-container">
               <div class="wishlist">
                 <i class="fas fa-bookmark"></i>
               </div>
               <div class="circle">
                 <div class="heart heart-active">
                   <i class="fas fa-heart"></i>
                 </div>
               </div>
             </div>
           </div>
         <a href="movies/html/index.html?movieID=${movieID}" class="card-redirect">
      
         <div class="cards trans">
           <img loading ="lazy" src="${cardImage}" alt="image" class="card-img">
           <div class="card-content">
           <h2 class="card-title">${movieName}</h2>
           <p class="card-desc">${movieDescriptions}</p>
         </div>
         </div>
       </a>
         </div>
       </li> 
           `
           }
      }
  });
});
  }

  let category = ["Trending","Action","Drama","Crime","Sci-Fi","Horror","Thriller","Comedy"];
  let sec="";
  for(let section = 0 ; section < category.length;section++){
    referenceSection(category[section],10);
  }

