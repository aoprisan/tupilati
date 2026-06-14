import { identitate, geografie, demografie, sate } from "../data/comuna";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-eyebrow">{identitate.regiune} · {identitate.tara}</p>
        <h1>{identitate.nume}</h1>
        <p className="hero-tagline">{identitate.tagline}</p>

        <ul className="hero-stats" aria-label="Date sintetice">
          <li>
            <strong>{demografie.populatieActuala.toLocaleString("ro-RO")}</strong>
            <span>locuitori (2021)</span>
          </li>
          <li>
            <strong>{sate.length}</strong>
            <span>sate</span>
          </li>
          <li>
            <strong>{geografie.suprafataKm2} km²</strong>
            <span>suprafață</span>
          </li>
          <li>
            <strong>{geografie.altitudineM} m</strong>
            <span>altitudine</span>
          </li>
        </ul>

        <a className="btn" href="#despre">
          Descoperă comuna
        </a>
      </div>
    </section>
  );
}
