let globalIsSubmit = false;
function validate(isSubmit = false) {
  let mobileNumber = document.getElementById("phone-number").value;
  let Email = document.getElementById("email").value;
  let Country = document.getElementById("country").value;
  let GenderMale = document.getElementById("maleradio").checked;
  let GenderFemale = document.getElementById("femaleradio").checked;
  let GenderOthers = document.getElementById("othersradio").checked;
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let error = false;

  if (isSubmit) {
    globalIsSubmit = true;
  }

  if (globalIsSubmit) {
    if (
      Email.includes("@") &&
      Email.includes(".") &&
      Email.indexOf("@") != 0 &&
      (Email.length - Email.lastIndexOf(".") === 3 ||
        Email.length - Email.lastIndexOf(".") === 4)
    ) {
      document.getElementById("email-valid").style.display = "block";
      document.getElementById("email-invalid").style.display = "none";
    } else {
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
      error = true;
    }

    let firstDigit = parseInt(mobileNumber.charAt(0)); //condition for number can not start with 0,1,2,3,4,5
    if (mobileNumber.length === 10 && !isNaN(mobileNumber) && firstDigit >= 6) {
      document.getElementById("mobile-valid").style.display = "block";
      document.getElementById("mobile-invalid").style.display = "none";
    } else {
      document.getElementById("mobile-invalid").style.display = "block";
      document.getElementById("mobile-valid").style.display = "none";
      error = true;
    }

    if (Country != "None") {
      document.getElementById("country-valid").style.display = "block";
      document.getElementById("country-invalid").style.display = "none";
    } else {
      document.getElementById("country-invalid").style.display = "block";
      document.getElementById("country-valid").style.display = "none";
      error = true;
    }

    if (GenderFemale || GenderMale || GenderOthers) {
      document.getElementById("gender-valid").style.display = "block";
      document.getElementById("gender-invalid").style.display = "none";
    } else {
      document.getElementById("gender-invalid").style.display = "block";
      document.getElementById("gender-valid").style.display = "none";
      error = true;
    }

    if (
      firstName.includes("0") ||
      firstName.includes("1") ||
      firstName.includes("2") ||
      firstName.includes("3") ||
      firstName.includes("4") ||
      firstName.includes("5") ||
      firstName.includes("6") ||
      firstName.includes("7") ||
      firstName.includes("8") ||
      firstName.includes("9")
    ) {
      document.getElementById("first-name-valid").style.display = "none";
      document.getElementById("first-name-invalid").style.display = "block";
      error = true;
    } else if (firstName.length < 3) {
      document.getElementById("first-name-valid").style.display = "none";
      document.getElementById("first-name-invalid").style.display = "block";
      error = true;
    } else {
      document.getElementById("first-name-valid").style.display = "block";
      document.getElementById("first-name-invalid").style.display = "none";
    }

    if (
      lastName.includes("0") ||
      lastName.includes("1") ||
      lastName.includes("2") ||
      lastName.includes("3") ||
      lastName.includes("4") ||
      lastName.includes("5") ||
      lastName.includes("6") ||
      lastName.includes("7") ||
      lastName.includes("8") ||
      lastName.includes("9")
    ) {
      document.getElementById("last-name-valid").style.display = "none";
      document.getElementById("last-name-invalid").style.display = "block";
      error = true;
    } else if (lastName.length < 3) {
      document.getElementById("last-name-valid").style.display = "none";
      document.getElementById("last-name-invalid").style.display = "block";
      error = true;
    } else {
      document.getElementById("last-name-valid").style.display = "block";
      document.getElementById("last-name-invalid").style.display = "none";
    }

    if (!error && isSubmit) {
      alert(`Your deatiles have been saved successfully!`);

      document.getElementById("sign-up-form").reset();

      let validFeedbacks = document.getElementsByClassName("valid-feedback");
      for (let i = 0; i < validFeedbacks.length; i++) {
        validFeedbacks[i].style.display = "none";
      }
      let invalidFeedbacks =
        document.getElementsByClassName("invalid-feedback");
      for (let i = 0; i < invalidFeedbacks.length; i++) {
        invalidFeedbacks[i].style.display = "none";
      }
    }
  }
}
