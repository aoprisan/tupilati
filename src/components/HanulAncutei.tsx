import { hanulAncutei, imagini } from "../data/comuna";

export default function HanulAncutei() {
  return (
    <section id="hanul-ancutei" className="section plate-section">
      <div className="container">
        <header className="chapter han-head" data-reveal>
          <span className="chapter-index" aria-hidden="true" />
          <h2 className="section-title">{hanulAncutei.titlu}</h2>
          <p className="section-lead">{hanulAncutei.rezumat}</p>
        </header>

        <div className="han-body">
          <figure className="plate tall" data-reveal>
            <img src={imagini.hanulAncutei} alt="Hanul Ancuței" loading="lazy" />
            <figcaption className="plate-caption">
              Hanul Ancuței, pe vechiul drum al Moldovei (E85).
            </figcaption>
          </figure>

          <div className="han-prose prose" data-reveal>
            {hanulAncutei.detalii.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <blockquote className="epigraph" data-reveal>
          <q>
            La Hanul Ancuței în vremea aceea se adunau drumeții și-și depănau
            poveștile…
          </q>
          <cite>Mihail Sadoveanu · „Hanu-Ancuței”, 1928</cite>
        </blockquote>
      </div>
    </section>
  );
}
