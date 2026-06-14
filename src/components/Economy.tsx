import { economie } from "../data/comuna";

export default function Economy() {
  return (
    <section id="economie" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Economie</h2>
        <p className="section-lead">{economie.rezumat}</p>
        <ul className="bullet-list">
          {economie.detalii.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
