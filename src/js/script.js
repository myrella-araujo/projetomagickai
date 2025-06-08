// Funcionalidade dos filtros
document.addEventListener('DOMContentLoaded', function() {
  const btnFiltrar = document.querySelector('.btn-filtrar');
  const selectCategoria = document.getElementById('categoria');
  const inputPreco = document.getElementById('preco');
  const cartas = document.querySelectorAll('.carta');
  
  // Função para filtrar as cartas
  function filtrarCartas() {
    const categoriaFiltro = selectCategoria.value.toLowerCase();
    const precoMaximo = inputPreco.value ? parseFloat(inputPreco.value.replace(',', '.')) : Infinity;
    
    cartas.forEach(carta => {
      const categoriaItem = carta.getAttribute('data-categoria').toLowerCase();
      const precoItem = parseFloat(carta.getAttribute('data-preco'));
      
      // Verificar se a carta atende aos critérios de filtro
      const atendeCategoriaFiltro = categoriaFiltro === '' || categoriaItem === categoriaFiltro;
      const atendePrecoFiltro = isNaN(precoMaximo) || precoItem <= precoMaximo;
      
      // Mostrar ou esconder a carta com base nos filtros
      if (atendeCategoriaFiltro && atendePrecoFiltro) {
        carta.style.display = 'block';
      } else {
        carta.style.display = 'none';
      }
    });
  }
  
  // Adicionar evento de clique ao botão de filtrar
  btnFiltrar.addEventListener('click', filtrarCartas);
  
  // Adicionar evento de tecla Enter no campo de preço
  inputPreco.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      filtrarCartas();
    }
  });
  
  // Animação para os botões de compra
  const botoesComprar = document.querySelectorAll('.btn-comprar');
  botoesComprar.forEach(botao => {
    botao.addEventListener('click', function() {
      this.textContent = 'Adicionado!';
      this.style.backgroundColor = '#219653';
      
      setTimeout(() => {
        this.textContent = 'Comprar';
        this.style.backgroundColor = '';
      }, 1500);
    });
  });
});
