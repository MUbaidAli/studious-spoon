function Pizza(props) {
  // console.log(pizzaData);

  const { pizza } = props;

  return (
    <>
      <li className={`pizza ${pizza.soldOut && "sold-out"}`}>
        {/* <img src="./src/assets/pizzas/focaccia.jpg" alt={pizza.name} /> */}
        <img src={`./src/assets/${pizza.photoName}`} alt={pizza.name} />
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.soldOut ? "SOLD OUT" : pizza.price} </span>
        </div>
      </li>
    </>
  );
}

export default Pizza;
