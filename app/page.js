import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";

export const metadata = {
  title: "Naber",
};
export default function Home() {
  return (
    <main>
      <Banner />
      <About />
    </main>
  );
}
