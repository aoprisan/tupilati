import {
  administratie,
  consiliuLocal,
  personalitati,
  contact,
} from "../data/comuna";

export default function Administration() {
  return (
    <section id="administratie" className="section section-alt">
      <div className="container">
        <header className="chapter" data-reveal>
          <span className="chapter-index" aria-hidden="true" />
          <h2 className="section-title">Administrație &amp; contact</h2>
        </header>

        <div className="admin-grid">
          <div data-reveal>
            <h3 className="panel-title">Conducerea primăriei</h3>
            <ul className="record-list">
              {administratie.map((p) => (
                <li key={p.rol}>
                  <span className="role">{p.rol}</span>
                  <span className="value">
                    {p.nume}
                    {p.detaliu && <small>{p.detaliu}</small>}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="panel-title admin-subhead">Consiliul Local (2024)</h3>
            <ul className="record-list">
              {consiliuLocal.map((g) => (
                <li key={g.partid}>
                  <span className="role">{g.partid}</span>
                  <span className="value">
                    {g.mandate} {g.mandate === 1 ? "mandat" : "mandate"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <h3 className="panel-title">{contact.institutie}</h3>
            <p className="contact-line">{contact.judet}</p>
            <p className="contact-link">
              <a
                href={contact.siteOficial}
                target="_blank"
                rel="noopener noreferrer"
              >
                primaria-tupilati.ro →
              </a>
            </p>

            <h3 className="panel-title admin-subhead">Personalități</h3>
            <ul className="record-list">
              {personalitati.map((p) => (
                <li key={p.nume}>
                  <span className="role">{p.rol}</span>
                  <span className="value">{p.nume}</span>
                </li>
              ))}
            </ul>
            {personalitati.map((p) =>
              p.detaliu ? (
                <p key={p.nume} className="person-note">
                  {p.detaliu}
                </p>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
