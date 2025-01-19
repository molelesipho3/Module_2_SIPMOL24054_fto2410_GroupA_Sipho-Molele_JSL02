// Displays a welcome message with the current date
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Displays a new workout routine
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// Adds a new fitness goal and prevents duplicates
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim();
    const goalList = document.querySelectorAll('#goalList li');

    // Check if the input is empty
    if (!goalInput) {
        alert('Please enter a fitness goal!');
        return;
    }

    // Check if the goal already exists in the list
    const isDuplicate = Array.from(goalList).some(goal => goal.textContent === goalInput);
    if (isDuplicate) {
        alert('This goal already exists!');
        return;
    }

    // Add the new goal if it's not a duplicate
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    document.querySelector('#goalList').appendChild(newGoal);

    // Clear the input field after adding the goal
    document.querySelector('#goalInput').value = '';
};

document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Tracks water intake and updates the display
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

// Updates progress charts
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

// Toggles between light and dark themes
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Submits the meal plan form
const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
