"use client";

import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SectionSponsors from "./components/SectionSponsors";
import Slider from "./components/Slider";
import styles from "./page.module.css";
import StickySocials from "./components/StickySocials";
export default function Home() {
  return (
    <div className={styles.page}>
      <StickySocials />
      <Hero />
      <AboutUs />
      <Slider />
      <SectionSponsors />
      {/* <SectionContact /> */}
      <Footer />
    </div>
  );
}
