import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Rating.module.scss";
import classNames from "classNames/bind";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Rating = () => {
  return (
    <div className={cx("wrapper")}>
      <FontAwesomeIcon icon={faStarSolid} className={cx("star-gold")} />
      <FontAwesomeIcon icon={faStarSolid} className={cx("star-gold")} />
      <FontAwesomeIcon icon={faStarSolid} className={cx("star-gold")} />
      <FontAwesomeIcon icon={faStarSolid} className={cx("star-gold")} />
      <FontAwesomeIcon icon={faStar} className={cx("star-gold")} />

      <span className={cx("sum-rating")}>4.5 (127 lượt đánh giá)</span>
    </div>
  );
};

export default Rating;
