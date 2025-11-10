import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Laptop", price: 700 },
    { id: 2, name: "Headphones", price: 100 },
    { id: 3, name: "Mouse", price: 50 },
  ];

  const addToCart = (p) => setCart([...cart, p]);
  const removeFromCart = (id) => setCart(cart.filter((c) => c.id !== id));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: 20 }}>
      {/* Simple Navigation */}
      <nav style={{ marginBottom: 20 }}>
        {["home", "products", "cart", "checkout"].map((p) => (
          <button key={p} onClick={() => setPage(p)} style={{ margin: 5 }}>
            {p.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Pages */}
      {page === "home" && <h2>🏠 Welcome to SimpleStore</h2>}

      {page === "products" && (
        <div>
          <h2>🛍️ Products</h2>
          {products.map((p) => (
            <div key={p.id} style={{ margin: 10 }}>
              {p.name} - ${p.price}{" "}
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}

      {page === "cart" && (
        <div>
          <h2>🛒 Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((c) => (
              <div key={c.id} style={{ margin: 10 }}>
                {c.name} - ${c.price}{" "}
                <button onClick={() => removeFromCart(c.id)}>Remove</button>
              </div>
            ))
          )}
          <h3>Total: ${total}</h3>
        </div>
      )}

      {page === "checkout" && (
        <div>
          <h2>💳 Checkout</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <p>Total Amount: ${total}</p>
              <button
                onClick={() => {
                  alert("Order Placed!");
                  setCart([]);
                  setPage("home");
                }}
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;