import pizzaData from '../public/data.js';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {/*{
                numPizzas > 0 && (
                    <ul className="pizzas">
                        {
                            pizzaData.map(
                                (pizza, idx) => (
                                    <Pizza
                                        key={idx}
                                        pizzaObj={pizza}
                                    />
                                )
                            )
                        }
                    </ul>
                )
            }*/}

            {
                numPizzas > 0 ? (
                    <>
                        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all
                            organic, all delicious.</p>
                        <ul className="pizzas">
                            {
                                pizzaData.map(
                                    (pizza, idx) => (
                                        <Pizza
                                            key={idx}
                                            pizzaObj={pizza}
                                        />
                                    )
                                )
                            }
                        </ul>
                    </>
                ) : (
                    <p>We&apos;re still working on our menu. Please come back later :)</p>
                )
            }
        </main>
    );
}

function Pizza({pizzaObj}) {

    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {/*{
                    pizzaObj.soldOut
                    ? <span>SOLD OUT</span>
                        : <span>{pizzaObj.price}</span>
                }*/}
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Order({closeHour, openHour}) {
    return <div className="order">
        <p>
            We&apos;re open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
        </p>
        <button className="btn">order</button>
    </div>;
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.debug("isOpen : ", isOpen);

    return (
        <footer className="footer">
            {/*{
                isOpen && (
                    <div className="order">
                        <p>
                            We&apos;re open until {closeHour}:00. Come visit us or order online.
                        </p>
                        <button className="btn">order</button>
                    </div>
                )
            }*/}

            {
                isOpen ? <Order closeHour={closeHour} openHour={openHour}/> : (
                    <p>We&apos;re happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
                )
            }
        </footer>
    );
  // return React.createElement("footer", null, "We&apos;re currently open!");
}

export default App;
