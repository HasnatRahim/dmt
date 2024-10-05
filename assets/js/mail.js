window.onload = function() {
    emailjs.init("iUK6PbVE3KbxPt9de"); // Replace this with your actual public key
    emailjs.debug = true; // Enable debugging
};

function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    console.log("Subject:", subject); // Debugging log for subject

    emailjs.send("service_gddjlmn", "template_e4a8vhb", {
        from_name: name,
        from_email: email,
        subject: subject, // Ensure the subject is passed correctly
        message: message
    }).then(() => {
        alert('Message sent successfully!');
        form.reset(); // Reset form fields after submission
    }).catch((err) => {
        console.error('Error:', err);
        alert('Failed to send message: ' + JSON.stringify(err));
    });
}
