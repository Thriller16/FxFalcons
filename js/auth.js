    /**
     * Handles the sign up button press.
     */
    function handleSignUp() {
        // var email = document.getElementById('email').value;
        // var password = document.getElementById('password').value;
        // if (email.length < 4) {
        //   alert('Please enter an email address.');
        //   return;
        // }
        // if (password.length < 4) {
        //   alert('Please enter a password.');
        //   return;
        // }
        // // Sign in with email and pass.
        // // [START createwithemail]
        // firebase.auth().createUserWithEmailAndPassword(email, password).then(() =>{
        //   alert("Registration complete");
        // }).catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   // [START_EXCLUDE]
        //   if (errorCode == 'auth/weak-password') {
        //     alert('The password is too weak.');
        //   }
        //    else {
        //     alert(errorMessage);
        //   }
        //   console.log(error);
        //   // [END_EXCLUDE]
        // });
        // [END createwithemail]
      }
      /**
       * Sends an email verification to the user.
       */
      function sendEmailVerification() {
        // [START sendemailverification]
        firebase.auth().currentUser.sendEmailVerification().then(function() {
          // Email Verification sent!
          // [START_EXCLUDE]
          alert('Email Verification Sent!');
          // [END_EXCLUDE]
        });
        // [END sendemailverification]
      }