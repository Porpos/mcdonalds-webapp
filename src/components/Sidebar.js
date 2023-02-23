import { MdDeliveryDining } from "react-icons/md";
import { BsFillHandbagFill } from "react-icons/bs";

const Sidebar = () => {

  return (
    <div   className="side-bar" >
      <div className="radio" >
        <input type="radio" name="delivery" id="opt1" value="home-delivery" />
        <label htmlFor="opt1">
          <MdDeliveryDining className="icon" />
          <span>Delivery</span>
        </label>
        <input
          type="radio"
          name="delivery"
          id="opt2"
          value="take-away"
          defaultChecked
        />
        <label htmlFor="opt2">
          <BsFillHandbagFill className="icon" />
          <span>Take Away</span>
        </label>
      </div>
      <ul>
        <li>Test1</li>
        <li>Test2</li>
      </ul>
    </div>
  );
};

export default Sidebar;
