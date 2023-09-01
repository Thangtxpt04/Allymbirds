"use client";
import classNames from "classNames/bind";
import styles from "./Cart.module.scss";
import { useEffect, useState } from "react";
import {
  deleteOrderItem,
  getOrderItem,
  updateOrderItem,
} from "../../../../api/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../../../api/Products";
import { IProductOrder } from "@/types/Product";
import { setOrderId, setProductCartLength } from "@/state";
import {
  faJetFighter,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { updateOrder } from "../../../../api/Order";
import ProductCartItem from "@/components/ProductCartIem";
import Shiping from "@/components/Shiping";
import Summary from "@/components/Summary";
import ModalDeleteCart from "@/components/ModalDeleteCart";
import ModalOrderSuccess from "@/components/ModalOrderSuccess";

const cx = classNames.bind(styles);

type StateType = {
  token: string;
  orderId: string;
  productCartLength: number;
  user: {
    _id: string;
  };
};

export default function MyCart() {
  const [showShipingForm, setShowShipingForm] = useState(false);
  const orderId = useSelector((state: StateType) => state.orderId);
  const token = useSelector((state: StateType) => state.token);
  const userId = useSelector((state: StateType) => state.user._id);

  const productCartLength = useSelector(
    (state: StateType) => state.productCartLength
  );

  const [productsOrder, setProductsOrder] = useState<IProductOrder[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState("");
  const [productDelete, setProductDelete] = useState<IProductOrder>();
  const [selectShiping, setSelectShiping] = useState(1);
  const [isContinue, setIsContinue] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [showModalOrderSucess, setShowModalOrderSucess] = useState(false);

  const shipings = [
    {
      id: 1,
      title: "Giao hàng tiết kiệm",
      des: "Dự kiến giao trong 5 - 7 ngày kể từ lúc vận chuyển",
      price: 1,
      icon: faTruck,
    },
    {
      id: 2,
      title: "Giao hàng nhanh",
      des: "Dự kiến giao trong 3 - 4 ngày kể từ lúc vận chuyển",
      price: 2,
      icon: faTruckFast,
    },
    {
      id: 3,
      title: "Giao hàng hoả tốc",
      des: "Dự kiến giao trong 1 - 2 ngày kể từ lúc vận chuyển",
      price: 3,
      icon: faJetFighter,
    },
  ];
  const [shipingPrice, setShipingPrice] = useState(
    shipings[selectShiping - 1].price
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const orderedProducts = await getOrderItem(orderId, token);

        const newProductCartItems = [];
        for (const orderProduct of orderedProducts) {
          const productId = orderProduct.productId;
          const product = await getProductDetail(productId);

          newProductCartItems.push({
            id: orderProduct._id,
            product,
            quanlity: orderProduct.quanlity,
            size: orderProduct.size,
            color: orderProduct.color,
            isChecked: false,
            price: orderProduct.quanlity * product.price.current,
          });
        }

        setProductsOrder([...newProductCartItems]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, [orderId, token]);

  useEffect(() => {
    const allSelected = productsOrder.every((product) => product.isChecked);
    setSelectAll(allSelected);

    const checkContinue = productsOrder.some((product) => product.isChecked);
    setIsContinue(checkContinue);
  }, [productsOrder]);

  const calculateProducts = (): number => {
    return productsOrder.reduce((total, product) => {
      if (product.isChecked) {
        return total + product.price;
      }
      return total;
    }, 0);
  };

  const handleDeleteOrderItem = () => {
    const fetchApi = async () => {
      const data = await deleteOrderItem(productIdToDelete, token, orderId);

      dispatch(
        setProductCartLength({
          productCartLength: -1,
        })
      );
      setProductsOrder([]);
      const newProductCartItems = [];
      for (const orderProduct of data) {
        const productId = orderProduct.productId;
        const product = await getProductDetail(productId);

        newProductCartItems.push({
          id: orderProduct._id,
          product,
          quanlity: orderProduct.quanlity,
          size: orderProduct.size,
          color: orderProduct.color,
          isChecked: false,
          price: orderProduct.quanlity * product.price.current,
        });
      }

      setProductsOrder([...newProductCartItems]);
      setShowModalDelete(false);
    };
    fetchApi();
  };

  const handleDeleteClick = (id: string) => {
    setShowModalDelete(true);
    setProductIdToDelete(id);
  };

  useEffect(() => {
    const findProductById = productsOrder.find(
      (product) => product.id === productIdToDelete
    );
    setProductDelete(findProductById);
  }, [productIdToDelete]);

  const handleSelectAll = () => {
    const updatedProducts = productsOrder.map((product) => ({
      ...product,
      isChecked: !selectAll,
    }));
    setProductsOrder(updatedProducts);
    setSelectAll(!selectAll);
  };

  const handleProductCheck = (id: string) => {
    const updatedProducts = productsOrder.map((product) =>
      product.id === id
        ? { ...product, isChecked: !product.isChecked }
        : product
    );
    setProductsOrder(updatedProducts);
  };

  const handleShiping = (id: number) => {
    setSelectShiping(id);
    setShipingPrice(shipings[id - 1].price);
  };
  useEffect(() => {
    const totalProducts = calculateProducts() + shipingPrice;
    setTotalProducts(totalProducts);
  }, [calculateProducts, shipingPrice]);

  const handleOrder = () => {
    const productChecked = productsOrder.filter((product) => product.isChecked);
    if (productChecked.length === productCartLength) {
      const fetchApi = async () => {
        const data = await updateOrder({ userId, token, orderId });

        dispatch(
          setOrderId({
            orderId: data.orderId,
          })
        );

        dispatch(
          setProductCartLength({
            productCartLength: -productChecked.length,
          })
        );
      };
      fetchApi();
    } else {
      const productCheckedIds = productChecked.map((product) => product.id);
      const fetchApi = async () => {
        await updateOrderItem(productCheckedIds);

        dispatch(
          setProductCartLength({
            productCartLength: -productCheckedIds.length,
          })
        );
      };
      fetchApi();
    }
    setShowModalOrderSucess(true);
  };

  return (
    <main>
      <div className="wraper">
        <div className="grid wide">
          <div className={cx("container")}>
            <h1 className={cx("title")}>Giỏ mua sắm</h1>
            {Boolean(productCartLength === 0) ? (
              <div className={cx("cart-empty")}>
                <img src="/images/empty-cart-2130356-1800917.png" alt="" />
              </div>
            ) : (
              <div className={cx("row")}>
                <div className={cx("col l-7")}>
                  <div className={cx("products-cart")}>
                    <div className={cx("products-cart__header")}>
                      <h3
                        className={cx(
                          "products-cart__heading",
                          `${!showShipingForm && "active"}`
                        )}
                      >
                        Sản phẩm
                      </h3>
                      <h3
                        className={cx(
                          "products-cart__heading",
                          `${showShipingForm && "active"}`
                        )}
                      >
                        Đơn vị vận chuyển
                      </h3>
                    </div>
                    {!showShipingForm ? (
                      <div className={cx("products-cart__content")}>
                        <div className={cx("carts__all")}>
                          <input
                            type="checkbox"
                            className={cx("carts__all-input")}
                            checked={selectAll}
                            onChange={handleSelectAll}
                          />
                          <span>Tất cả</span>
                        </div>
                        <ul className={cx("carts__list")}>
                          {productsOrder?.map((productsCartItem) => (
                            <ProductCartItem
                              key={productsCartItem.id}
                              productsCartItem={productsCartItem}
                              handleProductCheck={handleProductCheck}
                              handleDeleteClick={handleDeleteClick}
                            />
                          ))}
                        </ul>
                        <div style={{ textAlign: "right" }}>
                          <button
                            type="button"
                            className={cx(
                              "btn-next",
                              `${!isContinue && "disabled"}`
                            )}
                            onClick={() => setShowShipingForm(true)}
                            disabled={!isContinue}
                          >
                            Tiếp tục
                          </button>
                        </div>
                      </div>
                    ) : (
                      <Shiping
                        handleShiping={handleShiping}
                        setShowShipingForm={setShowShipingForm}
                        selectShiping={selectShiping}
                        shipings={shipings}
                      />
                    )}
                  </div>
                </div>
                {showShipingForm && (
                  <div className={cx("col l-5")}>
                    <Summary
                      productsOrder={productsOrder}
                      calculateProducts={calculateProducts}
                      shipingPrice={shipingPrice}
                      totalProducts={totalProducts}
                      handleOrder={handleOrder}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {showModalDelete && (
        <ModalDeleteCart
          productDelete={productDelete}
          handleDeleteOrderItem={handleDeleteOrderItem}
          setShowModalDelete={setShowModalDelete}
        />
      )}
      {showModalOrderSucess && <ModalOrderSuccess />}
    </main>
  );
}
