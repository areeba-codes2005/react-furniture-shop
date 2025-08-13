import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./Product.css";
const ProductCard = ({ image, name, oldPrice, newPrice }) => {
  return (
    <article className="card">
      <span className="badge">-20%</span>
      <div className="card__img">
        <img src={image} alt={name} className="img-fluid" />
      </div>
      <div className="card__name">
        <p>{name}</p>
      </div>
      <div className="card__precis">
        <a href="#" className="card__icon">
          <IoHeartOutline />
        </a>
        <div>
          <span className="card__preci card__preci--before">${oldPrice}</span>
          <span className="card__preci card__preci--now">${newPrice}</span>
        </div>

        <a href="#" className="card__icon">
          <IoCartOutline />
        </a>
      </div>
      <div className="card__buttons">
        <button className="card__button">
          {" "}
          <RiShoppingBagLine />
          Add to cart
        </button>
        <button className="card__button">
          <MdOutlineRemoveRedEye />
          Quick view
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
