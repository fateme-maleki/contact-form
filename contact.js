document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (msg) {
      msg.textContent = "";
    });

    // Get input values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();

    let hasError = false;

    // Validate fname
    if (fname === "") {
      document.getElementById("error-fname").textContent =
        "This field is required.";
      hasError = true;
    }

    // Validate lname
    if (lname === "") {
      document.getElementById("error-lname").textContent =
        "This field is required.";
      hasError = true;
    }

    // If there are no errors, show success message
    if (!hasError) {
      const successMessage = document.getElementById("successMessage");
      successMessage.textContent = "Form submitted successfully!";
      successMessage.style.display = "block";

      // Optionally clear inputs after submission
      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
    }
  });
