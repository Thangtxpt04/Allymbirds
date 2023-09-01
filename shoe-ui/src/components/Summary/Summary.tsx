import { IProductOrder } from "@/types/Product";
import styles from "./Summary.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);

type SummaryProp = {
  productsOrder: IProductOrder[];
  calculateProducts: () => number;
  shipingPrice: number;
  totalProducts: number;
  handleOrder: () => void;
};

const Summary = ({
  productsOrder,
  calculateProducts,
  shipingPrice,
  totalProducts,
  handleOrder,
}: SummaryProp) => {
  return (
    <div className={cx("summary")}>
      <div className={cx("product")}>
        <ul className={cx("carts__list")}>
          {productsOrder?.map(
            (productsCartItem) =>
              productsCartItem.isChecked && (
                <li key={productsCartItem.id} className={cx("carts__item")}>
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
                    </div>
                    <div className={cx("cart__item-infor")}>
                      <div className={cx("product__amout")}>
                        <h3 className={cx("product__amout-heading")}>
                          Số lượng: {productsCartItem.quanlity}
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              )
          )}
        </ul>
        <div className={cx("product__price")}>
          <div className={cx("product__price-current")}>
            <p>Tạm Tính</p>
            <span>{calculateProducts()}$</span>
          </div>

          <div className={cx("product__price-transport")}>
            <p>Phí vận chuyển</p>
            <span>{shipingPrice}$</span>
          </div>
        </div>

        <div className={cx("product__price-final", "mt-24")}>
          <p>Tổng(Đã bao gồm thuế VAT)</p>
          <span>{totalProducts}$</span>
        </div>

        <button className={cx("product__pay-btn")} onClick={handleOrder}>
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default Summary;
