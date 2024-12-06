document.getElementById("calculate-btn").addEventListener("click", function () {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (!gender || isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = "", workoutPlan = "", workoutLink = "", dietaryPlan = "", dietaryLink = "";

    if (bmi < 18.5) {
        category = "Underweight";
        dietaryPlan = "Increase caloric intake with healthy fats and proteins.";
        dietaryLink = "<a href='https://example.com/underweight-diet' target='_blank'>Dietary Tips</a>";
        workoutPlan = "Focus on strength training.";
        workoutLink = "<a href='https://example.com/underweight-workout' target='_blank'>Workout Tips</a>";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
        dietaryPlan = "Follow a balanced diet.";
        dietaryLink = "<a href='https://example.com/normal-diet' target='_blank'>Dietary Tips</a>";
        workoutPlan = "Maintain a balanced exercise routine.";
        workoutLink = "<a href='https://example.com/normal-workout' target='_blank'>Workout Tips</a>";
    } else {
        category = "Overweight";
        dietaryPlan = "Focus on low-calorie, high-fiber foods.";
        dietaryLink = "<a href='https://example.com/overweight-diet' target='_blank'>Dietary Tips</a>";
        workoutPlan = "Include more cardio.";
        workoutLink = "<a href='https://example.com/overweight-workout' target='_blank'>Workout Tips</a>";
    }

    document.getElementById("bmi-value").textContent = `Your BMI is ${bmi}`;
    document.getElementById("bmi-category").textContent = `Category: ${category}`;
    document.getElementById("workout-plan").textContent = `Workout Plan: ${workoutPlan}`;
    document.getElementById("workout-link").innerHTML = workoutLink;
    document.getElementById("dietary-plan").textContent = `Dietary Plan: ${dietaryPlan}`;
    document.getElementById("dietary-link").innerHTML = dietaryLink;
    document.getElementById("result-section").classList.remove("hidden");
});

document.getElementById("reset-btn").addEventListener("click", function () {
    document.getElementById("result-section").classList.add("hidden");
    document.getElementById("bmi-form").reset();
});
