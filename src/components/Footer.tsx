import { sources, identitate } from "../data/comuna";

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
