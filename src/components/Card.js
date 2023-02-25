import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":

      return state + 1;
    case "decrement":
      if(state===0){
        return state;
      };
      return state - 1;
    default:
      break;
  }
};

const Card = (props) => {
  
  const [state, dispatch] = useReducer(reducer,1);
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
        <span className="card-price">
          {" "}
          {props.price}0 ${" "}
          <spans style={{ color: "gray", fontWeight: "100", fontSize: "1rem" }}>
            x {state}
          </spans>
        </span>
        <button
          onClick={() => {
            props.addToCart({
              name: props.name,
              price: props.price,
              quantity: state,
            });
          }}
          id="buy"
        >
          Add to Cart
        </button>
        <div className="card-quantity">
          <button
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            +
          </button>
          <button onClick={() => {
              dispatch({ type: "decrement" });
            }}>-</button>
        </div>
      </div>
      <br />
      <i>"{state > 0 ? props.cal * state : props.cal} cal"</i>
    </div>
  );
};

export default Card;
