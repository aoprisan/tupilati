import { sources, identitate, crediteImagini } from "../data/comuna";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="colophon">
      <div className="container">
        <div className="colophon-top">
          <div className="colophon-brand">
            <p className="colophon-name">
              Comuna <em>{identitate.nume.replace("Comuna ", "")}</em>
            </p>
            <p className="colophon-note">
              Cronică ilustrată neoficială a comunei Tupilați, județul Neamț —
              alcătuită din surse publice.
            </p>
          </div>

          <div className="colophon-sources">
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

          <div>
            <h4>Credite foto · Wikimedia Commons</h4>
            <ul className="colophon-credits">
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

        <div className="colophon-bottom">
          <span>© {year} · Comuna Tupilați</span>
          <span>Date din surse publice · Conținut în limba română</span>
        </div>
      </div>
    </footer>
  );
}
