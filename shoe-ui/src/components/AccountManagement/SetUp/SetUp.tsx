"use client";
import React, { useState, useEffect, useMemo } from "react";
import classNames from "classNames/bind";
import styles from "./SetUp.module.scss";
import InforItem from "./InforItem";
import { getUser, updateUser } from "../../../../api/User";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

type StateType = {
  user: {
    _id: string;
  };
};

type requestDataType = {
  userId: string;
  fullName: string;
  birtday: string;
  gender: string;
  phone: string;
  address: string;
};

type initialDataType = {
  title: string;
  value: any;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

const SetUp = () => {
  const [fullName, setFullName] = useState("");
  const [birtday, setBirtday] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const userId = useSelector((state: StateType) => state.user._id);
  const inforData = useMemo(
    () => [
      { title: "Họ Và Tên", value: fullName, setValue: setFullName },
      { title: "Ngày sinh", value: birtday, setValue: setBirtday },
      { title: "Giới tính", value: gender, setValue: setGender },
      { title: "Email", value: email, disable: true },
      { title: "Địa chỉ", value: address, setValue: setAddress },
      { title: "Số điện thoại", value: phone, setValue: setPhone },
    ],
    [
      fullName,
      setFullName,
      birtday,
      setBirtday,
      gender,
      setGender,
      email,
      address,
      setAddress,
      phone,
      setPhone,
    ]
  );

  const [initialData, setInitialData] = useState<initialDataType[]>();

  const [save, setSave] = useState(false);

  useEffect(() => {
    const dataChanged = !initialData?.every(
      (item, index) => item.value === inforData[index].value
    );
    setSave(dataChanged);
  }, [inforData, initialData]);

  const handleSubmit = () => {
    setInitialData([...inforData]);
    setSave(false);
    setEditMode(false);

    const requestData: requestDataType = {
      userId,
      fullName,
      birtday,
      gender,
      phone,
      address,
    };
    const fetchApi = async () => {
      await updateUser(requestData);
    };
    fetchApi();
  };

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getUser(userId);
      const { fullName, birtday, email, gender, phone, address } = data;
      setFullName(fullName);
      setBirtday(birtday);
      setGender(gender);
      setEmail(email);
      setPhone(phone);
      setAddress(address);

      const newInitialData = [
        { title: "Họ Và Tên", value: fullName, setValue: setFullName },
        { title: "Ngày sinh", value: birtday, setValue: setBirtday },
        { title: "Giới tính", value: gender, setValue: setGender },
        { title: "Email", value: email },
        { title: "Địa chỉ", value: address, setValue: setAddress },
        { title: "Số điện thoại", value: phone, setValue: setPhone },
      ];

      setInitialData(newInitialData);
    };
    fetchApi();
  }, [userId]);

  return (
    <div className={cx("content")}>
      <h1 className={cx("title")}>Thông tin cá nhân</h1>
      <ul className={cx("infors")}>
        {inforData.map((item, index) => (
          <InforItem
            key={index}
            title={item.title}
            value={item.value}
            setValue={item.setValue}
            editMode={editMode}
            setEditMode={setEditMode}
            disable={item?.disable}
          />
        ))}
      </ul>
      <div className={cx("save")}>
        <button
          className={cx("btn-save", `${!save && "disabled"}`)}
          onClick={handleSubmit}
          disabled={!save}
        >
          Lưu lại
        </button>
      </div>
    </div>
  );
};

export default SetUp;
