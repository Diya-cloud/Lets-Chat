
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAS_4YiICMLkAJuUcxOoF8gkF1PgbIDxj0",
      authDomain: "lets-chat-5d838.firebaseapp.com",
      databaseURL: "https://lets-chat-5d838.firebaseio.com",
      projectId: "lets-chat-5d838",
      storageBucket: "lets-chat-5d838.appspot.com",
      messagingSenderId: "738151413734",
      appId: "1:738151413734:web:cca12e77215c1d9015c827",
      measurementId: "G-E88VKMYPGZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#"+Room_names+"</div><hr>"
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      Room_name=document.getElementById("Room_names").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose="adding room name"
      });
      localStorage.setItem("room_name",Room_name);
      window.location="Letschat_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="Letschat_page.html";

}