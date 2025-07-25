// Função chamada quando o mouse entra em um card
function handleMouseEnter() {
  // Adiciona a classe que aplica o efeito de hover no card
  this.classList.add('s-card--hovered');

  // Define o ID do <body> com base no ID do card + "-hovered"
  // Isso é usado para alterar o fundo da página dinamicamente via CSS
  document.body.id = `${this.id}-hovered`;
}

// Função chamada quando o mouse sai de um card
function handleMouseLeave() {
  // Remove a classe de hover do card
  this.classList.remove('s-card--hovered');

  // Limpa o ID do <body>, removendo o fundo dinâmico
  document.body.id = '';
}

// Função que adiciona os eventos de mouse (hover) a todos os cards
function addEventListenersToCards() {
  // Seleciona todos os elementos com a classe 's-card'
  const cardElements = document.getElementsByClassName('s-card');

  // Percorre todos os cards encontrados
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];

    // Adiciona o evento de mouseenter (passar o mouse)
    card.addEventListener('mouseenter', handleMouseEnter);

    // Adiciona o evento de mouseleave (tirar o mouse)
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

// Aguarda o carregamento completo da página para iniciar os eventos nos cards
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

// Função chamada ao clicar em um botão do carrossel
function selectCarouselItem(selectedButtonElement) {
  // Pega o ID do botão clicado (assumido como "1", "2", "3" etc.)
  const selectedItem = selectedButtonElement.id;

  // Seleciona o carrossel
  const carousel = document.querySelector('.s-cards-carousel');

  // Obtém o valor atual do transform (ex: rotateY(0deg))
  const transform = carousel.style.transform;

  // Extrai o valor atual de rotação em graus
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);

  // Calcula o novo ângulo com base no item selecionado (cada item gira 120 graus)
  const rotateYDeg = -120 * (Number(selectedItem) - 1);

  // Substitui o valor antigo de rotação pelo novo
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  // Aplica a nova rotação ao carrossel
  carousel.style.transform = newTransform;

  // Remove a classe de "ativo" do botão anterior
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');

  // Adiciona a classe de "ativo" ao botão clicado
  selectedButtonElement.classList.add('s-controller__button--active');
}
