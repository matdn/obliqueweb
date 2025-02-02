'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '../styles/Slider.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Slider() {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const images = [
        { src: '/Slider/image1.png', label: '1ère édition' },
        { src: '/Slider/image2.png', label: '2ème édition' },
    ];

    useEffect(() => {
        let ctx;

        if (containerRef.current) {
            ctx = gsap.context(() => {
                gsap.to(containerRef.current, {
                    scrollTrigger: {
                        trigger: sliderRef.current,
                        start: 'top top',
                        end: `+=${500 * images.length}`,
                        scrub: true,
                        pin: true,
                        snap: 1 / (images.length - 1),
                    },
                    xPercent: -(100 * (images.length - 1)), // Déplacement horizontal
                    ease: 'none',
                });
            });
        }

        return () => {
            if (ctx) ctx.revert();
        };
    }, [images]);

    return (
        <div ref={sliderRef} className={styles.slider}>
            <div ref={containerRef} className={styles.sliderTrack}>
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={image.src} alt={`Slide ${index}`} />
                        <div className={styles.label}>{image.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
