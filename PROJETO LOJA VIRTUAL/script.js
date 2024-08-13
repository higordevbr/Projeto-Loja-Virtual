const products = [
  { id: 1, name: 'Conjunto Masc. Overflow Bege', price: 39.99, image: 'img/Mens Tracksuits Sets.jfif' },
  { id: 2, name: 'Conjunto Femimino Preto e Branco', price: 89.99, image: '/img/Calças bloco de cores com estampa gráfica de bolso e cintura elástica.jfif' },
  { id: 3, name: 'Conjunto masc. Preto e Azul Turquesa', price: 29.99, image: 'img/COMO MELHORAR SUA IMAGEM PESSOAL_ Passe uma MENSAGEM com suas ROUPAS! copy.jfif' },
  { id: 4, name: 'Jaqueta Street Wear', price: 59.99, image: 'img/Homens Algodão Gráfica Letra Jaqueta Denim Sem Camiseta.jfif' },
  { id: 5, name: 'Conjunto Nike', price: 59.99, image: 'img/Pin on Streetwear men outfits.jfif' },
  { id: 6, name: 'Blusa Moleton', price: 59.99, image: 'img/Unisex Casual Printed Streetwear Light Weight Hoodie - White _ M.jfif' }
];

const cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} - R$${product.price.toFixed(2)}`;
      cartItems.appendChild(li);
      total += product.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

function renderProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>R$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
      `;
      productList.appendChild(productDiv);
  });
}

renderProducts();
