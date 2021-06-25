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

var username ="";

function AddUser() {
    username = document.getElementById("username_input").value;
    if (username != "") {
        console.log(username);
        localStorage.setItem("Username", username);
        window.location = "kwitter_room.html";

        // firebase.database().ref("/").child(username).update({
        //     purpose: "adding user"
        // });
    }
}