
var firebaseConfig = {
      apiKey: "AIzaSyDZTv5679oNWcyRUdkAsZwFw-c89seDWSo",
      authDomain: "kwitter-571fe.firebaseapp.com",
      databaseURL: "https://kwitter-571fe-default-rtdb.firebaseio.com",
      projectId: "kwitter-571fe",
      storageBucket: "kwitter-571fe.appspot.com",
      messagingSenderId: "965865119041",
      appId: "1:965865119041:web:fe11d8ef12de4b065bd5c0",
      measurementId: "G-L664STGHJ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Username");
document.getElementById("username").innerHTML = "Welcome, <br>" + username;
var roomName = "";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("Room Name - ", Room_names);
                  row = "<div class = 'room_name' id=" + Room_names + " onclick = 'redirect_to_roomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}

function AddRoom() {
      roomName = document.getElementById("room_name").value;
      if (roomName != "") {
            console.log(roomName);
            localStorage.setItem("Room Name = ", roomName);

            firebase.database().ref("/").child(roomName).update({
                  purpose: "adding room"
            });

            getData();
      }
}

getData();
function Logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Room Name = ");
      window.location = "index.html";
}
function redirect_to_roomName(name){
      console.log(name);
      localStorage.setItem("Room Name", name);

      window.location = "kwitter_page.html";
}