"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../../styles/Event.module.scss";

export default function EventPage() {
    const params = useParams();
    const slug = params.slug;
    const [event, setEvent] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (!slug) return;

        async function fetchEventFromJson() {
            try {
                const res = await fetch("/data/festival_data.json");
                const jsonData = await res.json();

                // Rechercher l'événement par titre transformé en slug
                const selectedEvent = jsonData.find((e) => {
                    const slugifiedTitle = e.title
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "") // remove accents
                        .replace(/\s+/g, "-"); // replace spaces with -

                    return slugifiedTitle === slug;
                });

                if (!selectedEvent) {
                    router.push("/404");
                    return;
                }

                setEvent(selectedEvent);
            } catch (error) {
                console.error("Erreur lors du chargement de l'événement depuis JSON :", error);
                router.push("/404");
            }
        }

        fetchEventFromJson();
    }, [slug]);

    if (!event) {
        return <p>Chargement...</p>;
    }

    return (
        <div className={styles.eventPage}>
            <h1>{event.title}</h1>
            <img src={event.image} alt={event.title} className={styles.image} />
            <p className={styles.description}>{event.description}</p>

            <h3>Artistes présents :</h3>
            {event.artists.length > 0 ? (
                <ul className={styles.artistsList}>
                    {event.artists.map((artist) => (
                        <li
                            key={artist.id}
                            className={styles.artistItem}
                            onClick={() => router.push(`/artist/${artist.id}`)}
                        >
                            <img src={artist.image} alt={artist.name} className={styles.artistImage} />
                            <p>{artist.name}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun artiste enregistré pour cet événement.</p>
            )}
        </div>
    );
}
