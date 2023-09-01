import React from "react";
import styles from "./Gift.module.scss";
import classNames from "classNames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);
const Gift = () => {
  return (
    <div className="grid wide">
      <div className={cx("wrapper")}>
        <div className={cx("row", "content")}>
          <div className="col l-4">
            <div className={cx("item")}>
              <Image
                src="/images/gift-for-her-2.png"
                alt=""
                className={cx("img")}
                width={440}
                height={186}
              />

              <button className={cx("btn")}>Gift for him</button>
            </div>
          </div>

          <div className="col l-4">
            <div className={cx("item")}>
              <Image
                src="/images/gift-for-him-2.png"
                alt=""
                className="img"
                width={440}
                height={186}
              />
              <button className={cx("btn")}>Gift for her</button>
            </div>
          </div>

          <div className="col l-4">
            <div className={cx("item")}>
              <Image
                src="/images/gift-for-kids-2.png"
                alt=""
                className="img"
                width={440}
                height={186}
              />

              <button className={cx("btn")}>Gift for kids</button>
            </div>
          </div>
        </div>

        <div className={cx("message")}>
          <p>Những món quà tuyệt vời của bạn</p>

          <div className={cx("heading")}>UNWRAP POSSIBILITIES</div>

          <p>
            Ngày lễ này, hãy tặng nhiều hơn một món quà. <br />
            Cho niềm vui và truyền cảm hứng cho một ai đó đặc biệt để theo đuổi
            ngôi vị cao nhất như một vận động viên.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gift;
