// components/auth-check.js

// Check if user has a valid JWT token
function isAuthenticated() {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return false;
  }
  
  // Basic check if token exists and hasn't expired
  // The token format is: header.payload.signature
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp * 1000; // Convert to milliseconds
    
    if (Date.now() >= expiry) {
      // Token expired, remove it
      localStorage.removeItem('token');
      return false;
    }
    
    return true;
  } catch (e) {
    // Invalid token format
    localStorage.removeItem('token');
    return false;
  }
}

// Get username from JWT token
function getUsername() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.username;
  } catch (e) {
    return null;
  }
}

export function checkAuthAndRedirect(targetPage) {
  if (isAuthenticated()) {
    // User is logged in, redirect to target page
    window.location.href = targetPage;
  } else {
    // User is not logged in, show modal
    showLoginModal();
  }
}

function showLoginModal() {
  // Prevent body scroll
  document.body.classList.add('modal-open');
  
  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'auth-modal-overlay';
  modal.innerHTML = `
    <div class="auth-modal">
      <div class="auth-modal-icon">
        <svg class="icon" width="48" height="48">
          <use href="./assets/icons/sprites.svg#account"></use>
        </svg>
      </div>
      <h2>Login Required</h2>
      <p>You need to be logged in to access your profile.</p>
      <div class="auth-modal-buttons">
        <button class="auth-modal-login">Log In</button>
        <button class="auth-modal-cancel">Cancel</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Helper function to close modal
  function closeModal() {
    modal.remove();
    document.body.classList.remove('modal-open');
  }
  
  // Add event listeners
  const loginBtn = modal.querySelector('.auth-modal-login');
  const cancelBtn = modal.querySelector('.auth-modal-cancel');
  
  loginBtn.addEventListener('click', () => {
    window.location.href = './login.html';
  });
  
  cancelBtn.addEventListener('click', () => {
    closeModal();
  });
  
  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function escapeHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escapeHandler);
    }
  });
}

// Export for use in HTML
window.checkAuthAndRedirect = checkAuthAndRedirect;
window.isAuthenticated = isAuthenticated;
window.getUsername = getUsername;