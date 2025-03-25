const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1338";

export async function getEvents() {
    const res = await fetch(`${API_URL}/api/evenements?populate=*`, {
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Erreur lors de la récupération des événements");
    }

    return res.json();
}
