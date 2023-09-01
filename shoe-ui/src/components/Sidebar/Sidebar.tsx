import Icon from "../Icon";
import styles from "./Sidebar.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className="filter-slidebar">
      <div className={cx("category")}>
        <div className={cx("heading")}>
          <p>Brands</p>
        </div>

        <ul className={cx("list")}>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Tất cả
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Adidas
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            McQueen
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Converse
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Nike
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Puma
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Supreme
          </li>
        </ul>
      </div>

      <div className={cx("category")}>
        <div className={cx("heading")}>
          <p>Giới tính</p>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <ul className={cx("list")}>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Nam
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Nữ
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Unisex
          </li>
        </ul>
      </div>

      <div className={cx("category")}>
        <div className={cx("heading")}>
          <p>Trẻ em</p>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <ul className={cx("list")}>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Bé Nam
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Bé Nữ
          </li>
        </ul>
      </div>

      <div className={cx("category")}>
        <div className={cx("heading")}>
          <p>Price</p>
          <i className="fa-solid fa-chevron-up"></i>
        </div>

        <ul className={cx("list")}>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Dưới 500.000đ
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Từ 500.000đ - 1.000.000đ
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Từ 1.000.000đ - 1.500.000đ
          </li>
          <li className={cx("item")}>
            <input type="checkbox" name="" id="" />
            Trên 2.000.000đ
          </li>
        </ul>
      </div>

      <div className={cx("category")}>
        <div className={cx("heading")}>
          <p>Màu sắc</p>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <ul className={cx("color-filter")}>
          <li className={cx("color-filter__item")}>
            <div className={cx("Violet")}></div>
            <p>Tím</p>
          </li>
          <li className={cx("color-filter__item")}>
            <div className={cx("Black")}></div>
            <p>Đen</p>
          </li>
          <li className={cx("color-filter__item")}>
            <div className={cx("Red")}></div>
            <p>Đỏ</p>
          </li>
          <li className={cx("color-filter__item")}>
            <div className={cx("Orange")}></div>
            <p>Cam</p>
          </li>

          <li className={cx("color-filter__item")}>
            <div className={cx("Blue")}></div>
            <p>Xanh</p>
          </li>
          <li className={cx("color-filter__item")}>
            <div className={cx("Brown")}></div>
            <p>Nâu</p>
          </li>
          <li className={cx("color-filter__item")}>
            <div className={cx("Green")}></div>
            <p>Lục</p>
          </li>
          <li className={cx("color-filter__item")}>
            <div className={cx("Yellow")}></div>
            <p>Vàng</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
