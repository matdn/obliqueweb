"use client";

import styles from "../styles/Footer.module.scss";
import { FaInstagram, FaLinkedin, FaXTwitter, FaDribbble } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <FaInstagram />
                <FaLinkedin />
                <FaXTwitter />
                <FaDribbble />
            </div>
            <div className={styles.topSection}>
                <p className={styles.slogan}>
                    our vision is to empower users while making their day-to-day activities more effortless.
                </p>
                <button className={styles.contactButton}>nous contacter</button>
                <nav className={styles.navigation}>
                    <span>NAVIGATION</span>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>NOS EVENEMENTS</li>
                        <li>NOS SPONSORS</li>
                        <li>NOUS CONTACTER</li>
                    </ul>
                </nav>

            </div>
            <div className={styles.bottomSection}>
                <h1 className={styles.branding}>OBLIQUE-FESTIVAL</h1>
            </div>
        </footer>
    );
}
