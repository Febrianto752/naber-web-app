import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export const metadata = {
  title: "Naber",
};
export default function Home() {
  return (
    <main>
      <Banner />
      <section className="py-5">
        <div className="container">
          <h2
            className="text-center border-bottom border-success"
            style={{ width: "fit-content" }}
          >
            Tentang Aplikasi
          </h2>
        </div>
      </section>
    </main>
  );
}
