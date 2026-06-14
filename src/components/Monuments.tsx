import { monumente } from "../data/comuna";

export default function Monuments() {
  return (
    <section id="monumente" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Monumente istorice</h2>
        <p className="section-lead">
          Pe teritoriul comunei se află mai multe obiective incluse pe lista
          monumentelor istorice din județul Neamț.
        </p>

        <div className="card-grid">
          {monumente.map((m) => (
            <article key={m.nume} className="card monument">
              <h3>{m.nume}</h3>
              <p className="monument-meta">
                <span>{m.datare}</span> · <span>{m.localitate}</span>
              </p>
              <p>{m.descriere}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
