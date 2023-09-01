import React from "react";
import styles from "./Comment.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);
const Comment = () => {
  return (
    <div className={cx("product-comment")}>
      <h3 className={cx("product-comment__heading")}>
        Đánh giá, bình luận (12)
      </h3>
      <ul className={cx("product-comment__list")}>
        <li className={cx("product-comment__item")}>
          <div className={cx("product-comment__header")}>
            <h3 className={cx("product-comment__name")}>Something Name</h3>

            <div className={cx("product-comment-item__rating")}>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <p className={cx("product-comment__content")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            tincidunt vehicula. Sed interdum elementum.
          </p>
        </li>
        <li className={cx("product-comment__item")}>
          <div className={cx("product-comment__header")}>
            <h3 className={cx("product-comment__name")}>Something Name</h3>

            <div className={cx("product-comment-item__rating")}>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <p className={cx("product-comment__content")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            tincidunt vehicula. Sed interdum elementum.
          </p>
        </li>
        <li className={cx("product-comment__item")}>
          <div className={cx("product-comment__header")}>
            <h3 className={cx("product-comment__name")}>Something Name</h3>

            <div className={cx("product-comment-item__rating")}>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <p className={cx("product-comment__content")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            tincidunt vehicula. Sed interdum elementum.
          </p>
        </li>
        <li className={cx("product-comment__item")}>
          <div className={cx("product-comment__header")}>
            <h3 className={cx("product-comment__name")}>Something Name</h3>

            <div className={cx("product-comment-item__rating")}>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <p className={cx("product-comment__content")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            tincidunt vehicula. Sed interdum elementum.
          </p>
        </li>
        <li className={cx("product-comment__item")}>
          <div className={cx("product-comment__header")}>
            <h3 className={cx("product-comment__name")}>Something Name</h3>

            <div className={cx("product-comment-item__rating")}>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <p className={cx("product-comment__content")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            tincidunt vehicula. Sed interdum elementum.
          </p>
        </li>
        <li className={cx("product-comment__item")}>
          <div className={cx("product-comment__header")}>
            <h3 className={cx("product-comment__name")}>Something Name</h3>

            <div className={cx("product-comment-item__rating")}>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="home-comment-item__star-gold fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <p className={cx("product-comment__content")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            tincidunt vehicula. Sed interdum elementum.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Comment;
