import Link from "next/link";
import Icon from "../Icon";
import styles from "./Cart.module.scss";
import classNames from "classNames/bind";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Cart = () => {
  const productCartLength = useSelector(
    (state: { productCartLength: number }) => state.productCartLength
  );

  return (
    <li className={cx("item")}>
      <Link href="/mycart" className={cx("link")}>
        <Icon className="isax-bag-21"></Icon>
        Giỏ hàng ({productCartLength})
      </Link>
    </li>
  );
};

export default Cart;
