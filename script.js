const cart = [];
const savedForLater = [];

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    const productId = card.dataset.id;
    const productName = card.querySelector('h3').textContent;
    const productPrice = card.querySelector('p').textContent;

    cart.push({ id: productId, name: productName, price: productPrice });
    alert(`${productName} has been added to your cart!`);
  });
});

document.querySelectorAll('.save-for-later').forEach((button) => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    const productId = card.dataset.id;
    const productName = card.querySelector('h3').textContent;

    savedForLater.push({ id: productId, name: productName });
    alert(`${productName} has been saved for later!`);
  });
});
