import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PhotoCard from "./PhotoCard";

function App() {
    const [flowers, setFlowers] = useState(true);
    const [animals, setAnimals] = useState(true);
    const [cars, setCars] = useState(true);

    const [photos, setPhotos] = useState([
        { id: 1, alt: "kwiat1", category: 1, downloads: 10 },
        { id: 2, alt: "kwiat2", category: 1, downloads: 3 },
        { id: 3, alt: "zwierze1", category: 2, downloads: 5 },
        { id: 4, alt: "zwierze2", category: 2, downloads: 7 },
        { id: 5, alt: "auto1", category: 3, downloads: 8 },
        { id: 6, alt: "auto2", category: 3, downloads: 2 }
    ]);

    function download(id) {
        setPhotos(prev =>
            prev.map(p =>
                p.id === id ? { ...p, downloads: p.downloads + 1 } : p
            )
        );
    }

    function showPhoto(p) {
        return (
            (p.category === 1 && flowers) ||
            (p.category === 2 && animals) ||
            (p.category === 3 && cars)
        );
    }

    function getImage(p) {
        const images = {
            1: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=400&q=60",
            2: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=400&q=60",
            3: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400&q=60"
        };

        return images[p.category];
    }

    return (
        <div className="container">
            <h1>kategorie zdjęć</h1>

            <div className="form-check form-switch form-check-inline">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={flowers}
                    onChange={() => setFlowers(!flowers)}
                />
                <label className="form-check-label">kwiaty</label>
            </div>

            <div className="form-check form-switch form-check-inline">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={animals}
                    onChange={() => setAnimals(!animals)}
                />
                <label className="form-check-label">zwierzęta</label>
            </div>

            <div className="form-check form-switch form-check-inline">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={cars}
                    onChange={() => setCars(!cars)}
                />
                <label className="form-check-label">samochody</label>
            </div>

            <div className="row mt-3">
                {photos
                    .filter(showPhoto)
                    .map(p => (
                        <PhotoCard
                            key={p.id}
                            photo={p}
                            onDownload={download}
                            imageUrl={getImage(p)}
                        />
                    ))}
            </div>
        </div>
    );
}

export default App;