"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import classNames from "classNames/bind";
import styles from "./page.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setLogin } from "@/state";

const cx = classNames.bind(styles);

type FormLogin = {
  email: string;
  password: string;
};

const LoginSechema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải chứa ít nhất 8 kí tự"),
});

const Login = () => {
  const formLogin = useForm<FormLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(LoginSechema),
  });

  const { register, handleSubmit, formState, reset } = formLogin;
  const { errors } = formState;
  const [errServer, setErrorServer] = useState(null);
  const dispath = useDispatch();

  const router = useRouter();
  const onSubmit = (data: FormLogin) => {
    axios
      .post("http://localhost:5000/auth/login", data)
      .then((res) => {
        const User = res.data;

        if (User) {
          dispath(
            setLogin({
              user: User.user,
              token: User.token,
              orderId: User.orderId,
              productCartLength: User.productCartLength,
            })
          );
          router.push("/");
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
            <h3 className={cx("heading")}>Đăng nhập</h3>

            <div className={cx("form-container")}>
              <div className={cx("group")}>
                <input
                  type="text"
                  id="email"
                  className={cx(
                    "input",
                    (!!errors.email?.message || !!errServer) && "error"
                  )}
                  {...register("email")}
                  placeholder="Nhập email hoặc số điện thoại của bạn"
                />
                <span className={cx("form-message")}>
                  {errors.email?.message}
                </span>
              </div>

              <div className={cx("group mt-32")}>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className={cx(
                    "input",
                    (!!errors.password?.message || !!errServer) && "error"
                  )}
                  placeholder="Mật khẩu"
                />
                <span className={cx("form-message")}>
                  {errors.password?.message || errServer}
                </span>
              </div>
            </div>

            <button className={cx("btn-submit", "mt-32")}>Đăng nhập</button>

            <div className={cx("aside", "mt-32")}>
              <div className={cx("keep")}>
                <input type="checkbox" name="" id="" />
                <span>Duy trì đăng nhập</span>
              </div>
              <div className={cx("forgot")}>
                <a href="" className="">
                  Quên mặt khẩu?
                </a>
              </div>
            </div>

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
              Bạn chưa có tài khoản?
              <Link href="register">Đăng kí</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
