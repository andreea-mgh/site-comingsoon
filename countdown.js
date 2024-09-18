// Set the date we're counting down to
const openingDate = new Date("Jan 31, 2025 15:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = openingDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the results in the corresponding HTML elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished, show a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.opening-soon').innerHTML = "We Are Open!";
    document.querySelector('.countdown-container').style.display = 'none';
  }
}, 1000);
