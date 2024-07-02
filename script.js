document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const utcDay = dayNames[now.getUTCDay()];
        const utcHours = now.getUTCHours().toString().padStart(2, '0');
        const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
        const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');

        const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds} UTC`;

        document.getElementById("currentDay").textContent = ` ${utcDay}`;
        document.getElementById("currentTime").textContent = ` ${utcTime}`;
    }

    updateTime();
    setInterval(updateTime, 1000); // Update every second
});


