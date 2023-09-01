"use client";
import React, { useState } from "react";
import classNames from "classNames/bind";
import styles from "./page.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import SetUp from "@/components/AccountManagement/SetUp";
import Notification from "@/components/AccountManagement/Notification";
import Order from "@/components/AccountManagement/Order";
import FavouriteProducts from "@/components/AccountManagement/FavouriteProducts";

const cx = classNames.bind(styles);

const Account = () => {
  const [activeTab, setActiveTab] = useState("setup");

  const settings = [
    { id: "setup", label: "Thiết lập", component: <SetUp /> },
    { id: "notification", label: "Thông báo", component: <Notification /> },
    { id: "order", label: "Đơn mua", component: <Order /> },
    {
      id: "wishlist",
      label: "Danh sách yêu thích",
      component: <FavouriteProducts />,
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeTabComponent = settings.find(
    (setting) => setting.id === activeTab
  )?.component;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("side-bar")}>
        <h1 className={cx("heading")}>Tài khoản</h1>
        <ul className={cx("settings")}>
          {settings.map((setting) => (
            <li
              key={setting.id}
              className={cx("item", { active: activeTab === setting.id })}
              onClick={() => handleTabClick(setting.id)}
            >
              {setting.label}
            </li>
          ))}
        </ul>
        <Link href="/" className={cx("btn-exit")}>
          Thoát
        </Link>
      </div>
      {activeTabComponent}
    </div>
  );
};

export default Account;
