"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../styles/StickySocials.module.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaDribbble, FaLinkedinIn, FaX, FaXTwitter } from "react-icons/fa6";

export default function StickySocials() {
    const socialRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const socialElement = socialRef.current;
        const footerElement = document.querySelector("footer"); // Sélection du footer

        if (!footerElement) return; // Vérifie si le footer existe

        gsap.to(socialElement, {
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: footerElement,
                start: "top bottom", // Début de l'animation quand le footer entre dans l'écran
                end: "top 80%", // Disparaît complètement avant d’atteindre le footer
                scrub: true, // Effet fluide
            },
        });
    }, []);

    return (
        <div ref={socialRef} className={styles.stickySocials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className={styles.icon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaDribbble className={styles.icon} />
            </a>
        </div>
    );
}
