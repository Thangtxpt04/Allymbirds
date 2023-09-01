import styles from "./Price.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);

type IProps = {
  price?: {
    old: number;
    current: number;
  };
  quanlity: number;
};
const Price = ({ price, quanlity }: IProps) => {
  return (
    <div className={cx("wrapper", "mt-24")}>
      <span className={cx("old")}>
        {price ? price?.old * quanlity : "Đang cập nhật"}$
      </span>
      <span className={cx("current")}>
        {price ? price?.current * quanlity : "Đang cập nhật"}$
      </span>
    </div>
  );
};

export default Price;
