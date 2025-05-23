const openBtn = document.getElementById('openSignIn');
const closeBtn = document.getElementById('closeSignIn');
const modal = document.getElementById('signInModal');

openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});