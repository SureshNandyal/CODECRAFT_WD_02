let timer;
let isRunning = false;
let time = 0; // time in seconds
let lapTimes = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);  // Stop the timer
        document.getElementById('startStop').textContent = "Start";
    } else {
        timer = setInterval(updateTime, 10);  // Start the timer
        document.getElementById('startStop').textContent = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    time++;
    displayTime();
}

function displayTime() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    
    // Format the time to be 2 digits (e.g. 01:05:09)
    let formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('timeDisplay').textContent = formattedTime;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    lapTimes = [];
    displayTime();
    document.getElementById('startStop').textContent = "Start";
    document.getElementById('lapList').innerHTML = "";
}

function lap() {
    if (isRunning) {
        lapTimes.push(time); // Save the lap time in seconds
        displayLaps();
    }
}

function displayLaps() {
    const lapList = document.getElementById('lapList');
    lapList.innerHTML = ''; // Clear previous lap times
    
    lapTimes.forEach((lap, index) => {
        let lapItem = document.createElement('li');
        let hours = Math.floor(lap / 3600);
        let minutes = Math.floor((lap % 3600) / 60);
        let seconds = lap % 60;
        
        lapItem.textContent = `Lap ${index + 1}: ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        lapList.appendChild(lapItem);
    });
}
