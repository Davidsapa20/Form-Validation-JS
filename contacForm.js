const form = document.getElementById('form-section');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // This part of the code is to prevent the form from submitting if there are errors

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = "");
    // Reset previous error messages
    document.querySelector('#firstNameError').textContent = '';
    document.querySelector('#lastNameError').textContent = '';
    document.querySelector('#emailError').textContent = '';
    document.querySelector('#generalError').textContent = '';
    document.querySelector('#supportError').textContent = '';
    document.querySelector('#messageError').textContent = '';
    document.querySelector('#checkboxError').textContent = '';

    // Get form values
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#emailAddress').value.trim();
    const generalEnquiry = document.querySelector('#generalEnquiry').value.trim();
    const supportRequest = document.querySelector('#supportRequest').value.trim();
    const message = document.querySelector('#message').value.trim();
    const checkBox = document.querySelector('#checkBox');

    // Form validation
    let isValid = true;


    if (!firstName) {
        document.querySelector('#firstNameError').textContent = "First name is required";
        isValid = false;
    }
    if (!lastName) {
        document.querySelector('#lastNameError').textContent = "Last name is required";
        isValid = false;
    }
    if (!email) {
        document.querySelector('#emailError').textContent = "Email is required";
        isValid = false;
    }
    if (!generalEnquiry) {
        document.querySelector('#genetalError').textContent = "you must choose one, it is required";
        isValid = false;
    }
    if (!supportRequest) {
        document.querySelector('#supportError').textContent = "you must choose one, it is required";
        isValid = false;
    }
    if (!message) {
        document.querySelector('#messageError').textContent = "Message is required";
        isValid = false;
    }
    if (!checkBox) {
        document.querySelector('#checkboxError').textContent = "you must consent to being contacted.";
        isValid = false;
    }
    if (isValid) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});