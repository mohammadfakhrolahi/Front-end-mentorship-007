const signUpModal = document.querySelector('.sign-up-modal')
const closeBtn = document.querySelector('#close-btn-sign-up')

closeBtn.addEventListener('click', () => {
  signUpModal.style.display = 'none'
})