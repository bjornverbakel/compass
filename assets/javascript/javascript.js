// Send popup alert on click of contact page
let contactBtns = document.querySelectorAll('.contactBtn');
contactBtns.forEach(contactBtn => {
  contactBtn.addEventListener('click', () => {
    alert('Contact page is currently unavailable.');
  });
});