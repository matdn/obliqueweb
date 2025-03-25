"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "../styles/AboutUs.module.scss";

export default function AboutUs() {
    const textRef = useRef(null);
    const aboutDivRef = useRef(null);
    const svgRef = useRef(null); // Référence pour l'animation du SVG

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Animation du texte
        gsap.fromTo(
            textRef.current,
            { x: "30%" }, // Départ hors écran à gauche
            {
                x: "50%", // Finit hors écran à droite
                ease: "none",
                scrollTrigger: {
                    trigger: aboutDivRef.current,
                    start: "center bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );

        // Animation du SVG (scaling + rotation au scroll)
        gsap.fromTo(
            svgRef.current,
            { scale: 0.8, rotate: 0, opacity: 0.8 }, // Départ avec une échelle réduite
            {
                scale: 1.2,
                rotate: 10,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: aboutDivRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2, // Effet fluide
                },
            }
        );
    }, []);

    return (
        <section ref={aboutDivRef} className={styles.aboutUs}>
            {/* <img ref={svgRef} src="/Union.svg" className={styles.svgAnimation} alt="Union Shape" /> */}
            <div className={styles.container}>
                <img
                    src="./AboutUs/aboutUsImg.png"
                    alt="aboutUsImg"
                    className={styles.logo}
                />
            </div>
            <h2 ref={textRef}>
                QUI SOMMES NOUS ? QUI SOMMES NOUS ? QUI SOMMES NOUS ?
                QUI SOMMES NOUS ? QUI SOMMES NOUS ? QUI SOMMES NOUS ?
            </h2>
            <p>
                <span>
                    Les jeunesses (et non pas la jeunesse) ont déjà montré leur force créatrice dans les mouvements émancipateurs de ces dernières années.
                </span>
                Nous aspirons à renforcer cette tendance et avons à cœur de donner leur place à tous types d’artistes, d’universités, et de cursus professionnalisant dans tous les domaines d’étude.
            </p>
        </section>
    );
}
