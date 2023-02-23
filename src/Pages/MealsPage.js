import { useCartContext } from "../providers/CartProvider";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
const DUMMY_MEALS = [
  {
    name: "Big Mac",
    price: 12.9,
    campaign:'Buy 1 Get 1',
    cal: 550,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Deluxe Crispy Chicken Sandwich",
    price: 9.9,
    cal: 530,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0370_DeluxeCrispyChicken_PotatoBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 4.9,
    campaign:'Get 2$ Coupon',
    cal: 460,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 4.9,
    cal: 460,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 4.9,
    cal: 460,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 4.9,
    cal: 460,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 4.9,
    cal: 460,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 4.9,
    cal: 460,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 4.9,
    cal: 460,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 4.9,
    cal: 460,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },
  {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 4.9,
    cal: 460,
    pictureLink:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
  },

];

const Meals = () => {
  const { addToCart } = useCartContext();

  return (
    <div className="container">
      <Sidebar></Sidebar>
      <div className="meals-container">
        {DUMMY_MEALS.map((item,index) => (
          <Card
            key={index}
            campaign={item?.campaign}
            addToCart={addToCart}
            name={item.name}
            price={item.price}
            cal={item.cal}
            pic={item.pictureLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Meals;
