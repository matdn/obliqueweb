// "use client";
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import styles from '../styles/Sponsors.module.scss';

// gsap.registerPlugin(ScrollTrigger);

// export default function Sponsors() {
//     const rowRefs = useRef([]);

//     // useEffect(() => {
//     //     if (typeof window !== "undefined") {
//     //         gsap.registerPlugin(ScrollTrigger);
//     //     }
//     //     const speeds = [3, -5, 4]; // Vitesse de déplacement selon le scroll

//     //     rowRefs.current.forEach((row, index) => {
//     //         const speed = speeds[index];

//     //         gsap.to(row, {
//     //             x: () => (speed > 0 ? -row.offsetWidth : row.offsetWidth),
//     //             ease: 'none',
//     //             scrollTrigger: {
//     //                 trigger: row,
//     //                 start: 'top bottom',
//     //                 end: 'bottom top',
//     //                 scrub: 1,
//     //             },
//     //         });
//     //     });
//     // }, []);

//     return (
//         <section className={styles.sponsors}>
//             <div className={styles.header}>
//                 <h2>ils nous soutiennent</h2>
//                 <p>Oblique ne vivre sans votre précieux soutien, c’est pourquoi bla bla bla.</p>
//             </div>
//             <div className={styles.carousel}>
//                 {[...Array(3)].map((_, rowIndex) => (
//                     <div
//                         key={rowIndex}
//                         ref={(el) => (rowRefs.current[rowIndex] = el)}
//                         className={`${styles.row} ${styles[`row${rowIndex + 1}`]}`}
//                     >
//                         {[...Array(3)].map((_, index) => (
//                             <div key={index} className={styles.logo}>
//                                 <img src={`./Sponsors/logo${index + 1}.png`} alt={`Logo ${index + 1}`} />
//                             </div>
//                         ))}
//                         {[...Array(3)].map((_, index) => (
//                             <div key={`duplicate-${index}`} className={styles.logo}>
//                                 <img src={`/sponsors/logo${index + 1}.png`} alt={`Logo ${index + 1}`} />
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
