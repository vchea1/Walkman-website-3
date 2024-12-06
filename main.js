// Show discount message on promotion page
document.getElementById('discount-btn')?.addEventListener('click', function() {
    const message = document.getElementById('discount-message');
    message.textContent = "Special Discount: $125 only for today!";
    message.style.display = "block";
  });
  
  // Simple form validation
  document.getElementById('feedback-form')?.addEventListener('submit', function(event) {
    alert('Thank you for your feedback!');
    event.preventDefault();
  });
  