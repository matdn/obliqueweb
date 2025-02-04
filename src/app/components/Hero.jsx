"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "../styles/Hero.module.scss";

export default function Hero() {
    const imagesRef = useRef([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        if (!imagesLoaded || imagesRef.current.length < 5) return;

        const centralImage = imagesRef.current[0];
        const surroundingImages = imagesRef.current.slice(1);

        const tl = gsap.timeline();

        tl.fromTo(
            centralImage,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
        );

        tl.fromTo(
            surroundingImages,
            { x: 0, y: 0 },
            {
                scale: 1,
                opacity: 1,
                x: (i) => [-350, 350, -350, 400][i],
                y: (i) => [-250, -250, 250, 250][i],
                duration: 1.5,
            }
        );
    }, [imagesLoaded]);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <Image
                    src="/Hero/obliqueHero.svg"
                    alt="Logo"
                    width={800} // Adapter la taille
                    height={500}
                    priority
                    className={styles.logo}
                />
                {[...Array(5)].map((_, index) => (
                    <Image
                        key={index}
                        src={`/Hero/HI${index + 1}.png`}
                        alt={`Image ${index + 1}`}
                        width={400} // Adapter la taille
                        height={400}
                        ref={(el) => el && imagesRef.current.push(el)}
                        onLoadingComplete={() => {
                            if (imagesRef.current.length === 5) setImagesLoaded(true);
                        }}
                        className={`${styles.image} ${styles[`image${index + 1}`]}`}
                    />
                ))}
            </div>
        </section>
    );
}
