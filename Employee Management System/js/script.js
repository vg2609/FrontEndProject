
// Function to format date & time
function updateDateTime() {
  const now = new Date();

  // Weekday names
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[now.getDay()];

  // Month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = months[now.getMonth()];

  const date = now.getDate();
  const year = now.getFullYear();

  // Time in HH:MM:SS format
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("date-time").textContent =
    `It's ${dayName}, ${date} ${monthName} ${year} | ${hours}:${minutes}:${seconds}`;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();


// Working Times Chart (Bar)
const ctx1 = document.getElementById("workingChart");
new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Overtime Hours",
        data: [2, 3, 2, 3, 3, 2],
        backgroundColor: "#f87171"
      },
      {
        label: "Scheduled Hours",
        data: [6, 7, 6, 5, 6, 5],
        backgroundColor: "#3b82f6"
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: { y: { beginAtZero: true, max: 10 } }
  }
});

// Employee Structure Chart (Doughnut)
const ctx2 = document.getElementById("employeeChart");
new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#ef4444", "#22c55e"]
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom" }
    }
  }
});
