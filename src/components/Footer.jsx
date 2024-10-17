function Footer() {
  const date = new Date();
  const now = date.getHours();

  const openingTime = 9;
  const closingTime = 18;

  // console.log(date, timeNow);

  if (now > closingTime && openingTime < now) {
    return (
      <div className="order">
        <p>
          We're Closed. Kindly Visit Us between {openingTime}:00 to{" "}
          {closingTime}:00.
        </p>
      </div>
    );
  }

  return (
    <div className="order">
      <p>
        We're open from {openingTime}:00 to {closingTime}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Footer;
