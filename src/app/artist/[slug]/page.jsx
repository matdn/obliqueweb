"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../../styles/Artist.module.scss";

export default function ArtistPage() {
    const params = useParams();
    const slug = params?.slug; // slug passé via URL (ex: /artist/bjarki)

    const [artist, setArtist] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (!slug) return;

        async function fetchArtistFromJson() {
            try {
                const res = await fetch("/data/festival_data.json");
                const data = await res.json();

                // Chercher l’artiste dans toutes les éditions
                const allArtists = data.flatMap(event => event.artists);

                // Transformer le nom de l’artiste en slug
                const selectedArtist = allArtists.find((artist) => {
                    const artistSlug = artist.name
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "") // remove accents
                        .replace(/\s+/g, "-");

                    return artistSlug === slug;
                });

                if (!selectedArtist) {
                    router.push("/404");
                    return;
                }

                setArtist(selectedArtist);
            } catch (error) {
                console.error("Erreur lors du chargement de l'artiste depuis le JSON :", error);
                router.push("/404");
            }
        }

        fetchArtistFromJson();
    }, [slug]);

    if (!artist) {
        return <p>Chargement...</p>;
    }

    return (
        <div className={styles.artistPage}>
            <h1>{artist.name}</h1>
            <img src={artist.image} alt={artist.name} className={styles.image} />
            <p className={styles.description}>{artist.description}</p>

            <button className={styles.backButton} onClick={() => router.push("/")}>
                Retour à l'accueil
            </button>
        </div>
    );
}
