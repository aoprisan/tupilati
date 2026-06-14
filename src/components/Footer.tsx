import { sources, identitate, crediteImagini } from "../data/comuna";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">{identitate.nume}</p>
          <p className="footer-note">
            Pagină informativă neoficială despre comuna Tupilați, județul Neamț.
          </p>
        </div>

        <div className="footer-sources">
          <h4>Surse</h4>
          <ul>
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.titlu}
                </a>
              </li>
            ))}
          </ul>

          <h4 className="credits-head">Credite foto (Wikimedia Commons)</h4>
          <ul className="footer-credits">
            {crediteImagini.map((c) => (
              <li key={c.url}>
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.subiect}
                </a>{" "}
                — {c.autor}, {c.licenta}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} · Date din surse publice. Conținut în limba română.
        </div>
      </div>
    </footer>
  );
}
