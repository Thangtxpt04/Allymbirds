"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import Header from "@/Layout/components/Header";
import Footer from "@/Layout/components/Footer";

type StateType = {
  user: string;
  token: string;
};
export default function DefaultLayput({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const isAuth = Boolean(useSelector((state: StateType) => state.token));
  !isAuth && redirect("/login");

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
