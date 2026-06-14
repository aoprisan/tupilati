import { monumente } from "../data/comuna";

export default function Monuments() {
  return (
    <section id="monumente" className="section section-alt">
      <div className="container">
        <header className="chapter" data-reveal>
          <span className="chapter-index" aria-hidden="true" />
          <h2 className="section-title">
            Monumente <em>istorice</em>
          </h2>
          <p className="section-lead">
            Pe teritoriul comunei se află mai multe obiective incluse pe lista
            monumentelor istorice din județul Neamț.
          </p>
        </header>

        <div className="monument-grid">
          {monumente.map((m) => (
            <article key={m.nume} className="monument" data-reveal>
              {m.imagine && (
                <figure className="plate">
                  <img src={m.imagine} alt={m.nume} loading="lazy" />
                </figure>
              )}
              <p className="monument-meta">
                {m.datare} · {m.localitate}
              </p>
              <h3>{m.nume}</h3>
              <p>{m.descriere}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
