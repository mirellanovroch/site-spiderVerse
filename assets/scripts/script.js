// Função executada quando o mouse entra em um card
function handleMouseEnter() {
  // Adiciona a classe que aplica o efeito visual de hover no card
  this.classList.add('s-card--hovered');

  // Define o ID do <body> com base no ID do card + "-hovered"
  // Isso permite mudar o fundo da página dinamicamente via CSS
  document.body.id = `${this.id}-hovered`;
}

// Função executada quando o mouse sai de um card
function handleMouseLeave() {
  // Remove a classe de hover do card
  this.classList.remove('s-card--hovered');

  // Remove o ID do <body>, voltando ao fundo padrão
  document.body.id = '';
}

// Função que adiciona os eventos de hover para todos os cards na página
function addEventListenersToCards() {
  // Seleciona todos os elementos com a classe 's-card'
  const cardElements = document.getElementsByClassName('s-card');

  // Percorre todos os cards encontrados
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];

    // Adiciona evento para quando o mouse entra no card
    card.addEventListener('mouseenter', handleMouseEnter);

    // Adiciona evento para quando o mouse sai do card
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

// Garante que os eventos só sejam adicionados depois que o DOM estiver carregado
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

// Função executada quando um botão do carrossel é clicado
function selectCarouselItem(selectedButtonElement) {
  // Obtém o ID do botão clicado (ex: "1", "2", "3")
  const selectedItem = selectedButtonElement.id;

  // Seleciona o carrossel de cards
  const carousel = document.querySelector('.s-cards-carousel');

  // Obtém o valor atual da transformação CSS do carrossel
  const transform = carousel.style.transform;

  // Usa uma expressão regular para extrair o valor atual de rotateY
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);

  // Calcula o novo valor de rotação com base no item selecionado
  const rotateYDeg = -120 * (Number(selectedItem) - 1);

  // Substitui o valor antigo por um novo no estilo transform
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  // Aplica o novo valor de rotação ao carrossel
  carousel.style.transform = newTransform;

  // Remove a classe "ativo" do botão que estava selecionado
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');

  // Adiciona a classe "ativo" ao botão que foi clicado
  selectedButtonElement.classList.add('s-controller__button--active');
}

function selectCarouselItem(selectedButtonElement){
  const carousel = document.querySelector('.s-cards-carousel');
  const selectedItem = selectedButtonElement.id;
  const transform = carousel.computedStyleMap.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) -1 );
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('.s-controller__button--active');
  selectedButtonElement.classList.add('.s-controller__button--active');
}