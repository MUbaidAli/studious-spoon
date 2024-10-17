import Pizza from "./Pizza";

function Menu(props) {
  console.log(props.data);

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>

        <ul className="pizzas">
          {props.data.length > 0
            ? props.data.map((pizza, i) => <Pizza pizza={pizza} key={i} />)
            : "No Data Available"}
        </ul>
      </main>
    </>
  );
}

export default Menu;
