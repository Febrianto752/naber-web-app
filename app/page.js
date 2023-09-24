import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Service from "@/components/Service";
import { services } from "@/data/data";
import ServiceList from "@/components/ServiceList";
import OurServices from "@/components/OurServices";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Naber",
};
export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <OurServices />
      <Footer />
    </main>
  );
}
