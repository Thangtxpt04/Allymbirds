import React from "react";
import styles from "./Search.module.scss";
import classNames from "classNames/bind";
import Icon from "../Icon";

const cx = classNames.bind(styles);

const Search = () => {
  return (
    <div className={cx("search")}>
      <input
        type="text"
        name=""
        id=""
        className={cx("input")}
        placeholder="Tìm kiếm sản phẩm"
      />
      <Icon className={"-ap icon_fluent_search_24_regular search-icon"} />
    </div>
  );
};

export default Search;
