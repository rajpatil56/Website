// Replace with your deployed Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbxLmxE4DQfEFUWxnsGtV9kkykyxT58nh2xm3OE7QDkUuU8v29yLZCZNGENKiC0dHKp38A/exec";

// Handle Booking Form
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch(scriptURL, { method: "POST", body: formData })
    .then(() => {
      alert("✅ Booking submitted successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("❌ Error submitting booking. Please try again.");
    });
});

// Handle Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch(scriptURL, { method: "POST", body: formData })
    .then(() => {
      alert("✅ Message sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("❌ Error sending message. Please try again.");
    });
});