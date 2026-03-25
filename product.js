// Select all product items
const productItems = document.querySelectorAll('.product-item');

productItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get product ID from data-id attribute
    const productId = item.dataset.id;

    // Send POST request to server
    fetch('http://localhost:3000/product', {
      method: 'POST', // send POST request
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: productId }) // send product ID
    })
    .then(res => res.json())
    .then(data => console.log('Server response:', data))
    .catch(err => console.error(err));
  });
});