// Your web app's Firebase configuration
let firebaseConfig = {
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
const preObject = document.querySelector(".object");

toggleHelperModal = () => {
  let modal = document.querySelector(".pre-helper-registration-modal");

  let button = document.querySelector(".pre-helper-registration-button");

  let close = document.getElementsByClassName("close-helper-modal")[0];

  modal.style.display = "block";

  close.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
};

function _sendHelperDetailsToFirebase() {
  let name = document.querySelector("#helper-name").value;

  let email = document.querySelector("#helper-email").value;

  let contact = document.querySelector("#helper-contact").value;

  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let contactFormat = /^\d{10}$/;

  let errorEmail, errorName, errorContact;

  if (
    (email.match(mailFormat) !== null && name !== "") ||
    contact.match(contactFormat) !== null
  ) {
    firebase.database().ref().child("users").push({
      email: email,
      name: name,
      contact: contact,
    });

    alert("All data was successfully registered!");
  } else {
    if (name === "") {
      errorName = "This is a required field";
      document.querySelector(".error-name-text").innerHTML = errorName;
    }
    if (email.match(mailFormat) === null) {
      errorEmail = "Not a valid Email Address";
      document.querySelector(".error-email-text").innerHTML = errorEmail;
    } else {
      errorEmail = "";
      document.querySelector(".error-email-text").innerHTML = errorEmail;
    }
    if (contact === "") {
      errorContact = "";
      document.querySelector(".error-contact-text").innerHTML = errorContact;
    } else if (contact.match(contactFormat) === null) {
      errorContact = "Must be a 10 digit phone number";
      document.querySelector(".error-contact-text").innerHTML = errorContact;
    } else {
      errorContact = "";
      document.querySelector(".error-contact-text").innerHTML = errorContact;
    }
  }

  document.getElementById("helper-form").reset();

  let database = firebase.database();
  let curr_count;

  let modal = document.querySelector(".pre-helper-registration-modal");

  let close = document.querySelector(".close-helper-modal-onsubmit");

  modal.style.display = "none";
}

toggleWorkerModal = () => {
  let modal = document.querySelector(".pre-worker-registration-modal");

  let button = document.querySelector(".pre-worker-registration-button");

  let close = document.getElementsByClassName("close-worker-modal")[0];

  modal.style.display = "block";

  close.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
};

function _sendWorkerDetailsToFirebase() {
  let name = document.querySelector("#worker-name").value;

  let email = document.querySelector("#worker-email").value;

  let contact = document.querySelector("#worker-contact").value;

  let origin = document.querySelector("#worker-origin").value;

  let destination = document.querySelector("#worker-destination").value;

  let workerFamilyMembers = document.querySelector("#worker-family").value;

  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let contactFormat = /^\d{10}$/;

  let errorName, errorEmail, errorContact, errorWorkerFamilyMembers;

  if (
    (name !== "" &&
      contact.match(contactFormat) !== null &&
      workerFamilyMembers !== "") ||
    email.match(mailFormat) !== null
  ) {
    firebase.database().ref().child("migrants").push({
      name: name,
      email: email,
      contact: contact,
      origin: origin,
      destination: destination,
      workerFamilyMembers: workerFamilyMembers,
    });

    alert("All data was successfully registered!");
  } else {
    if (name === "") {
      errorName = "This is a required field";
      document.querySelector(".error-worker-name-text").innerHTML = errorName;
    } else {
      errorName = "";
      document.querySelector(".error-worker-name-text").innerHTML = errorName;
    }
    if (email.match(mailFormat) === null) {
      errorEmail = "Not a valid Email Address";
      document.querySelector(".error-worker-email-text").innerHTML = errorEmail;
    } else {
      errorEmail = "";
      document.querySelector(".error-worker-email-text").innerHTML = errorEmail;
    }
    if (contact === "") {
      errorContact = "This is a required field";
      document.querySelector(
        ".error-worker-contact-text"
      ).innerHTML = errorContact;
    } else if (contact.match(contactFormat) === null) {
      errorContact = "Must be a 10 digit phone number";
      document.querySelector(
        ".error-worker-contact-text"
      ).innerHTML = errorContact;
    } else {
      errorContact = "";
      document.querySelector(
        ".error-worker-contact-text"
      ).innerHTML = errorContact;
    }
    if (workerFamilyMembers === "") {
      errorWorkerFamilyMembers = "This is a required field";
      document.querySelector(
        ".error-worker-family-text"
      ).innerHTML = errorWorkerFamilyMembers;
    } else {
      errorWorkerFamilyMembers = "";
      document.querySelector(
        ".error-worker-family-text"
      ).innerHTML = errorWorkerFamilyMembers;
    }
  }

  document.getElementById("worker-form").reset();

  let database = firebase.database();
  let curr_count;

  let modal = document.querySelector(".pre-worker-registration-modal");

  let close = document.querySelector(".close-worker-modal-onsubmit");

  modal.style.display = "none";
}
var customer_satisfaction_global = 0;
function selected(customer_satisfaction) {
  customer_satisfaction_global = customer_satisfaction;
}
function _contactUs() {
  let name = document.querySelector("#feedback-name").value;

  let email = document.querySelector("#feedback-email").value;

  let feedback_initiative = document.querySelector("#feedback-initiative")
    .value;

  let satisfaction = customer_satisfaction_global;

  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let errorName, errorEmail, errorFeedbackInitiative, errorSatisfaction;

  let suggestions = document.querySelector("#feedback-suggestion").value;

  if (
    (name !== null &&
      email.match(mailFormat) !== null &&
      feedback_initiative !== "" &&
      Number.isInteger(satisfaction)) ||
    suggestions !== ""
  ) {
    firebase.database().ref().child("contact_us").push({
      name: name,
      email: email,
      feedback_initiative: feedback_initiative,
      satosfaction: satisfaction,
      suggestions: suggestions,
    });

    alert("Your feedback was sent successfully!");
  } else {
    if (name === "") {
      errorName = "This is a required field";
      document.querySelector(".error-name-text").innerHTML = errorName;
    } else {
      errorName = "";
      document.querySelector(".error-name-text").innerHTML = errorName;
    }
    if (email.match(mailFormat) === null) {
      errorEmail = "Not a valid Email Address";
      document.querySelector(".error-email-text").innerHTML = errorEmail;
    } else {
      errorEmail = "";
      document.querySelector(".error-worker-email-text").innerHTML = errorEmail;
    }
    if (feedback_initiative === "") {
      errorFeedbackInitiative = "This is a required field";
      document.querySelector(
        ".error-initiative-text"
      ).innerHTML = errorFeedbackInitiative;
    } else {
      errorFeedbackInitiative = "";
      document.querySelector(
        ".error-initiative-text"
      ).innerHTML = errorFeedbackInitiative;
    }
    if (Number.isInteger(suggestions)) {
      errorSatisfaction = "This is a required field";
      document.querySelector(
        ".error-satisfaction-text"
      ).innerHTML = errorSatisfaction;
    } else {
      errorSatisfaction = "";
      document.querySelector(
        ".error-satisfaction-text"
      ).innerHTML = errorSatisfaction;
    }
  }
}
