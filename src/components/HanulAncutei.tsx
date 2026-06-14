import { hanulAncutei, imagini } from "../data/comuna";

export default function HanulAncutei() {
  return (
    <section id="hanul-ancutei" className="section section-feature">
      <div className="container">
        <span className="feature-kicker">Atracția principală</span>
        <h2 className="section-title">{hanulAncutei.titlu}</h2>
        <p className="section-lead">{hanulAncutei.rezumat}</p>

        <figure className="feature-figure">
          <img src={imagini.hanulAncutei} alt="Hanul Ancuței" loading="lazy" />
          <figcaption>Hanul Ancuței, pe vechiul drum al Moldovei (E85).</figcaption>
        </figure>

        <div className="prose">
          {hanulAncutei.detalii.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <blockquote className="quote">
          „La Hanul Ancuței în vremea aceea se adunau drumeții și-și depănau
          poveștile…"
          <cite>— inspirat din opera lui Mihail Sadoveanu, „Hanu-Ancuței" (1928)</cite>
        </blockquote>
      </div>
    </section>
  );
}
