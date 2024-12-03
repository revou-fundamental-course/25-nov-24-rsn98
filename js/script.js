// Function to calculate BMI and display results
document.getElementById("calculate-btn").addEventListener("click", function () {
    // Get input values
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    // Validate inputs
    if (!gender || isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Determine BMI category and workout/dietary plans
    let category = "";
    let workoutPlan = "";
    let workoutLink = "";
    let dietaryPlan = "";
    let dietaryLink = "";

    if (bmi < 18.5) {
        category = "Underweight";
        dietaryPlan = "Increase caloric intake with healthy fats and proteins.";
        dietaryLink = "<a href='https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/underweight/faq-20058429#:~:text=Add%20extras%20to%20your%20dishes,Try%20smoothies%20and%20shakes.' target='_blank'>Dietary Tips for Underweight</a>";
        if (gender === "male") {
            workoutPlan = "Focus on strength training and moderate cardio.";
            workoutLink = "<a href='https://www.menshealth.com/fitness/a19540601/skinny-man-transformation-plan/' target='_blank'>Skinny Man Transformation Plan</a>";
        } else if (gender === "female") {
            workoutPlan = "Focus on building muscle with strength training.";
            workoutLink = "<a href='https://bonytobombshell.com/workout-program-for-building-muscle-women/' target='_blank'>Workout Program for Building Muscle (Women)</a>";
        }
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
        dietaryPlan = "Follow a balanced diet rich in fruits, vegetables, and lean proteins.";
        dietaryLink = "<a href='https://www.cdc.gov/healthy-weight-growth/healthy-eating/index.html' target='_blank'>Healthy Eating Guide</a>";
        if (gender === "male") {
            workoutPlan = "Maintain a balanced exercise routine.";
            workoutLink = "<a href='https://www.menshealth.com/uk/workouts/a759093/the-workout-plan-for-skinny-men/' target='_blank'>The Workout Plan for Skinny Men</a>";
        } else if (gender === "female") {
            workoutPlan = "Maintain your weight with balanced exercises.";
            workoutLink = "<a href='https://www.verywellfit.com/exercise-and-weight-loss-for-women-1231551' target='_blank'>Exercise and Weight Loss for Women</a>";
        }
    } else if (bmi >= 25) {
        category = "Overweight or Obese";
        dietaryPlan = "Reduce calorie intake and focus on low-fat, high-fiber foods.";
        dietaryLink = "<a href='https://www.nhs.uk/conditions/obesity/treatment/' target='_blank'>Obesity Treatment and Diet Plan</a>";
        if (gender === "male") {
            workoutPlan = "Include more cardio and strength training.";
            workoutLink = "<a href='https://www.menshealth.com/uk/building-muscle/a745472/burn-fat-build-muscle-145158/' target='_blank'>Burn Fat, Build Muscle Plan</a>";
        } else if (gender === "female") {
            workoutPlan = "Start with beginner-friendly workouts.";
            workoutLink = "<a href='https://www.verywellfit.com/best-workouts-if-youre-overweight-3495993' target='_blank'>Best Workouts for Overweight Women</a>";
        }
    }

    // Display results
    document.getElementById("bmi-value").textContent = `Your BMI is ${bmi}`;
    document.getElementById("bmi-category").textContent = `Category: ${category}`;
    document.getElementById("workout-plan").textContent = `Workout Plan: ${workoutPlan}`;
    document.getElementById("workout-link").innerHTML = `Workout Link: ${workoutLink}`; // Display workout link under workout plan
    document.getElementById("dietary-plan").textContent = `Dietary Plan: ${dietaryPlan}`;
    document.getElementById("dietary-link").innerHTML = `Dietary Link: ${dietaryLink}`; // Display dietary link under dietary plan
    document.getElementById("result-section").classList.remove("hidden");
});
