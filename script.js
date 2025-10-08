// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Validate fields
    let isValid = true;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!nameInput.value.trim()) {
      showError("name-error", "Name is required.");
      isValid = false;
    }

    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
      showError("email-error", "Enter a valid email address.");
      isValid = false;
    }

    if (!passwordInput.value.trim() || passwordInput.value.length < 6) {
      showError("password-error", "Password must be at least 6 characters long.");
      isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
      alert("Form submitted successfully!");
      form.reset(); // Clear the form
    }
  });

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = "red";
  }

  function clearErrors() {
    document.querySelectorAll("span[role='alert']").forEach((span) => {
      span.textContent = "";
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});