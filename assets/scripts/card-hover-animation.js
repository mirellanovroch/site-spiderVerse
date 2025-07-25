// Função chamada quando o mouse entra em um card
function handleMouseEnter() {
  // Adiciona a classe que indica que o card está com o mouse em cima
  this.classList.add('s-card--hovered');

  // Define o id do body com base no id do card (por exemplo: "card1-hovered")
  document.body.id = `${this.id}-hovered`;
}

// Função chamada quando o mouse sai de um card
function handleMouseLeave() {
  // Remove a classe de hover do card
  this.classList.remove('s-card--hovered');

  // Remove o id do body (limpa o efeito visual aplicado)
  document.body.id = '';
}

// Adiciona os eventos de mouse aos cards
function addEventListenersToCards() {
  // Seleciona todos os elementos com a classe 's-card'
  const cardElements = document.getElementsByClassName('s-card');
  
  // Percorre todos os cards encontrados
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];

    // Adiciona evento quando o mouse entra no card
    card.addEventListener('mouseenter', handleMouseEnter);

    // Adiciona evento quando o mouse sai do card
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

// Quando o conteúdo da página for carregado, adiciona os eventos aos cards
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
