document.addEventListener("DOMContentLoaded", function() {
  // Get the button and form elements
  var showFormBtn = document.getElementById("showFormBtn");
  var emailForm = document.getElementById("emailForm");

  // Add click event listener to the button
  showFormBtn.addEventListener("click", function() {
      // Toggle the visibility of the form
      if (emailForm.style.display === "none") {
          emailForm.style.display = "block";
      } else {
          emailForm.style.display = "none";
      }
  });
});
