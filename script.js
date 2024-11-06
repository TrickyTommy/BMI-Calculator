function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
  
    if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid values for weight and height.";
        return;
    }
  
    const bmi = weight / (height * height);
    let category = "";
    let colorClass = ""; // Class name for color highlight
    let categoryIndex = 0; // To identify row in the table
  
    if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "highlight-blue";
        categoryIndex = 0;
    } else if (bmi < 24.9) {
        category = "Normal Weight";
        colorClass = "highlight-green";
        categoryIndex = 1;
    } else if (bmi < 29.9) {
        category = "Overweight";
        colorClass = "highlight-yellow";
        categoryIndex = 2;
    } else if (bmi < 34.9) {
        category = "Obesity Class I";
        colorClass = "highlight-orange";
        categoryIndex = 3;
    } else if (bmi < 39.9) {
        category = "Obesity Class II";
        colorClass = "highlight-red";
        categoryIndex = 4;
    } else {
        category = "Obesity Class III";
        colorClass = "highlight-brown";
        categoryIndex = 5;
    }
  
    document.getElementById("result").innerHTML = `Your result: <strong>${category}</strong>`;
    
    // Create BMI bar
    const bmiBar = document.getElementById("bmi-bar");
    bmiBar.innerHTML = ""; // Clear previous bar
  
    const categories = ["blue", "green", "yellow", "orange", "red", "brown"];
    categories.forEach((col) => {
        for (let i = 0; i < 10; i++) {
            const segment = document.createElement("div");
            segment.className = `bmi-bar-segment ${col}`;
            if (col === colorClass.split("-")[1]) segment.style.border = "2px solid black";
            bmiBar.appendChild(segment);
        }
    });
  
    // Highlight the corresponding row in the table with the appropriate color
    const rows = document.querySelectorAll(".bmi-table tbody tr");
    rows.forEach((row, index) => {
        row.classList.remove("highlight-blue", "highlight-green", "highlight-yellow", "highlight-orange", "highlight-red", "highlight-brown");
        if (index === categoryIndex) {
            row.classList.add(colorClass);
        }
    });
}

function resetBMI() {
    // Reset input fields
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
  
    // Clear the result display
    document.getElementById("result").innerHTML = "";
    document.getElementById("bmi-bar").innerHTML = "";
  
    // Remove highlight from all rows in the BMI table
    const rows = document.querySelectorAll(".bmi-table tbody tr");
    rows.forEach((row) => {
        row.classList.remove("highlight-blue", "highlight-green", "highlight-yellow", "highlight-orange", "highlight-red", "highlight-brown");
    });
}
