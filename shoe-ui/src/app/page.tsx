"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

type StateType = {
  user: string;
  token: string;
};
export default function Home() {
  const isAuth = Boolean(useSelector((state: StateType) => state.token));
  isAuth ? redirect("/homepage") : redirect("/login");
}
