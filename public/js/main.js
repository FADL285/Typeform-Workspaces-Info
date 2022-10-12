// Token input element
const tokenInput = document.getElementById('token');
// Eye switcher element & icon
const eyeSwitcher = document.getElementById('eye');
const eyeSwitcherIcon = document.getElementById('eye-icon');
// Dialog, dialog trigger & dialog close elements
const dialog = document.getElementById('dialog');
const dialogTrigger = document.getElementById('dialog-trigger');
const dialogClose = document.getElementById('dialog-close');

// Function to toggle the token input type
function toggleTokenInputType() {
  if (tokenInput.type === 'password') {
    tokenInput.type = 'text';
    eyeSwitcherIcon.classList.remove('bg-eye-slash');
    eyeSwitcherIcon.classList.add('bg-eye');
  } else {
    tokenInput.type = 'password';
    eyeSwitcherIcon.classList.remove('bg-eye');
    eyeSwitcherIcon.classList.add('bg-eye-slash');
  }
}

eyeSwitcher.addEventListener('click', toggleTokenInputType);

// Open dialog on trigger
dialogTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.showModal();
});

// Close dialog on close
dialogClose.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.close();
});
