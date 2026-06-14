import { sate } from "../data/comuna";

export default function Villages() {
  return (
    <section id="sate" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Satele comunei</h2>
        <p className="section-lead">
          Comuna Tupilați este formată din patru sate: Arămoaia, Hanul Ancuței,
          Totoiești și Tupilați (reședința de comună).
        </p>

        <div className="card-grid">
          {sate.map((sat) => (
            <article key={sat.nume} className="card">
              <h3>
                {sat.nume}
                {sat.resedinta && <span className="badge">reședință</span>}
              </h3>
              <p>{sat.descriere}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
