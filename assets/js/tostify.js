// For mail sending
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // Form ko reload hone se rokta hai

    const formData = new FormData(this); // Form data ko collect karta hai

    try {
      const response = await fetch("https://formspree.io/f/xanyyzgp", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        alert("Email sent successfully!"); // Email successfully sent
        this.reset(); // Form ko reset karne ke liye
      } else {
        alert("Error in sending email."); // Error in sending email
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the email."); // General error message
    }
  });
