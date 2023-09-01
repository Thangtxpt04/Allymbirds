import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ModalOrderSuccess.module.scss";
import classNames from "classNames/bind";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const cx = classNames.bind(styles);

const ModalOrderSuccess = () => {
  return (
    <div className={cx("modal")}>
      <div className={cx("modal-container")}>
        <div className={cx("modal-container__heading")}>
          Cảm ơn bạn đã tin tưởng
          <span> Allymbirds</span>
        </div>
        <p className={cx("modal-container__des")}>
          Đơn hàng của bạn sẽ được giao cho đơn vị vận chuyển sớm nhất!
        </p>
        <div className={cx("modal-container__img")}></div>

        <div className={cx("btn-arrow-right")}>
          <Link href="/">Quay trở về trang chủ</Link>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default ModalOrderSuccess;
