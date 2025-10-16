var typed=new Typed(".text",{
    strings:["Frontend Developer","CS Student"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');

};

// Get the form element
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload on submit

  // Get form values
  const name = form.name.value;
  const email = form.email.value;
  const subject = form.subject.value;
  const address = form.address.value;

    // Create an object to store
  const formData = {
      name: name,
      email: email,
      subject: subject,
      address: address,
      date: new Date().toLocaleString() // optional timestamp
  };

  // Get existing submissions from localStorage or initialize empty array
  let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];

  // Add new submission
  submissions.push(formData);

  // Save back to localStorage
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

  // Optional: Clear form fields
  form.reset();

  // Optional: Show confirmation
  alert('Your message has been saved locally!');

  console.log('Saved submissions:', submissions);
});
