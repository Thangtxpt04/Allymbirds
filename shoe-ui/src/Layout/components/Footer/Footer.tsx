import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classNames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className="grid wide">
        <div className={cx("row", "content")}>
          <div className="col l-2">
            <div className="logo">
              <Image
                src="/images/logo-white.png"
                alt=""
                width={145}
                height={45}
              />
            </div>
          </div>

          <div className="col l-8">
            <div className="row">
              <div className="col l-3">
                <h3 className={cx("heading")}>Về chúng tôi</h3>
                <ul className={cx("list")}>
                  <li className={cx("item")}>Tin tức</li>
                  <li className={cx("item")}>Thông tin tuyển dụng</li>
                  <li className={cx("item")}>Đầu tư</li>
                  <li className={cx("item")}>Tính bền vững</li>
                </ul>
              </div>

              <div className="col l-3">
                <h3 className={cx("heading")}>Nhận trợ giúp</h3>
                <ul className={cx("list")}>
                  <li className={cx("item")}>Trạng thái đơn hàng</li>
                  <li className={cx("item")}>Câu hỏi thường gặp</li>
                </ul>
              </div>

              <div className="col l-3">
                <h3 className={cx("heading")}>Đối tác</h3>
                <ul className={cx("list")}>
                  <li className={cx("item")}>Đối tác liên kết</li>
                  <li className={cx("item")}>Đồng hành cùng chúng tôi</li>
                  <li className={cx("item")}>Hình thức thanh toán</li>
                </ul>
              </div>

              <div className="col l-3">
                <h3 className={cx("heading")}>Liên hệ với Allymbirds</h3>
                <ul className={cx("list")}>
                  <li className={cx("item")}>Đăng ký nhận Email</li>
                  <li className={cx("item")}>Facebook</li>
                  <li className={cx("item")}>Instagram</li>
                  <li className={cx("item")}>Youtube</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col l-2">
            <div className="copyright">
              <span>© 2020-2022 Allymbirds. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
