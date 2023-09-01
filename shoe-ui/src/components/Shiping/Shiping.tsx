import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import classNames from "classNames/bind";
import styles from "./Shiping.module.scss";
import {
  IconDefinition,
  faJetFighter,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

type ShipingProp = {
  handleShiping: (id: number) => void;
  setShowShipingForm: Dispatch<SetStateAction<boolean>>;
  selectShiping: number;
  shipings: {
    id: number;
    title: string;
    des: string;
    price: number;
    icon: IconDefinition;
  }[];
};

const Shiping = ({
  handleShiping,
  setShowShipingForm,
  selectShiping,
  shipings,
}: ShipingProp) => {
  return (
    <div className={cx("shiping")}>
      <h1 className={cx("shiping-title")}>Phương thức vận chuyển:</h1>
      <ul className={cx("shiping-container")}>
        {shipings.map((shipingItem) => (
          <li
            key={shipingItem.id}
            className={cx(
              "shiping-item",
              `${selectShiping === shipingItem.id && "active"}`
            )}
            onClick={() => handleShiping(shipingItem.id)}
          >
            <h2 className={cx("shiping-item-title")}>{shipingItem.title}</h2>
            <p className={cx("shiping-item-des")}>
              <span>{shipingItem.des}</span>
              <span className={cx("shiping-item-price")}>
                {shipingItem.price}$
              </span>
            </p>
            <FontAwesomeIcon
              icon={shipingItem.icon}
              className={cx("shiping-item-icon")}
            />
          </li>
        ))}
      </ul>
      <div style={{ textAlign: "right" }}>
        <button
          className={cx("btn-next")}
          onClick={() => setShowShipingForm(false)}
        >
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default Shiping;
