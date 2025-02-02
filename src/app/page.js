import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Slider from "./components/Slider";
import Sponsors from "./components/SPonsors";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <AboutUs />
      <Slider />
      <Sponsors />
    </div>
  );
}
