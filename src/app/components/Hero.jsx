"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "../styles/Hero.module.scss";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);
    const imagesRef = useRef([]);



    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <img
                    src="/Hero/obliqueHero.svg"
                    alt="Logo"
                    width={300}
                    height={150}
                    priority
                    className={styles.logo}
                />
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        src={`/Hero/HI${index + 1}.png`}
                        alt={`Image ${index + 1}`}
                        width={400}
                        height={400}
                        ref={(el) => el && (imagesRef.current[index] = el)}
                        className={`${styles.image} ${styles[`image${index + 1}`]}`}
                    />
                ))}
            </div>
        </section>
    );
}
