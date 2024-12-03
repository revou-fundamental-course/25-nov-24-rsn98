// Function to calculate BMI and display results
document.getElementById("calculate-btn").addEventListener("click", function () {
    // Get input values from the form
    const gender = document.getElementById("gender").value; // User's selected gender
    const age = parseInt(document.getElementById("age").value); // User's age (converted to an integer)
    const weight = parseFloat(document.getElementById("weight").value); // User's weight in kilograms
    const height = parseFloat(document.getElementById("height").value) / 100; // User's height in meters (converted from cm)

    // Validate inputs to ensure all fields are filled and have valid numbers
    if (!gender || isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Please fill in all fields correctly."); // Display alert if validation fails
        return; // Exit the function if inputs are invalid
    }

    // Calculate BMI using the formula: weight (kg) / height^2 (m^2)
    const bmi = (weight / (height * height)).toFixed(1); // Round the BMI to 1 decimal place

    // Initialize variables for BMI category, workout plan, and dietary plan
    let category = ""; // BMI category (e.g., Underweight, Normal weight, etc.)
    let workoutPlan = ""; // Recommended workout plan
    let workoutLink = ""; // Link to workout plan details
    let dietaryPlan = ""; // Recommended dietary plan
    let dietaryLink = ""; // Link to dietary plan details

    // Determine BMI category and corresponding recommendations
    if (bmi < 18.5) {
        // Underweight category
        category = "Underweight";
        dietaryPlan = "Increase caloric intake with healthy fats and proteins.";
        dietaryLink = "<a href='https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/underweight/faq-20058429#:~:text=Add%20extras%20to%20your%20dishes,Try%20smoothies%20and%20shakes.' target='_blank'>Dietary Tips for Underweight</a>";

        // Workout recommendations based on gender
        if (gender === "male") {
            workoutPlan = "Focus on strength training and moderate cardio.";
            workoutLink = "<a href='https://www.menshealth.com/fitness/a19540601/skinny-man-transformation-plan/' target='_blank'>Skinny Man Transformation Plan</a>";
        } else if (gender === "female") {
            workoutPlan = "Focus on building muscle with strength training.";
            workoutLink = "<a href='https://bonytobombshell.com/workout-program-for-building-muscle-women/' target='_blank'>Workout Program for Building Muscle (Women)</a>";
        }
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        // Normal weight category
        category = "Normal weight";
        dietaryPlan = "Follow a balanced diet rich in fruits, vegetables, and lean proteins.";
        dietaryLink = "<a href='https://www.cdc.gov/healthy-weight-growth/healthy-eating/index.html' target='_blank'>Healthy Eating Guide</a>";

        // Workout recommendations based on gender
        if (gender === "male") {
            workoutPlan = "Maintain a balanced exercise routine.";
            workoutLink = "<a href='https://www.menshealth.com/uk/workouts/a759093/the-workout-plan-for-skinny-men/' target='_blank'>The Workout Plan for Skinny Men</a>";
        } else if (gender === "female") {
            workoutPlan = "Maintain your weight with balanced exercises.";
            workoutLink = "<a href='https://www.verywellfit.com/exercise-and-weight-loss-for-women-1231551' target='_blank'>Exercise and Weight Loss for Women</a>";
        }
    } else if (bmi >= 25) {
        // Overweight or Obese category
        category = "Overweight or Obese";
        dietaryPlan = "Reduce calorie intake and focus on low-fat, high-fiber foods.";
        dietaryLink = "<a href='https://www.nhs.uk/conditions/obesity/treatment/' target='_blank'>Obesity Treatment and Diet Plan</a>";

        // Workout recommendations based on gender
        if (gender === "male") {
            workoutPlan = "Include more cardio and strength training.";
            workoutLink = "<a href='https://www.menshealth.com/uk/building-muscle/a745472/burn-fat-build-muscle-145158/' target='_blank'>Burn Fat, Build Muscle Plan</a>";
        } else if (gender === "female") {
            workoutPlan = "Start with beginner-friendly workouts.";
            workoutLink = "<a href='https://www.verywellfit.com/best-workouts-if-youre-overweight-3495993' target='_blank'>Best Workouts for Overweight Women</a>";
        }
    }

    // Display the BMI result and recommendations in the result section
    document.getElementById("bmi-value").textContent = `Your BMI is ${bmi}`; // Show the calculated BMI value
    document.getElementById("bmi-category").textContent = `Category: ${category}`; // Show the BMI category
    document.getElementById("workout-plan").textContent = `Workout Plan: ${workoutPlan}`; // Show the workout plan description
    document.getElementById("workout-link").innerHTML = `Workout Link: ${workoutLink}`; // Add clickable link to workout plan
    document.getElementById("dietary-plan").textContent = `Dietary Plan: ${dietaryPlan}`; // Show the dietary plan description
    document.getElementById("dietary-link").innerHTML = `Dietary Link: ${dietaryLink}`; // Add clickable link to dietary plan

    // Unhide the result section by removing the "hidden" class
    document.getElementById("result-section").classList.remove("hidden");
});
