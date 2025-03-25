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
        async function fetchEvents() {
            try {
                const res = await fetch("/data/festival_data.json");
                const data = await res.json();

                // Générer un slug à partir du titre pour la navigation
                const formattedEvents = data.map((event) => ({
                    ...event,
                    slug: event.title
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "") // remove accents
                        .replace(/\s+/g, "-"), // replace spaces with dashes
                }));

                setEvents(formattedEvents);
                console.log("Données JSON locales chargées :", formattedEvents);
            } catch (error) {
                console.error("Erreur lors du chargement des événements :", error);
            }
        }

        fetchEvents();
    }, []);

    useEffect(() => {
        if (!containerRef.current || events.length === 0) return;

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
    }, [events]);

    return (
        <div className={styles.sliderWrapper}>
            <div ref={sliderRef} className={styles.slider}>
                <div ref={containerRef} className={styles.sliderTrack}>
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className={styles.slide}
                            onClick={() => router.push(`/event/${event.slug}`)}
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
