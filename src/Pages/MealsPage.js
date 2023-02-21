import { useCartContext } from "../providers/CartProvider";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
const Meals = () => {
  const { addToCart } = useCartContext();
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <div className="meals-container">
        <Card addToCart={addToCart} h2="Pizza" h3={12.99} />
        <Card addToCart={addToCart} h2="Pasta" h3={8.99} />
        <Card addToCart={addToCart} h2="Hamburger" h3={13.99} />
      </div>
    </div>
  );
};

export default Meals;
