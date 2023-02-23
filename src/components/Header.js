import { useState } from "react";
import { BsBasket } from "react-icons/bs";
import { useCartContext } from "../providers/CartProvider";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
const Header = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [checkoutShow, setCheckoutShow] = useState(false);
  const { Cart } = useCartContext();

  const openCloseCheckout = () => {
    setCheckoutShow(!checkoutShow);
  };

  const CartTotal = () => {
    let total = 0;
    Cart.map((item) => (total += item.price));
    return (Math.floor(total) - 0.1).toFixed(2)>0?(Math.floor(total) - 0.1).toFixed(2):0;
  };

  return (
    <>
      {checkoutShow && <CartItems />}
      <header>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/260px-McDonald%27s_Golden_Arches.svg.png"
            alt="logo"
          />
          <div onClick={openCloseCheckout} className="cart-wrapper">
            <BsBasket
              color="white"
              style={{ height: "auto", width: "30px" }}
            />
            <span>{Cart.length}</span>
            <span>{CartTotal()}$</span>
          </div>
        </div>
        <nav>
          <ul id="desk-menu">
            <li>
              <Link to="/" className="links">
                Home
              </Link>{" "}
            </li>
            <li>
              <Link to="/meals" className="links">
                Meals
              </Link>
            </li>
            <li>
              <Link to="/" className="links">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/" className="links">
                Order
              </Link>
            </li>
          </ul>
          <div id="mobile-menu">
            <div
              onClick={() => {
                setMobileMenuShow(!mobileMenuShow);
              }}
              className={`collapse-menu-icon ${mobileMenuShow ? "open" : ""}`}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <ul className={!mobileMenuShow ? "d-none" : ""}>
                <li>
                  <Link to="/" className="links">
                    Home
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/meals" className="links">
                    Meals
                  </Link>
                </li>
                <li>
                  <Link to="/" className="links">
                    Campaigns
                  </Link>
                </li>
                <li>
                  <Link to="/" className="links">
                    Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
