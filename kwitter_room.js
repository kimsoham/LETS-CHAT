var firebaseConfig = {
      apiKey: "AIzaSyBCzpH26uIjHK6sFYpbiumDxvIl7wNkPS8",
      authDomain: "lets-chat-230dd.firebaseapp.com",
      databaseURL: "https://lets-chat-230dd-default-rtdb.firebaseio.com",
      projectId: "lets-chat-230dd",
      storageBucket: "lets-chat-230dd.appspot.com",
      messagingSenderId: "993459982895",
      appId: "1:993459982895:web:5f7daf80dfcfc38508acda",
      measurementId: "G-CJ0K3XMH85"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
pursure:"adding room name"            
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}