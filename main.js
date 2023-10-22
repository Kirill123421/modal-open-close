const modal = document.querySelector('.modal');
const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');

openButton.addEventListener('click', () => {
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('open');
  }, 0);
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('open');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 0); 
});