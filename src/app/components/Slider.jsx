"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "../styles/Slider.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Slider() {
    const [events, setEvents] = useState([]);
    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        fetch("/data/events.json")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                console.log("Données chargées :", data);
            });
    }, []);

    useEffect(() => {
        if (!containerRef.current || events.length === 0) return;

        let ctx;
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        ctx = gsap.context(() => {
            gsap.to(containerRef.current, {
                xPercent: -(100 * (events.length - 1)),
                ease: "none",
                scrollTrigger: {
                    trigger: sliderRef.current,
                    start: "top top",
                    end: `+=${window.innerWidth * (events.length - 1)}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    snap: {
                        snapTo: 1 / (events.length - 1),
                        duration: { min: 0.2, max: 0.6 },
                        delay: 0.1,
                    },
                },
            });
        });

        return () => {
            if (ctx) ctx.revert();
        };
    }, [events]); // Exécuter GSAP uniquement quand `events` est chargé

    return (
        <div className={styles.sliderWrapper}>
            <div ref={sliderRef} className={styles.slider}>
                <div ref={containerRef} className={styles.sliderTrack}>
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className={styles.slide}
                            onClick={() => router.push(`/event/${event.id}`)}
                        >
                            <img src={event.image} alt={event.title} />
                            <div className={styles.label}>{event.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
