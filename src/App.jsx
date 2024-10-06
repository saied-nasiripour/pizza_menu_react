import React from "react";

function Pizza() {
  return (
    <>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

function Footer() {
  return (
    <footer>
      {new Date().toLocaleTimeString()}. We&apos;re currently open!
    </footer>
  );
  // return React.createElement("footer", null, "We&apos;re currently open!");
}

export default App;
