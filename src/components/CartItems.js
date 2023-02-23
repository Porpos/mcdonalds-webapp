import { useCartContext } from "../providers/CartProvider";

const CartItems = (props) => {
  const { Cart } = useCartContext();

  return (
    <>
      <div onClick={props.close}  className="checkout-backdrop"></div>
      <div className="checkout-wrapper">
       
        <div className="checkout-container">
        <div onClick={props.close} className="checkout-close">
          <div></div>
          <div></div>
        </div>
          <h2>Your Orders</h2>
          <ul>
            {Cart.map((item) => (
              <li key={"cartItem0" + Cart.indexOf(item)}>
                {item.name}: {item.price}0 $
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartItems;
