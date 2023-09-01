import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ModalDeleteCart.module.scss";
import classNames from "classNames/bind";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IProductOrder } from "@/types/Product";
import { Dispatch, SetStateAction } from "react";

const cx = classNames.bind(styles);

type ModalDeleteCart = {
  productDelete?: IProductOrder;
  handleDeleteOrderItem: () => void;
  setShowModalDelete: Dispatch<SetStateAction<boolean>>;
};

const ModalDeleteCart = ({
  productDelete,
  handleDeleteOrderItem,
  setShowModalDelete,
}: ModalDeleteCart) => {
  return (
    <div className={cx("modal")}>
      <div className={cx("modal-container")}>
        <div className={cx("modal-container__heading")}>
          Bạn có chắc chắn muốn xoá sản phẩm này?
        </div>
        <div className={cx("modal-body")}>
          <img
            src={productDelete?.product.img}
            alt=""
            className={cx("modal__item-img")}
          />

          <h3 className={cx("modal__item-name")}>
            Giày {productDelete?.product.name}
          </h3>
          <div className={cx("modal__item-infor")}>
            <div className={cx("modal__item-size")}>
              Size: {productDelete?.size}
            </div>
            <div className={cx("modal__amout")}>
              <h3 className={cx("modal__amout-heading")}>
                Số lượng: {productDelete?.quanlity}
              </h3>
            </div>
            <div className={cx("modal__item-price")}>
              Giá: {productDelete?.price}$
            </div>
          </div>
        </div>

        <div className={cx("btn-arrow-right")}>
          <span onClick={handleDeleteOrderItem} className={cx("delete")}>
            Xoá khỏi giỏ hàng
            <FontAwesomeIcon icon={faTrashCan} className={cx("icon-trash")} />
          </span>
          <span
            onClick={() => setShowModalDelete(false)}
            className={cx("back")}
          >
            Quay trở lại
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteCart;
