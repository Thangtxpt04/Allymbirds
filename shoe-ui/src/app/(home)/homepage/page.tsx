import classNames from "classNames/bind";
import styles from "./Homepage.module.scss";
import Sidebar from "@/components/Sidebar";
import Products from "@/components/Products";
import { ICategory } from "@/types/Product";
import { getCategories } from "../../../../api/Category";
import Banner from "@/components/Banner";
import Gift from "@/components/Gift";
import Link from "next/link";

const cx = classNames.bind(styles);

export default async function HomePage() {
  const Categories = await getCategories();

  return (
    <main>
      <Banner />
      <Gift />

      <div className={cx("top-catagories")}>
        <ul className={cx("row", "list")}>
          {Categories.map((Category: ICategory) => (
            <li key={Category._id} className="col l-1">
              <div className={cx("item")}>
                <Link href={`#${Category._id}`}>{Category.title}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid wide">
        <div className="row container__content">
          <div className="col l-2">
            <Sidebar />
          </div>
          <div className="col l-10">
            {Categories.map((Category: ICategory) => (
              <Products key={Category._id} Category={Category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
