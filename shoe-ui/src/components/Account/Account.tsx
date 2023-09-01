"use client";
import Link from "next/link";
import Icon from "../Icon";
import styles from "./Account.module.scss";
import classNames from "classNames/bind";
import { useDispatch } from "react-redux";
import { setLogout } from "@/state";

const cx = classNames.bind(styles);

const Account = () => {
  const dispatch = useDispatch();
  return (
    <Link href="/Account" className={cx("item")}>
      <a href="#" className={cx("link")}>
        <Icon className="isax-user1" />
        Tải khoản
      </a>

      <ul className={cx("user-menu")}>
        <li className={cx("user-item")}>
          <a href="">Thông tin tài khoản</a>
        </li>

        <li className={cx("user-item")}>
          <a href="">Đơn mua</a>
        </li>

        <li className={cx("user-item")}>
          <a href="">Danh sách yêu thích</a>
        </li>

        <li className={cx("user-item", "separate")}>
          <a href="">Hộp thư</a>
        </li>

        <li className={cx("user-item", "separate")}>
          <Link href="/login" onClick={() => dispatch(setLogout())}>
            Đăng xuất
          </Link>
        </li>
      </ul>
    </Link>
  );
};

export default Account;
