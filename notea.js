document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video");

    videos.forEach((video) => {
      // Play video on hover
      video.addEventListener("mouseenter", function () {
        this.play();
      });

      // Pause video when not hovered
      video.addEventListener("mouseleave", function () {
        this.pause();
        this.currentTime = 0;
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password-input");
    const submitButton = document.getElementById("submit-button");
    const content = document.getElementById("content");

    submitButton.addEventListener("click", function () {
      const enteredPassword = passwordInput.value.trim(); // Get entered password and trim whitespace

      // Check if entered password is correct
      if (enteredPassword === "14march2022") {
        // Replace 'your_keyword_here' with the actual keyword
        content.style.display = "block"; // Show content
        passwordInput.style.display = "none"; // Hide password input
        submitButton.style.display = "none"; // Hide submit button
      } else {
        alert("Wrong keyword!"); // Show error message
      }
    });
  });