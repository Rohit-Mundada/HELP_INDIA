// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD-v_aiEkCcVzHAJbx0EPRRWDNchzObNZo",
  authDomain: "help-india-june-2020.firebaseapp.com",
  databaseURL: "https://help-india-june-2020.firebaseio.com",
  projectId: "help-india-june-2020",
  storageBucket: "help-india-june-2020.appspot.com",
  messagingSenderId: "29672385815",
  appId: "1:29672385815:web:c577a3015c6b7d69d79b52",
  measurementId: "G-L91D6EFNX5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
toggleModal = () => {
  let modal = document.getElementById("pre-registration-modal");

  let button = document.getElementById("pre-registration-button");

  let close = document.getElementsByClassName("close")[0];

  button.onclick = () => {
    modal.style.display = "block";
  };

  close.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
};

toggleModal();
const preObject=document.getElementById('object');
const dbRefObject=firebase.database().ref().child('object');
dbRefObject.on('value',snap=>console.log(snap.val));

function _sendDetailsToFirebase() {
  var name = document.getElementById("name").value;

  var email = document.getElementById("email").value;

  var database = firebase.database();

  console.log('Adding to firebase');
  firebase.database().ref().child('users').push({
    name: name,
    email: email,
  });
  
  console.log("HI");
  console.log(name);
  console.log(email);
}

