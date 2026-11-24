// Attach event listener to the booking form
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // 1. Get the values from the form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var guests = document.getElementById("guests").value;

  // 2. Format the date (e.g., "2026-11-25" -> "Wed, Nov 25, 2026")
  var formattedDate = new Date(date).toDateString();

  // 3. Hide the form and show the confirmation box
  document.querySelector(".booking-form").style.display = "none";
  
  var confirmBox = document.getElementById("confirmationBox");
  confirmBox.style.display = "block";

  // 4. Insert the booking details into the confirmation message
  document.getElementById("confirmDetails").innerHTML = 
    "Thank you, <strong>" + name + "</strong>!<br>" +
    "A table for <strong>" + guests + "</strong> has been reserved on <br>" +
    "<strong>" + formattedDate + "</strong> at <strong>" + time + "</strong>.<br>" +
    "A confirmation email has been sent to " + email + ".";

  // 5. Save to localStorage (Optional, but good practice)
  var bookingData = {
    name: name,
    email: email,
    date: formattedDate,
    time: time,
    guests: guests
  };
  localStorage.setItem("tableBooking", JSON.stringify(bookingData));
});

// Function to reset the form and book again
function resetBooking() {
  // Hide confirmation, show form
  document.getElementById("confirmationBox").style.display = "none";
  document.querySelector(".booking-form").style.display = "block";
  
  // Clear the form
  document.getElementById("bookingForm").reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});