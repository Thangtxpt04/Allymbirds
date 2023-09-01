"use client";
import classNames from "classNames/bind";
import styles from "./Products.module.scss";

import ProductItem from "./ProductItem";
import { ICategory, IProduct } from "@/types/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../../api/Products";

const cx = classNames.bind(styles);
interface IPropCategory {
  Category?: ICategory;
}

const Products = ({ Category }: IPropCategory) => {
  const homeProductRef = useRef<HTMLDivElement>(null);
  const btnPrevRef = useRef<HTMLButtonElement>(null);
  const btnNextRef = useRef<HTMLButtonElement>(null);
  const [showBtn, setShowBtn] = useState(false);

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    let homeProductDimensions = homeProductRef.current?.getBoundingClientRect();
    let homeProductWidth = homeProductDimensions?.width;

    btnPrevRef.current?.addEventListener("click", () => {
      if (homeProductRef.current)
        homeProductRef.current.scrollLeft -= homeProductWidth || 0;
      setShowBtn(!showBtn);
    });

    btnNextRef.current?.addEventListener("click", () => {
      if (homeProductRef.current)
        homeProductRef.current.scrollLeft += homeProductWidth || 0;

      setShowBtn(!showBtn);
    });
  }, [showBtn]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getProducts(Category?._id);
      setProducts(data);
    };
    fetchApi();
  }, [Category?._id]);

  return (
    <div id={`${Category?._id}`} className={cx("topic")}>
      <div className={cx("home-filter")}>
        <h3 className={cx("heading")}>{Category?.title}</h3>
        <a href="" className={cx("see-more")}>
          Xem tất cả
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      {showBtn && (
        <button className={cx("btn-prev")} ref={btnPrevRef}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      {!showBtn && (
        <button className={cx("btn-next")} ref={btnNextRef}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}

      <div className={cx("row", "home-products")} ref={homeProductRef}>
        {Products?.map((Product: IProduct) => (
          <li key={Product?._id} className="col l-2-4">
            <ProductItem Product={Product} CategoryName={Category?.title} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Products;
