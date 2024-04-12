document.addEventListener("DOMContentLoaded", function() {
    const weightForm = document.getElementById("weight-tracker-form");
    const previousWeightDisplay = document.getElementById("previous-weight-value");
  
    // Check if previous weight exists in local storage
    const previousWeight = localStorage.getItem("previousWeight");
    if (previousWeight) {
      previousWeightDisplay.textContent = previousWeight;
    }
  
    // Add event listener for weight form submission
    weightForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const currentWeightInput = document.getElementById("current-weight");
      const currentWeight = currentWeightInput.value.trim();
      
      // Validate input
      if (currentWeight === "") {
        alert("Please enter your current weight.");
        return;
      }
  
      // Store current weight in local storage
      localStorage.setItem("previousWeight", currentWeight);
      previousWeightDisplay.textContent = currentWeight;
  
      // Reset form
      currentWeightInput.value = "";
    });
  });
  