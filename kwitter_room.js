
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBxONGus_QnIs-VBW3afYB69eOzZfl8FaI",
      authDomain: "kwitter-5d6d1.firebaseapp.com",
      databaseURL:"https://kwitter-5d6d1-default-rtdb.firebaseio.com",
      projectId: "kwitter-5d6d1",
      storageBucket: "kwitter-5d6d1.appspot.com",
      messagingSenderId: "1031080137326",
      appId: "1:1031080137326:web:174204cda00158e467cc7f",
      measurementId: "G-55GGTNRMQV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 un2=localStorage.getItem("Username"); 
 document.getElementById("wel").innerHTML="Welcome, "+un2+"!";
 function addroom(){
      roomname= document.getElementById("rn").value;
      console.log(roomname);
      firebase.database().ref("/").child(roomname).update({
            Purpose: "Adding a room name"
      });
      localStorage.setItem("Room_name",roomname);
      window.location="kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       x = childKey;
      //Start code
      console.log(x);
      row = "<div class='room_name' id="+x+" onclick='redirectToRoomName(this.id)' >Room Name : "+ x +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(e){
      console.log(e);
      localStorage.setItem("Room_name",e);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}
