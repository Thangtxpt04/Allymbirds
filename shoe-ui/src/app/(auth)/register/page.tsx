"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import classNames from "classNames/bind";
import styles from "./page.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = classNames.bind(styles);

type FormRegister = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const RegisterSchema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có ít nhất 8 kí tự"),
  passwordConfirm: yup
    .string()
    .required("Vui lòng nhập lại mật khẩu")
    .oneOf([yup.ref("password")], "Mật khẩu nhập lại không chính xác"),
});

const Register = () => {
  const formRegister = useForm<FormRegister>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(RegisterSchema),
  });
  const { register, handleSubmit, formState } = formRegister;
  const { errors } = formState;
  const [errServer, setErrorServer] = useState(null);

  const router = useRouter();

  const onSubmit = (data: FormRegister) => {
    axios
      .post("http://localhost:5000/auth/register", data)
      .then((res) => {
        const savedUser = res.data;
        if (savedUser) {
          router.push("/login");
        }
      })
      .catch((err) => {
        setErrorServer(err.response.data.msg);
      });
  };

  return (
    <div className="row wrapper no-gutters">
      <div className="col l-6 no-gutters">
        <div className={cx("banner")}></div>
      </div>
      <div className="col l-6">
        <div className={cx("container")}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id={styles.authForm}
            className={cx("form")}
          >
            <div className={cx("logo")}>
              <img src={"/images/logo-black.png"} />
            </div>
            <h3 className={cx("heading")}>Đăng ký nhanh</h3>

            <div className={cx("form-container")}>
              <div className={cx("group")}>
                <input
                  type="text"
                  id="email"
                  {...register("email")}
                  className={cx(
                    "input",
                    (!!errors.email?.message || errServer) && "error"
                  )}
                  placeholder="Nhập email hoặc số điện thoại của bạn"
                />
                <span className={cx("form-message")}>
                  {errors.email?.message || errServer}
                </span>
              </div>

              <div className={cx("group", "mt-24")}>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className={cx("input", !!errors.password?.message && "error")}
                  placeholder="Mật khẩu"
                />
                <span className={cx("form-message")}>
                  {errors.password?.message}
                </span>
              </div>
              <div className={cx("group", "mt-24")}>
                <input
                  type="password"
                  id="password-confirm"
                  {...register("passwordConfirm")}
                  className={cx(
                    "input",
                    !!errors.passwordConfirm?.message && "error"
                  )}
                  placeholder="Nhập lại mật khẩu"
                />
                <span className={cx("form-message")}>
                  {errors.passwordConfirm?.message}
                </span>
              </div>
            </div>

            <button className={cx("btn-submit", "mt-24")}>Tạo tài khoản</button>

            <div className={cx("other")}>
              <span className={cx("line")}></span>
              <span>Hoặc</span>
              <div className={cx("line")}></div>
            </div>

            <div className={cx("socials")}>
              <img
                src="/images/Google_Iconswebp.webp"
                className={cx("icon")}
                alt=""
              />
              Đăng nhập với Google
            </div>

            <div className={cx("socials")}>
              <img
                src="/images/facebook-icon.png"
                className={cx("icon")}
                alt=""
              />
              Đăng nhập với Facebook
            </div>

            <div className={cx("register")}>
              Bạn đã có tài khoản?
              <Link href="/login">Đăng nhập</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
