"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../../styles/Artist.module.scss";

export default function ArtistPage() {
    const params = useParams(); // ✅ Récupérer les paramètres dynamiques
    const artistId = params?.id; // ✅ Extraire `id`
    const [artist, setArtist] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (!artistId) return;

        fetch("/data/events.json")
            .then((res) => res.json())
            .then((data) => {
                const allArtists = data.flatMap(event => event.artists);
                const selectedArtist = allArtists.find(a => a.id === parseInt(artistId));

                if (!selectedArtist) {
                    router.push("/404");
                } else {
                    setArtist(selectedArtist);
                }
            });
    }, [artistId]);

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
