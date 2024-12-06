// Event listener for the "Calculate BMI" button
document.getElementById("calculate-btn").addEventListener("click", function () {
    // Retrieve user inputs from form fields
    const gender = document.getElementById("gender").value; // Selected gender
    const age = parseInt(document.getElementById("age").value); // Age entered by the user
    const weight = parseFloat(document.getElementById("weight").value); // Weight in kilograms
    const height = parseFloat(document.getElementById("height").value) / 100; // Height in meters (converted from cm)

    // Validate inputs to ensure all fields are filled correctly
    if (!gender || isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Please fill in all fields correctly."); // Display alert if validation fails
        return; // Exit function if validation fails
    }

    // Calculate BMI and round to one decimal place
    const bmi = (weight / (height * height)).toFixed(1);

    // Variables to store BMI category, workout and dietary recommendations
    let category = "", workoutPlan = "", workoutLink = "", dietaryPlan = "", dietaryLink = "";

    // Determine BMI category and corresponding recommendations
    if (bmi < 18.5) {
        // Case: Underweight
        category = "Underweight";
        dietaryPlan = "Increase caloric intake with healthy fats and proteins.";
        dietaryLink = "<a href='https://example.com/underweight-diet' target='_blank'>Dietary Tips</a>";
        workoutPlan = "Focus on strength training.";
        workoutLink = "<a href='https://example.com/underweight-workout' target='_blank'>Workout Tips</a>";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        // Case: Normal weight
        category = "Normal weight";
        dietaryPlan = "Follow a balanced diet.";
        dietaryLink = "<a href='https://example.com/normal-diet' target='_blank'>Dietary Tips</a>";
        workoutPlan = "Maintain a balanced exercise routine.";
        workoutLink = "<a href='https://example.com/normal-workout' target='_blank'>Workout Tips</a>";
    } else {
        // Case: Overweight
        category = "Overweight";
        dietaryPlan = "Focus on low-calorie, high-fiber foods.";
        dietaryLink = "<a href='https://example.com/overweight-diet' target='_blank'>Dietary Tips</a>";
        workoutPlan = "Include more cardio.";
        workoutLink = "<a href='https://example.com/overweight-workout' target='_blank'>Workout Tips</a>";
    }

    // Update the result section with calculated BMI and recommendations
    document.getElementById("bmi-value").textContent = `Your BMI is ${bmi}`; // Display BMI value
    document.getElementById("bmi-category").textContent = `Category: ${category}`; // Display BMI category
    document.getElementById("workout-plan").textContent = `Workout Plan: ${workoutPlan}`; // Display workout recommendation
    document.getElementById("workout-link").innerHTML = workoutLink; // Add link for workout tips
    document.getElementById("dietary-plan").textContent = `Dietary Plan: ${dietaryPlan}`; // Display dietary recommendation
    document.getElementById("dietary-link").innerHTML = dietaryLink; // Add link for dietary tips

    // Make the result section visible
    document.getElementById("result-section").classList.remove("hidden");
});

// Event listener for the "Reset" button
document.getElementById("reset-btn").addEventListener("click", function () {
    // Hide the result section
    document.getElementById("result-section").classList.add("hidden");

    // Reset all input fields in the form
    document.getElementById("bmi-form").reset();
});
