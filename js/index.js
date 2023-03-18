// Move on the Auth
signUp.addEventListener("click", (e) => {
  // Get all the input fields
  var full_name1 = document.getElementById("validationCustom01").value;
  var email1 = document.getElementById("validationCustom").value;
  var password1 = document.getElementById("validationCustom03").value;
  //   var address = document.getElementById("validationCustom04").value;
  //   var zipCode = document.getElementById("validationCustom05").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("You have signed Up successfully");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
});
