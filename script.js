const inputField = document.querySelector("#calendar");
const ageData = document.querySelector(".age-container");

const getAge = (event) => {
    event.preventDefault(); // Prevent form submission

    const inputData = new Date(inputField.value);

    if (isNaN(inputData)) {
        alert("Please select a valid date.");
        return;
    }

    const presentDate = new Date();

    let age = presentDate.getFullYear() - inputData.getFullYear();
    let monthDiff = presentDate.getMonth() - inputData.getMonth(); // Use 'let'
    let dayDiff = presentDate.getDate() - inputData.getDate(); // Use 'let'

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age >= 0) {
        const para = document.createElement("p");
        monthDiff = Math.abs(monthDiff); // Correcting after reassignment
        dayDiff = Math.abs(dayDiff); // Correcting after reassignment
        para.innerHTML = `Age is ${age} yrs, ${monthDiff} months, and ${dayDiff} days old.`;

        // Clear previous result
        ageData.innerHTML = ""; 
        ageData.append(para); // Append the new result
        inputField.value="";
    }
};

document.querySelector(".calculate").addEventListener('click', getAge);
