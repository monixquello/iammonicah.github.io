
// overlay toggle

function toggleOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";

    toggleOverlay();
  }

  document.getElementById("T").addEventListener("click", toggleOverlay);



// function for email


function sendEmail() {
    var form = document.getElementById("emailForm");
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var subject = form.elements["subject"].value;
    var message = form.elements["message"].value;

    var mailtoUrl = "mailto:monicahmirembe540@gmail.com" +
                    "?subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent("Name: " + name + "\n" +
                                                   "Email: " + email + "\n" +
                                                   "Message: " + message);

    window.open(mailtoUrl);
  }

  document.getElementById("sendEmailButton").addEventListener("click", sendEmail);