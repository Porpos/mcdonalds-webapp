
const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.h2}</h2>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <h3>{props.h3}$</h3>
        <button
          onClick={() => {
            props.addToCart({ name: props.h2, price: props.h3 });
          }}
          id="buy"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
