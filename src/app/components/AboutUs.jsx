// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import styles from "../styles/AboutUs.module.scss";

// export default function AboutUs() {
//     const textRef = useRef(null);
//     const aboutDivRef = useRef(null);
//     // useEffect(() => {
//     //     // Enregistrer le plugin ScrollTrigger
//     //     gsap.registerPlugin(ScrollTrigger);
//     //     if (typeof window !== "undefined") {
//     //         gsap.registerPlugin(ScrollTrigger);
//     //     }
//     //     // Animation du texte
//     //     gsap.fromTo(
//     //         textRef.current,
//     //         { x: "30%" }, // Départ hors écran à gauche
//     //         {
//     //             x: "50%", // Finit hors écran à droite
//     //             ease: "none", // Animation linéaire
//     //             scrollTrigger: {
//     //                 trigger: aboutDivRef.current,
//     //                 start: "center bottom", // Début de l'animation
//     //                 end: "bottom top", // Fin de l'animation
//     //                 scrub: 1, // Synchronisation avec le scroll
//     //             },
//     //         }
//     //     );

//     // }, []);

//     return (
//         <section ref={aboutDivRef} className={styles.aboutUs}>
//             <div className={styles.container}>
//                 <img
//                     src="./AboutUs/aboutUsImg.png"
//                     alt="aboutUsImg"
//                     className={styles.logo}
//                 />
//             </div>
//             <h2 ref={textRef}>
//                 QUI SOMMES NOUS ? QUI SOMMES NOUS ? QUI SOMMES NOUS ?
//                 QUI SOMMES NOUS ? QUI SOMMES NOUS ? QUI SOMMES NOUS ?
//             </h2>
//             <p><span>Les jeunesses (et non pas la jeunesse) ont déjà montré leur force créatrice dans les mouvements émancipateurs de ces dernières années.</span>
//                 Nous aspirons à renforcer cette tendance et avons à cœur de donner leur place à tous types d’artistes, d’universités, et de cursus professionnalisant dans tous les domaines d’étude.</p>

//             <div className={styles.containerInfos}>
//                 <div className={styles.content}>
//                     <p className={styles.number}>4</p>
//                     <p className={styles.description}>éditions</p>
//                 </div>
//                 <div className={styles.content}>
//                     <p className={styles.number}>50+</p>
//                     <p className={styles.description}>artistes</p>
//                 </div>
//                 <div className={styles.content}>
//                     <p className={styles.number}>32</p>
//                     <p className={styles.description}>bénévoles</p>
//                 </div>
//                 <div className={styles.content}>
//                     <p className={styles.number}>300+</p>
//                     <p className={styles.description}>visiteurs</p>
//                 </div>
//             </div>
//         </section>
//     );
// }
