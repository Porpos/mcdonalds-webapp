import { useCartContext } from "../providers/CartProvider";

const CartItems = () => {
  const { Cart } = useCartContext();

  return (
    <>
      <div className="checkout-backdrop"></div>
      <div className="checkout-wrapper">
        <div className="checkout-container">
          <h2>Your Orders</h2>
          <ul>
            {Cart.map((item) => (
              <li key={"cartItem0" + Cart.indexOf(item)}>
                {item.name}: {item.price}$
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartItems;
