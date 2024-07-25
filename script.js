// Obtém os elementos
const showPopupBtn = document.getElementById('showPopupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

// Adiciona o evento de clique para mostrar o pop-up
showPopupBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Adiciona o evento de clique para fechar o pop-up
closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Adiciona o evento de clique fora do pop-up para fechá-lo
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
