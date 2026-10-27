import React, { useState } from "react";

function Flipkart() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);

  function trackOrder() {
    if (orderId.trim().toUpperCase() === "FK1001") {
      setOrder({
        product: "Samsung Galaxy Smartphone",
        price: 15999,
        status: "Shipped",
        delivery: "30 October 2026",
      });
    } else {
      setOrder("notfound");
    }
  }

  return (
    <div>
      <header style={styles.header}>
        <h2>Flipkart</h2>
        <span>Order Tracking</span>
      </header>

      <main style={styles.container}>
        <h1>Track Your Order</h1>
        <p>Enter your order ID to check your delivery status.</p>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter Order ID (FK1001)"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />

        <button style={styles.button} onClick={trackOrder}>
          Track Order
        </button>

        {order === "notfound" && (
          <p style={{ color: "red" }}>Order not found. Try FK1001.</p>
        )}

        {order && order !== "notfound" && (
          <div style={styles.card}>
            <h2>{order.product}</h2>
            <p>Order ID: {orderId.toUpperCase()}</p>
            <h3>Price: ₹{order.price}</h3>
            <p>Status: {order.status}</p>
            <p>Expected Delivery: {order.delivery}</p>

            <h3>Delivery Progress</h3>
            <p>✓ Order Placed</p>
            <p>✓ Packed</p>
            <p style={{ color: "blue" }}>● Shipped</p>
            <p>○ Out for Delivery</p>
            <p>○ Delivered</p>
          </div>
        )}
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#2874f0",
    color: "white",
    padding: "15px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    maxWidth: "700px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
  },
  input: {
    padding: "12px",
    width: "60%",
    maxWidth: "350px",
    marginRight: "10px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#fb641b",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  card: {
    marginTop: "30px",
    padding: "25px",
    textAlign: "left",
    backgroundColor: "#f5f7fb",
    borderRadius: "10px",
  },
};

export default Flipkart;