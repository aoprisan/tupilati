import { istorie } from "../data/comuna";

export default function History() {
  return (
    <section id="istorie" className="section">
      <div className="container">
        <h2 className="section-title">Istorie</h2>
        <ol className="timeline">
          {istorie.map((ev) => (
            <li key={ev.perioada} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-body">
                <span className="timeline-period">{ev.perioada}</span>
                <p>{ev.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
