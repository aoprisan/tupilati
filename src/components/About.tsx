import { identitate, geografie, imagini } from "../data/comuna";

export default function About() {
  return (
    <section id="despre" className="section">
      <div className="container">
        <header className="chapter" data-reveal>
          <span className="chapter-index" aria-hidden="true" />
          <h2 className="section-title">Despre comună</h2>
        </header>

        <div className="about-grid">
          <div className="prose" data-reveal>
            <p className="dropcap section-lead">{identitate.descriere}</p>
          </div>

          <figure className="plate tall" data-reveal>
            <img
              src={imagini.casaCatargi}
              alt="Casa Catargi din satul Tupilați"
              loading="lazy"
            />
            <figcaption className="plate-caption">
              Casa Catargi — mărturie a trecutului boieresc al comunei.
            </figcaption>
          </figure>
        </div>

        <dl className="ledger" data-reveal>
          <div className="row">
            <dt>Județ</dt>
            <dd>{identitate.judet}</dd>
          </div>
          <div className="row">
            <dt>Regiune istorică</dt>
            <dd>{identitate.regiune}</dd>
          </div>
          <div className="row">
            <dt>Suprafață</dt>
            <dd>{geografie.suprafataKm2} km²</dd>
          </div>
          <div className="row">
            <dt>Altitudine</dt>
            <dd>{geografie.altitudineM} m</dd>
          </div>
          <div className="row">
            <dt>Coordonate</dt>
            <dd>{geografie.coordonate.text}</dd>
          </div>
          <div className="row">
            <dt>Față de Piatra Neamț</dt>
            <dd>~{geografie.distantaResedintaJudetKm} km</dd>
          </div>
          <div className="row">
            <dt>Drum principal</dt>
            <dd>{geografie.drum}</dd>
          </div>
          <div className="row">
            <dt>Așezare</dt>
            <dd>{geografie.vecinatate}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
