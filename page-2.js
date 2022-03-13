//firebase acc- kuwarbir2008@gmail.com
//ADD YOUR FIREBASE LINKS HERE    
var firebaseConfig = {
      apiKey: "AIzaSyAZNMiqnDtMA_MkeaQS2tH8MMiwtPg5o10",
      authDomain: "chat-room-3452f.firebaseapp.com",
      databaseURL: "https://chat-room-3452f-default-rtdb.firebaseio.com",
      projectId: "chat-room-3452f",
      storageBucket: "chat-room-3452f.appspot.com",
      messagingSenderId: "901873256818",
      appId: "1:901873256818:web:e3298a5345a9c46410f5eb"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //we replaced cont with var in line, cont app= replaced with firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
