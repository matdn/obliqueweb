const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

// 📂 Chemins vers les fichiers
const excelFilePath = path.join(__dirname, "../public/data/festival_data.xlsx");
const jsonFilePath = path.join(__dirname, "../public/data/festival_data.json");

// 🔹 Fonction pour convertir Excel en JSON
function convertExcelToJson() {
    try {
        // 📖 Lecture du fichier Excel
        const workbook = xlsx.readFile(excelFilePath);
        const sheetName = workbook.SheetNames[0]; // Prend la première feuille
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        // 🏗️ Organisation des événements et artistes
        const events = {};
        let artistId = 101;

        // Création d'un mapping des événements basés sur Event ID
        const uniqueEvents = [...new Set(data.map(row => row["Event ID"]))];

        uniqueEvents.forEach(eventId => {
            const eventRows = data.filter(row => row["Event ID"] === eventId);
            if (eventRows.length > 0) {
                const firstRow = eventRows[0];
                events[eventId] = {
                    id: eventId,
                    title: firstRow["Edition"],
                    image: firstRow["Image Edition"],
                    description: firstRow["Description Edition"],
                    artists: []
                };

                eventRows.forEach(row => {
                    events[eventId].artists.push({
                        id: artistId++,
                        name: row["Artiste"],
                        image: row["Image Artiste"],
                        description: row["Description Artiste"]
                    });
                });
            }
        });

        // 💾 Sauvegarde en JSON
        fs.writeFileSync(jsonFilePath, JSON.stringify(Object.values(events), null, 4));
        console.log("✅ JSON généré avec succès :", jsonFilePath);
    } catch (error) {
        console.error("❌ Erreur lors de la conversion :", error);
    }
}

// Exécution du script
convertExcelToJson();
