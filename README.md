Stop-Watch

A simple and responsive Stopwatch Web App built using HTML, CSS, and Vanilla JavaScript. This project allows users to start, stop, and reset a stopwatch with accurate time tracking in minutes, seconds, and milliseconds.

Features

~ Start the stopwatch
~ Stop / pause the stopwatch
~ Reset the stopwatch to 00:00:00
~ Displays minutes : seconds : milliseconds
~ Prevents multiple timers from running at the same time
~ Clean and minimal user interface

Technologies Used

~ HTML5 – Structure of the app
~ CSS3 – Styling and layout
~ Vanilla JavaScript – Stopwatch logic using setInterval

Project Structure

stopwatch-app/
│
├── index.html # Stopwatch UI
├── index.css # Styling
├── index.js # Stopwatch functionality
└── README.md # Project documentation

How It Works

~ Clicking Start begins the timer using setInterval.
~ Time is updated every 10 milliseconds.
~ Stop pauses the timer without resetting the time.
~ Reset clears the timer and resets the display.
~ A boolean flag ensures only one timer runs at a time.









