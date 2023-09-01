import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IProduct } from "@/types/Product";
import classNames from "classNames/bind";
import styles from "./ProductItem.module.scss";
const cx = classNames.bind(styles);
interface IPropProduct {
  Product: IProduct;
  CategoryName?: string;
}

const ProductItem = ({ Product, CategoryName }: IPropProduct) => {
  const ArrayStarsSolid = Array(Product.stars).fill(
    <FontAwesomeIcon icon={faStarSolid} className={cx("star-gold")} />
  );

  const ArrayStars = Array(5 - Product.stars).fill(
    <FontAwesomeIcon icon={faStar} className={cx("star-gold")} />
  );

  const renderStarSolid = () => {
    return ArrayStarsSolid.map((item, index) => (
      <span key={index}>{item}</span>
    ));
  };

  const renderStar = () => {
    return ArrayStars.map((item, index) => <span key={index}>{item}</span>);
  };

  const url = `${Product._id}?categoryName=${CategoryName}`;

  return (
    <div>
      <Link href={url} className={cx("item")}>
        <div className={cx("header")}>
          <img src={Product.img} alt="" />
        </div>

        <div className={cx("body")}>
          <div className={cx("heading")}>
            <h3 className={cx("name")}>{Product.name}</h3>
            <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
          </div>

          <div className={cx("type")}>
            <span>{Product.type}</span>
          </div>

          <div className={cx("price")}>
            <span className={cx("old")}>{Product.price.old}$</span>
            <span className={cx("current")}>{Product.price.current}$</span>
          </div>

          <div className={cx("rating")}>
            {renderStarSolid()}
            {renderStar()}
            <span className={cx("sum-rating")}>({Product.reviews})</span>
          </div>

          <div className={cx("sale-off")}>
            <span> 25% off</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
