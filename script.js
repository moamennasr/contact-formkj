document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const data = {
    name: name,
    email: email,
    message: message
  };

  // Use AJAX or Fetch API to send the data to your server-side script for email processing
  fetch('send_email.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
      // Clear form after successful submission
      document.getElementById('contactForm').reset();
    } else {
      alert('Error occurred. Please try again later.');
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('Error occurred. Please try again later.');
  });
});
