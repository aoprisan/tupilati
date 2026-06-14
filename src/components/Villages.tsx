import { sate } from "../data/comuna";

export default function Villages() {
  return (
    <section id="sate" className="section section-alt">
      <div className="container">
        <header className="chapter" data-reveal>
          <span className="chapter-index" aria-hidden="true" />
          <h2 className="section-title">
            Satele <em>comunei</em>
          </h2>
          <p className="section-lead">
            Comuna Tupilați este formată din patru sate: Arămoaia, Hanul Ancuței,
            Totoiești și Tupilați — reședința de comună.
          </p>
        </header>

        <ol className="gazetteer">
          {sate.map((sat, i) => (
            <li key={sat.nume} className="gaz-item" data-reveal>
              <span className="gaz-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="gaz-name">
                  {sat.nume}
                  {sat.resedinta && <span className="rubric">reședință</span>}
                </h3>
                <p className="gaz-desc">{sat.descriere}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
