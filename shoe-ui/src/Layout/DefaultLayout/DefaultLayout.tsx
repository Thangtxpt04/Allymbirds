import Header from "../components/Header";
import Footer from "@/Layout/components/Footer";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
