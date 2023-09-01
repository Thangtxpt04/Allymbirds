import React from "react";
import styles from "./Banner.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);
const Banner = () => {
  return <div className={cx("banner")}></div>;
};

export default Banner;
