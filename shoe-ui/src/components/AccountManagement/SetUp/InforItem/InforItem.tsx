"use client";
import React, { useState, useEffect } from "react";
import classNames from "classNames/bind";
import styles from "./InforItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

type InforItemProps = {
  title: string;
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  disable?: boolean;
};

const InforItem = ({
  title,
  value,
  setValue,
  editMode,
  setEditMode,
  disable,
}: InforItemProps) => {
  const [edit, setEdit] = useState(false);
  const [temp, setTemp] = useState("");

  const handleEdit = () => {
    setTemp(value);
    setEdit(true);
    setEditMode(true);
  };

  useEffect(() => {
    if (!editMode) {
      setEdit(false);
    }
  }, [editMode]);

  const handleCancel = () => {
    setValue?.(temp);
    setEdit(false);
  };

  const handleSave = () => {
    setValue?.(value);
    setEdit(false);
    setEditMode(false);
  };
  return (
    <li className={cx("infor-item")}>
      <div className={cx("infor-body")}>
        <h3 className={cx("item-title")}>{title}:</h3>*
        {edit && editMode ? (
          <input
            type="text"
            value={value}
            className={cx("input-content")}
            onChange={(e) => setValue?.(e.target.value)}
          />
        ) : (
          <span className={cx("item-content")}>{value}</span>
        )}
      </div>

      {edit && editMode ? (
        <div>
          <span className={cx("edit")} onClick={handleCancel}>
            <FontAwesomeIcon icon={faRotateLeft} className={cx("edit-icon")} />
          </span>

          <span className={cx("edit")} onClick={handleSave}>
            <FontAwesomeIcon icon={faCheck} className={cx("edit-icon")} />
          </span>
        </div>
      ) : (
        !disable && (
          <div className={cx("edit")} onClick={handleEdit}>
            <span>Sửa</span>
            <FontAwesomeIcon icon={faPenToSquare} className={cx("edit-icon")} />
          </div>
        )
      )}
    </li>
  );
};

export default InforItem;
