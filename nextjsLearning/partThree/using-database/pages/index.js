import { useState, useRef } from 'react';

function HomePage() {
  const titleInpurRef = useRef();
  const priceInpurRef = useRef();
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState('');
  async function addProductHandler(e) {
    e.preventDefault();
    const title = titleInpurRef.current.value;
    const price = priceInpurRef.current.value;
    const reqBody = { title, price };
    const response = await fetch('/api/product', { method: 'POST', body: JSON.stringify(reqBody), headers: { 'Content-Type': 'application/json' } });
    const responseData = await response.json();
  }
  async function showProductsHandler() {
    const response = await fetch('/api/product');
    const responseData = await response.json();
    setProducts(responseData.products);
  }
  async function showPriceHandler(id) {
    const response = await fetch(`/api/${id}`);
    const responseData = await response.json();
    setPrice(responseData.product.price);
  }
  return (
    <div>
      <h2>Home Page</h2>
      <form onSubmit={addProductHandler}>
        <div>
          <input type='text' placeholder='title' ref={titleInpurRef} />
        </div>
        <div>
          <input type='text' placeholder='price' ref={priceInpurRef} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <div>
        <button onClick={showProductsHandler}>Show Products</button>
      </div>
      <ul>
        {
          products.map((item) => {
            return (
              <li key={item._id} onClick={showPriceHandler.bind(null, item._id)}>{item.title}</li>
            );
          })
        }
      </ul>
      {
        price ? (<p>Result Click On The Product For than Price: {price}$</p>) : (<p>Please Click On The <q>ShowProducts</q> Button, Then Click On The <q>Products</q> For Than Price .</p>)
      }
    </div>
  );
}

export default HomePage;