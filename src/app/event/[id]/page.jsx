"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../../styles/Event.module.scss";

export default function EventPage() {
    const params = useParams(); // ✅ Récupérer les paramètres dynamiques
    const eventId = params?.id; // ✅ Extraire `id`
    const [event, setEvent] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (!eventId) return;

        fetch("/data/events.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedEvent = data.find((e) => e.id === parseInt(eventId));
                if (!selectedEvent) {
                    router.push("/404");
                } else {
                    setEvent(selectedEvent);
                }
            });
    }, [eventId]);

    if (!event) {
        return <p>Chargement...</p>;
    }

    return (
        <div className={styles.eventPage}>
            <h1>{event.title}</h1>
            <img src={event.image} alt={event.title} className={styles.image} />
            <p className={styles.description}>{event.description}</p>

            <h3>Artistes présents :</h3>
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

            {/* <button className={styles.backButton} onClick={() => router.push("/")}>
                Retour à l'accueil
            </button> */}
        </div>
    );
}
