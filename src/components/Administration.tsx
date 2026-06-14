import { administratie, contact } from "../data/comuna";

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
                  <span className="name">{p.nume}</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
