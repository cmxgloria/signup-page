window.onload = function() {
  var query = function(selector) {
    return document.querySelector(selector);
  };
  var nameEl = query("#name");
  var emailEl = query("#email");
  var userTypeEl = query("#userType");
  var passwordEl = query("#password");
  var btn = query("button");

  var isNameValid = function(name) {
    return name.trim();
  };
  var isEmailValid = function(email) {
    return /^.+@.+\..+$/.test(email);
  };
  var isUserTyperValid = function(type) {
    return type;
  };
  var isPasswordValid = function(pass) {
    return pass.length >= 8;
  };

  var isFormValid = function() {
    return (
      isNameValid(nameEl.value) &&
      isEmailValid(emailEl.value) &&
      isUserTyperValid(userTypeEl.value) &&
      isPasswordValid(passwordEl.value)
    );
  };

  var checkBtn = function() {
    if (isFormValid()) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  };

  var checkField = function(isValid, evt) {
    if (isValid(evt.target.value)) {
      evt.target.classList.remove("invalid");
    } else {
      evt.target.classList.add("invalid");
    }
    checkBtn();
  };

  ["keyup", "blur"].forEach(function(evtStr) {
    nameEl.addEventListener(evtStr, function(e) {
      checkField(isNameValid, e);
    });
  });
  // nameEl.addEventListener("keyup", function(e) {
  //   checkField(isNameValid, e);
  // });
  // nameEl.addEventListener("blur", function(e) {
  //   checkField(isNameValid, e);
  // });
  ["keyup", "blur"].forEach(function(evtStr) {
    emailEl.addEventListener(evtStr, function(e) {
      checkField(isEmailValid, e);
    });
  });

  ["change", "focus"].forEach(function(evtStr) {
    userTypeEl.addEventListener(evtStr, function(e) {
      checkField(isUserTyperValid, e);
    });
  });
  ["keyup", "blur"].forEach(function(evtStr) {
    passwordEl.addEventListener(evtStr, function(e) {
      checkField(isPasswordValid, e);
    });
  });
};
