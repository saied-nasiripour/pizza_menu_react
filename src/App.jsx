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
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
    const pizzas = pizzaData;
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
                ) : (
                    <p>We&apos;re still working on our menu. Please come back later :)</p>
                )
            }

            {/*<Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            />*/}
        </main>
    );
}

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 3}</span>
            </div>
        </li>
    );
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
                isOpen ? (
                    <div className="order">
                        <p>
                            We&apos;re open until {closeHour}:00. Come visit us or order online.
                        </p>
                        <button className="btn">order</button>
                    </div>
                ) : (
                    <p>We&apos;re happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
                )
            }
        </footer>
    );
  // return React.createElement("footer", null, "We&apos;re currently open!");
}

export default App;
