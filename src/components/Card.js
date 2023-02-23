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

      <h2>
        {props.name}
        <span className="card-price"> {props.price}0 $</span>
      </h2>
      <div>
        <button
          onClick={() => {
            props.addToCart({ name: props.name, price: props.price });
          }}
          id="buy"
        >
          Add to Cart
        </button>
      </div>
      <br />
      <i>{props.cal} calorie</i>
    </div>
  );
};

export default Card;
