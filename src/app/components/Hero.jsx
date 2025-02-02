"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../styles/Hero.module.scss";

export default function Hero() {
    const imagesRef = useRef([]);

    useEffect(() => {
        const centralImage = imagesRef.current[0];
        const surroundingImages = imagesRef.current.slice(1);

        const tl = gsap.timeline();

        tl.fromTo(
            centralImage,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        tl.fromTo(
            surroundingImages,
            {
                x: 0,
                y: 0,
            },
            // x: (i) => [0, 0, 0, 0][i], y: (i) => [0, 0, 0, 0][i], 
            {
                scale: 1,
                opacity: 1,
                x: (i) => [-350, 350, -350, 400][i],
                y: (i) => [-250, -250, 250, 250][i],
                // stagger: 0.2,
                duration: 1.5,
                // ease: "power3.out",
            },
            // "+=0.2" // Délai après l'animation centrale
        );
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <img
                    src="./Hero/obliqueHero.svg"
                    alt="Logo"
                    className={styles.logo}
                />
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        src={`./Hero/HI${index + 1}.png`} // Remplace avec tes chemins d'images
                        alt={`Image ${index + 1}`}
                        ref={(el) => (imagesRef.current[index] = el)}
                        className={`${styles.image} ${styles[`image${index + 1}`]}`}
                    />
                ))}
            </div>
        </section>
    );
}
