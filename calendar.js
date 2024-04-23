// Get the current date
let currentDate = new Date();

// Function to generate and display the calendar
function generateCalendar() {
    const monthYearElement = document.getElementById("month-year");
    const daysContainer = document.querySelector(".days");

    // Get the month and year
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    // Display month and year
    monthYearElement.textContent = `${month} ${year}`;

    // Clear previous days
    daysContainer.innerHTML = "";

    // Get the first day of the month
    const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1);
    const startingDay = firstDayOfMonth.getDay();

    // Get the last day of the month
    const lastDayOfMonth = new Date(year, currentDate.getMonth() + 1, 0);
    const totalDays = lastDayOfMonth.getDate();

    // Generate days
    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        daysContainer.appendChild(emptyDay);
    }

    for (let i = 1; i <= totalDays; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;
        // Placeholder for displaying data
        day.setAttribute("data-placeholder", "Data for " + i);
        daysContainer.appendChild(day);
    }
}

// Function to go to the previous month
function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar();
}

// Function to go to the next month
function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar();
}

// Call the function to generate and display the calendar
generateCalendar();

