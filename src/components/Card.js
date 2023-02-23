const Card = (props) => {
  return (
    <div className="card">
      {props.campaign ? (
        <div className="card-campaign">
          {" "}
          <span> {props.campaign}</span>
        </div>
      ) : (
        ""
      )}
      <img src={props.pic} alt={props.name + " picture"} />

      <h2>{props.name}</h2>
      <div className="card-button-wrapper">
        <span className="card-price"> {props.price}0 $</span>
        <button
          onClick={() => {
            props.addToCart({ name: props.name, price: props.price });
          }}
          id="buy"
        >
          Add to Cart
        </button>
        <div className="card-quantity">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <br />
      <i>"{props.cal} cal"</i>
    </div>
  );
};

export default Card;
