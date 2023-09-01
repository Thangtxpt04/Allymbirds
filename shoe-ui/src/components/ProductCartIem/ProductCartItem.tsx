import React from "react";
import classNames from "classNames/bind";
import styles from "./ProductCartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { IProductOrder } from "@/types/Product";

const cx = classNames.bind(styles);

type ProductCartItemProp = {
  productsCartItem: IProductOrder;
  handleProductCheck: (id: string) => void;
  handleDeleteClick: (id: string) => void;
};

const ProductCartItem = ({
  productsCartItem,
  handleProductCheck,
  handleDeleteClick,
}: ProductCartItemProp) => {
  return (
    <li className={cx("carts__item")}>
      <input
        type="checkbox"
        name=""
        id=""
        className={cx("carts__item-input")}
        checked={productsCartItem.isChecked}
        onChange={() => handleProductCheck(productsCartItem.id)}
      />
      <img
        src={productsCartItem?.product.img}
        alt=""
        className={cx("carts__item-img")}
      />
      <div className={cx("carts__item-body")}>
        <h3 className={cx("cart__item-name")}>
          Giày {productsCartItem?.product.name}
        </h3>
        <div className={cx("cart__item-infor")}>
          <div className={cx("cart__item-size")}>
            Size: {productsCartItem?.size}
          </div>
          <div className={cx("cart__item-price")}>
            Giá: {productsCartItem.price}$
          </div>
        </div>
        <div className={cx("cart__item-infor")}>
          <div className={cx("cart__item-color")}>
            Màu sắc: {productsCartItem?.color}
          </div>
          <div className={cx("cart__item-fav")}>
            Thêm vào danh sách yêu thích
            <FontAwesomeIcon icon={faHeart} className={cx("icon-heart")} />
          </div>
        </div>
        <div className={cx("cart__item-infor")}>
          <div className={cx("product__amout")}>
            <h3 className={cx("product__amout-heading")}>
              Số lượng: {productsCartItem.quanlity}
            </h3>
          </div>

          <div
            className={cx("cart__item-clear")}
            onClick={() => handleDeleteClick(productsCartItem.id)}
          >
            <span>
              Xoá khỏi
              <FontAwesomeIcon icon={faTrashCan} className={cx("icon-trash")} />
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCartItem;
