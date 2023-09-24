import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Service from "@/components/Service";
import { services } from "@/data/data";
import ServiceList from "@/components/ServiceList";

export const metadata = {
  title: "Naber",
};
export default function Home() {
  return (
    <main>
      <Banner />
      <About />

      <section className="container py-5">
        <div
          className="border-bottom-green mx-auto"
          style={{ width: "fit-content" }}
        >
          <h2 className="text-center" style={{ width: "fit-content" }}>
            Layanan - Layanan Kami
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col col-md-10 col-xl-8">
            <ServiceList services={services} className="services mt-5" />
          </div>
        </div>
      </section>
    </main>
  );
}
