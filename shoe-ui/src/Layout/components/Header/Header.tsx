import React from "react";
import styles from "./Header.module.scss";
import classNames from "classNames/bind";
import "../../../../public/fonts/vuesax-icon-main/vuesax-icon-main/style.css";
import "../../../../public/fonts/font-apicon-master/font-apicon-master/css/style.css";
import Image from "next/image";
import Search from "@/components/Search";
import Account from "@/components/Account";
import Cart from "@/components/Cart";
import Link from "next/link";
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("header")}>
      <nav className={cx("sub")}>
        <ul className={cx("list")}>
          <li className={cx("sub-item", "separate")}>
            <a href="">Tải ứng dụng</a>
          </li>
          <li className={cx("sub-item", "separate")}>
            <a href="">Tìm chi nhánh</a>
          </li>
          <li className={cx("sub-item", "separate")}>
            <a href="">Chăm sóc khách hàng</a>
          </li>
          <li className={cx("sub-item")}>
            <a href="">Ngôn ngữ</a>
          </li>
        </ul>
      </nav>

      <header className={cx("main")}>
        <nav className={cx("navbar")}>
          <ul className={cx("list")}>
            <li className={cx("item")}>
              <Link href="/">
                <Image
                  src="/images/logo-black.png"
                  alt=""
                  className={cx("logo")}
                  width={145}
                  height={40}
                />
              </Link>
            </li>

            <li className={cx("item")}>
              <Search />
            </li>
          </ul>

          <ul className={cx("list")}>
            <li className={cx("item")}>
              <a href="" className={cx("link")}>
                <i className={cx("icon", "isax-notification1")}></i>
                Thông báo
              </a>
            </li>

            <Account />

            <Cart />
          </ul>
        </nav>
      </header>
    </header>
  );
};

export default Header;
