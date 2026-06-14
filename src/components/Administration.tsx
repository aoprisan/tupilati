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
        <h2 className="section-title">Administrație &amp; contact</h2>

        <div className="admin-grid">
          <div className="admin-people">
            <h3>Conducerea primăriei</h3>
            <ul className="people-list">
              {administratie.map((p) => (
                <li key={p.rol}>
                  <span className="role">{p.rol}</span>
                  <span className="name">
                    {p.nume}
                    {p.detaliu && <small className="name-detail">{p.detaliu}</small>}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="admin-subhead">Consiliul Local (2024)</h3>
            <ul className="council-list">
              {consiliuLocal.map((g) => (
                <li key={g.partid}>
                  <span className="role">{g.partid}</span>
                  <span className="name">
                    {g.mandate} {g.mandate === 1 ? "mandat" : "mandate"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="admin-contact">
            <h3>{contact.institutie}</h3>
            <p>{contact.judet}</p>
            <p>
              <a href={contact.siteOficial} target="_blank" rel="noopener noreferrer">
                Site oficial: primaria-tupilati.ro →
              </a>
            </p>

            <h3 className="admin-subhead">Personalități</h3>
            <ul className="people-list">
              {personalitati.map((p) => (
                <li key={p.nume}>
                  <span className="name">
                    {p.nume}
                    <small className="name-detail">{p.rol}</small>
                  </span>
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
