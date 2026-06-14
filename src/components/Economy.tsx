import { economie } from "../data/comuna";

export default function Economy() {
  const [lead, ...rest] = economie.detalii;

  return (
    <section id="economie" className="section section-alt">
      <div className="container">
        <header className="chapter" data-reveal>
          <span className="chapter-index" aria-hidden="true" />
          <h2 className="section-title">Economie</h2>
          <p className="section-lead">{economie.rezumat}</p>
        </header>

        <div className="economy-grid">
          <blockquote className="feature-quote" data-reveal>
            {lead}
          </blockquote>

          <ul className="detail-list" data-reveal>
            {rest.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
