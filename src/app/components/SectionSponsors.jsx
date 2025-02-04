"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../styles/SectionSponsors.module.scss";
import Image from "next/image";

export default function SectionSponsors() {
    const sliderRef = useRef(null);
    const tl = useRef(null); // Stocke l'animation GSAP
    let lastScrollY = useRef(0); // Stocke la dernière position du scroll

    // useEffect(() => {
    //     const slider = sliderRef.current;

    //     // Clonage des éléments pour effet infini
    //     const logos = Array.from(slider.children);
    //     logos.forEach((logo) => {
    //         const clone = logo.cloneNode(true);
    //         slider.appendChild(clone);
    //     });

    //     // Animation GSAP de base (scrolling infini)
    //     tl.current = gsap.to(slider, {
    //         x: "-50%",
    //         duration: 15,
    //         ease: "linear",
    //         repeat: -1
    //     });

    //     // Gestion du scroll pour inverser le sens
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         const scrollDirection = scrollY > lastScrollY.current ? 1 : -1; // Détecte le sens du scroll
    //         lastScrollY.current = scrollY;

    //         // Au lieu d'utiliser `reverse()`, on change la vitesse et la direction
    //         gsap.to(tl.current, {
    //             timeScale: scrollDirection,
    //             duration: 0.5 // Douce transition pour éviter les sauts
    //         });
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //         tl.current.kill();
    //     };
    // }, []);

    return (
        <section className={styles.sponsorsSection}>
            <h2 className={styles.title}><em>ils nous soutiennent</em></h2>
            <p className={styles.subtitle}>
                <em>oblique ne vivre sans votre précieux soutien <br />
                    c’est pourquoi bla bla bla</em>
            </p>

            <div className={styles.sliderContainer}>
                <div className={styles.slider} >
                    <Image className={styles.sliderImage} src="/Sponsors/_materiaux.png" alt="materiaux" height="350" width="250" />
                    <Image className={styles.sliderImage} src="/Sponsors/academie.png" alt="academie" height="250" width="250" />
                    <Image className={styles.sliderImage} src="/Sponsors/fresque.png" alt="fresque" height="250" width="250" />
                    <Image className={styles.sliderImage} src="/Sponsors/jac.jpeg" alt="jac" height="250" width="250" />
                </div>
            </div>

            <div className={styles.footer}>
                <span className={styles.join}><strong>NOUS REJOINDRE </strong></span>
                <Image src="/Sponsors/image1.png" alt="Person" width={150} height={80} className={styles.image} />
                <span className={styles.support}><strong> NOUS SOUTENIR </strong></span>
            </div>
        </section>
    );
}
