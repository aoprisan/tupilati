import { identitate, geografie, demografie, sate, imagini } from "../data/comuna";

export default function Hero() {
  return (
    <section className="frontispiece" id="top">
      <div className="container">
        <div className="fp-grid">
          <div className="fp-main">
            <p className="kicker fp-place fp-step" style={{ animationDelay: "0.05s" }}>
              {identitate.regiune} · {identitate.tara}
            </p>

            <h1 className="fp-title fp-step" style={{ animationDelay: "0.15s" }}>
              <span className="small">Comuna</span>
              {identitate.nume.replace("Comuna ", "")}
            </h1>

            <div className="fp-rule fp-step" style={{ animationDelay: "0.3s" }}>
              <span aria-hidden="true" />
            </div>

            <p className="fp-tagline fp-step" style={{ animationDelay: "0.4s" }}>
              {identitate.tagline}
            </p>

            <a
              className="fp-cta fp-step"
              href="#despre"
              style={{ animationDelay: "0.5s" }}
            >
              Deschide cronica
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <div className="fp-ledger fp-step" style={{ animationDelay: "0.55s" }}>
            <dl>
              <div className="row">
                <dt>Locuitori</dt>
                <dd>
                  {demografie.populatieActuala.toLocaleString("ro-RO")}{" "}
                  <small>2021</small>
                </dd>
              </div>
              <div className="row">
                <dt>Sate</dt>
                <dd>{sate.length}</dd>
              </div>
              <div className="row">
                <dt>Suprafață</dt>
                <dd>
                  {geografie.suprafataKm2} <small>km²</small>
                </dd>
              </div>
              <div className="row">
                <dt>Altitudine</dt>
                <dd>
                  {geografie.altitudineM} <small>m</small>
                </dd>
              </div>
              <div className="row">
                <dt>Coordonate</dt>
                <dd>
                  <small>{geografie.coordonate.text}</small>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <figure
          className="plate wide fp-plate fp-step"
          style={{ animationDelay: "0.65s" }}
        >
          <img src={imagini.hero} alt="Vedere din comuna Tupilați" />
          <figcaption className="plate-caption">
            Terasa râului Moldova — comuna Tupilați, la poarta Hanului Ancuței.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
