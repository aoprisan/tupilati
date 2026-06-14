import { identitate, geografie, imagini } from "../data/comuna";

export default function About() {
  return (
    <section id="despre" className="section">
      <div className="container">
        <h2 className="section-title">Despre comună</h2>
        <p className="section-lead">{identitate.descriere}</p>

        <figure className="about-figure">
          <img
            src={imagini.casaCatargi}
            alt="Casa Catargi din satul Tupilați"
            loading="lazy"
          />
          <figcaption>
            Casa Catargi din Tupilați — mărturie a trecutului boieresc al comunei.
          </figcaption>
        </figure>

        <dl className="fact-grid">
          <div className="fact">
            <dt>Județ</dt>
            <dd>{identitate.judet}</dd>
          </div>
          <div className="fact">
            <dt>Regiune istorică</dt>
            <dd>{identitate.regiune}</dd>
          </div>
          <div className="fact">
            <dt>Suprafață</dt>
            <dd>{geografie.suprafataKm2} km²</dd>
          </div>
          <div className="fact">
            <dt>Altitudine</dt>
            <dd>{geografie.altitudineM} m</dd>
          </div>
          <div className="fact">
            <dt>Coordonate</dt>
            <dd>{geografie.coordonate.text}</dd>
          </div>
          <div className="fact">
            <dt>Față de Piatra Neamț</dt>
            <dd>~{geografie.distantaResedintaJudetKm} km</dd>
          </div>
          <div className="fact">
            <dt>Drum principal</dt>
            <dd>{geografie.drum}</dd>
          </div>
          <div className="fact">
            <dt>Așezare</dt>
            <dd>{geografie.vecinatate}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
