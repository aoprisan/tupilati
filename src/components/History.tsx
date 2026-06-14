import { istorie } from "../data/comuna";

export default function History() {
  return (
    <section id="istorie" className="section">
      <div className="container">
        <header className="chapter" data-reveal>
          <span className="chapter-index" aria-hidden="true" />
          <h2 className="section-title">Istorie</h2>
        </header>

        <ol className="annals">
          {istorie.map((ev) => (
            <li key={ev.perioada} className="annal" data-reveal>
              <span className="annal-year">{ev.perioada}</span>
              <p className="annal-text">{ev.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
