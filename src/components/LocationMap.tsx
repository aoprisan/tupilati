import { geografie } from "../data/comuna";

export default function LocationMap() {
  const { lat, lon } = geografie.coordonate;
  const d = 0.06; // jumătate din latura casetei (grade)
  const bbox = `${lon - d}%2C${lat - d}%2C${lon + d}%2C${lat + d}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
  const link = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=13/${lat}/${lon}`;

  return (
    <section id="harta" className="section">
      <div className="container">
        <h2 className="section-title">Așezare pe hartă</h2>
        <p className="section-lead">
          Comuna Tupilați este situată pe terasa râului Moldova, la granița dintre
          județele Neamț și Iași, la coordonatele {geografie.coordonate.text}.
        </p>

        <div className="map-frame">
          <iframe
            title="Harta comunei Tupilați"
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="map-link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Deschide harta mai mare (OpenStreetMap) →
          </a>
        </p>
      </div>
    </section>
  );
}
