"use client";
import { useEffect, useState } from "react";
import classNameNames from "classNames/bind";
import styles from "./ProductItem.module.scss";
import Price from "@/components/Price";
import Rating from "@/components/Rating";
import Products from "@/components/Products";
import Comment from "@/components/Comment";
import { getProductDetail } from "../../../../api/Products";
import { ICategory, IProduct } from "@/types/Product";
import { getCategory } from "../../../../api/Category";
import { addOrderItem } from "../../../../api/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { setProductCartLength } from "@/state";
// import { setProductCartLength } from "@/state";
const cx = classNameNames.bind(styles);

type StateType = {
  token: string;
  orderId: string;
};
type totalType = {
  old: number;
  current: number;
};
const ProductItem = ({ params }: { params: { ProductItem: string } }) => {
  const [category, setCategory] = useState<ICategory>();
  const [quanlity, setQuanlity] = useState(1);
  const [selectCheckbox, setSelectCheckbox] = useState<number>();
  const [selectColor, setSelectColor] = useState("");

  const [err, setErr] = useState<boolean>();
  const [checkOrder, setCheckOrder] = useState<boolean>(false);

  const token = useSelector((state: StateType) => state.token);
  const orderId = useSelector((state: StateType) => state.orderId);

  const dispath = useDispatch();
  const handleQuanlity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuanlity(Number.parseInt(e.target.value));
  };

  const [ProductDetail, setProductDetail] = useState<IProduct>();
  const [total, setTotal] = useState<totalType>();

  useEffect(() => {
    if (ProductDetail) {
      setTotal(ProductDetail.price);
    }
  }, [ProductDetail]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getProductDetail(params.ProductItem);
      setProductDetail(data);
    };
    fetchApi();
  }, [params.ProductItem]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory(ProductDetail?.categoryId);
      setCategory(data);
    };
    fetchApi();
  }, [ProductDetail?.categoryId]);

  const checkboxes = [
    { value: 41, label: "Size 41" },
    { value: 42, label: "Size 42" },
    { value: 43, label: "Size 43" },
  ];

  const listColor = [
    { value: "Green", label: "Xanh lam" },
    { value: "Yellow", label: "Vàng" },
    { value: "Red", label: "Đỏ" },
  ];

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectCheckbox(Number.parseInt(e.target.value));
  };

  const handleChangeColor = (e: React.MouseEvent<HTMLLIElement>) => {
    const selectedColor = e.currentTarget.getAttribute("value");
    if (selectedColor !== null) {
      setSelectColor(selectedColor);
    }
  };

  const handleAddtoCart = () => {
    if (quanlity && selectCheckbox && selectColor) {
      const dataItem = {
        productId: ProductDetail?._id,
        quanlity,
        size: selectCheckbox,
        color: selectColor,
        isOrder: false,
        token,
        orderId,
      };

      const fetchApi = async () => {
        const data = await addOrderItem(dataItem);
        dispath(
          setProductCartLength({
            productCartLength: data,
          })
        );
      };

      fetchApi();
      setErr(false);
      setCheckOrder(true);
    } else {
      setErr(true);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("grid wide")}>
        <div className={cx("title")}>
          {`Trang chủ > ${ProductDetail?.type} > ${ProductDetail?.name}`}
        </div>
        <div className={cx("row", "container")}>
          <div className="col l-4">
            <div className={cx("img")}>
              <div className={cx("img-main")}>
                <img src={ProductDetail?.img} alt="" className="" />
              </div>
              <div className={cx("row", "img-list")}>
                <div className={cx("col l-4")}>
                  <div className={cx("img-item")}>
                    <img
                      src="/images/shoes/sneaker-01--detail-02.webp"
                      alt=""
                      className=""
                    />
                  </div>
                </div>

                <div className="col l-4">
                  <div className={cx("img-item")}>
                    <img
                      src="/images/shoes/sneaker-01--detail-03.webp"
                      alt=""
                      className=""
                    />
                  </div>
                </div>

                <div className="col l-4">
                  <div className={cx("img-item")}>
                    <img
                      src="/images/shoes/sneaker-01--detail-04.webp"
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-8">
            <div className={cx("product-content")}>
              <h1 className={cx("product__name")}>{ProductDetail?.name}</h1>

              <Rating />
              <Price price={total} quanlity={quanlity} />

              <div
                className={cx(
                  "product__size",
                  `${err && !selectCheckbox ? "error" : ""}`
                )}
              >
                <h3 className={cx("product__size-heading")}>Kích cỡ:</h3>

                <ul className={cx("product__size-list")}>
                  {checkboxes.map((checkbox) => (
                    <li
                      key={checkbox.value}
                      className={cx("product__size-item")}
                    >
                      <input
                        type="radio"
                        value={checkbox.value}
                        name="checkboxGroup"
                        checked={Boolean(selectCheckbox === checkbox.value)}
                        onChange={handleCheckboxChange}
                      />
                      <span>{checkbox.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={cx(
                  "product__color",
                  `${err && !selectColor ? "error" : ""}`
                )}
              >
                <h3 className={cx("product__color-heading")}>Màu sắc:</h3>
                <ul className={cx("product__color-list")}>
                  {listColor.map((color) => (
                    <li
                      key={color.value}
                      value={color.value}
                      className={cx(
                        "product__color-item",
                        `${selectColor === color.value ? color.value : ""}`
                      )}
                      onClick={handleChangeColor}
                    >
                      <div className={cx(color.value)}></div>
                      <span>{color.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cx("product__amout")}>
                <h3 className={cx("product__amout-heading")}>Số lượng:</h3>
                <div className={cx("product__amout-btn")}>
                  <input
                    id="subtract"
                    className={cx("minus is-form")}
                    type="button"
                    value="-"
                    onClick={() =>
                      setQuanlity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                  />
                  <input
                    id="number"
                    aria-label="quantity"
                    className={cx("input-qty")}
                    max="10"
                    min="1"
                    name=""
                    type="number"
                    value={quanlity}
                    onChange={handleQuanlity}
                  />
                  <input
                    id="add"
                    className={cx("plus is-form")}
                    type="button"
                    value="+"
                    onClick={() => setQuanlity((prev) => prev + 1)}
                  />
                </div>
              </div>

              <span
                className={cx(
                  "msg",
                  `${err && "error"}`,
                  `${checkOrder && "success"}`
                )}
              >
                {err && "Vui lòng chọn đầy đủ thông tin"}
                {checkOrder && "Đã thêm sản phẩm thành công vào giỏ hàng <3"}
              </span>

              <div className={cx("product__control")}>
                <button
                  className={cx("product__control-item")}
                  onClick={handleAddtoCart}
                >
                  Thêm vào giỏ hàng
                </button>
                <button className={cx("product__control-item")}>
                  Mua hàng
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("des")}>
          <h3 className={cx("des__heading")}>Mô tả</h3>
          <div className={cx("des__content")}>
            <span>
              ĐÔI GIÀY CHẠY BỘ TINH CHỈNH, CÓ SỬ DỤNG THÀNH PHẦN TÁI CHẾ. <br />
              Mỗi ngày mới là một cơ hội để cải thiện: những kỳ vọng, cách nhìn,
              và buổi chạy của bạn. Giày Ultra 4D được mã hóa nhằm giúp bạn
              chinh phục mục tiêu, bắt đầu với đế giữa 4D sử dụng công nghệ in
              3D cho sải bước ổn định. Lớp đệm bền bỉ giúp bạn chinh phục cự ly,
              cùng thân giày adidas PRIMEKNIT ôm chân và nâng đỡ từng sải bước.
              Làm từ một loạt chất liệu tái chế, thân giày có chứa tối thiểu 50%
              thành phần tái chế. Sản phẩm này đại diện cho một trong số rất
              nhiều các giải pháp của chúng tôi hướng tới chấm dứt rác thải
              nhựa.
            </span>
            <ul className={cx("des__list")}>
              <li className={cx("des__item")}>Có dây giày</li>
              <li className={cx("des__item")}>Thân giày adidas PRIMEKNIT</li>
              <li className={cx("des__item")}>Đế giữa 4D công nghệ in 3D</li>
              <li className={cx("des__item")}>Lớp lót bằng vải dệt</li>
              <li className={cx("des__item")}>Đế ngoài Continental™ Rubber</li>
              <li className={cx("des__item")}>
                Thân giày có chứa tối thiểu 50% thành phần tái chế
              </li>
              <li className={cx("des__item")}>
                Màu sản phẩm: Core Black / Zero Metalic / Pulse Lilac
              </li>
              <li className={cx("des__item")}>Mã sản phẩm: GY5913</li>
            </ul>
          </div>
        </div>
        <Comment />
        <Products Category={category} />
      </div>
    </div>
  );
};

export default ProductItem;
