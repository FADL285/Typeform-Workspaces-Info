// Token input element
const tokenInput = document.getElementById('token');
// Eye switcher element & icon
const eyeSwitcher = document.getElementById('eye');
const eyeSwitcherIcon = document.getElementById('eye-icon');
// Dialog, dialog trigger & dialog close elements
const dialog = document.getElementById('dialog');
const dialogTrigger = document.getElementById('dialog-trigger');
const dialogClose = document.getElementById('dialog-close');
// Workspace list element
const workspaceList = document.getElementById('workspaces');

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

// Function to change clipboard icon when clicked
function changeClipboardIcon(element) {
  // Handle if user clicks on copy button again before timeout
  if (element.classList.contains('__copied')) return;
  element.classList.remove('bg-clipboard', '__copy');
  element.classList.add('bg-clipboard-check', '__copied');

  setTimeout(() => {
    element.classList.remove('bg-clipboard-check', '__copied');
    element.classList.add('bg-clipboard', '__copy');
  }, 3000);
}

// Function to copy workspace ID to clipboard
function copyWorkspaceID(id) {
  navigator.clipboard.writeText(id).then(
    () => {
      const element = document.getElementById(`copy-${id}`);
      changeClipboardIcon(element);
    },
    () => {
      alert('Failed to copy workspace ID to clipboard');
    }
  );
}

// Function to check if click is on copy button
function isCopyButton(element) {
  return element.classList.contains('__copy');
}

if (tokenInput) {
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
} else if (workspaceList) {
  workspaceList.addEventListener('click', ({ target }) => {
    if (isCopyButton(target)) {
      const id = target.dataset.id;
      copyWorkspaceID(id);
    }
  });
}
