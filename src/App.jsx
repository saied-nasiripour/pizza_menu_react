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
    return (
        <main className="menu">
            <h2>Our Menu</h2>
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
{/*            <ul className="pizzas">
                {
                    pizzaData.map(
                        (pizza, idx) => {
                            return <Pizza
                                key={idx}
                                pizzaObj={pizza}
                            />
                        }
                    )
                }
            </ul>*/}
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
      {new Date().toLocaleTimeString()}. We&apos;re currently open!
    </footer>
  );
  // return React.createElement("footer", null, "We&apos;re currently open!");
}

export default App;
