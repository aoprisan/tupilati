import { recensaminte, demografie } from "../data/comuna";

function BarChart() {
  const max = Math.max(...recensaminte.map((r) => r.populatie));
  return (
    <div className="barchart" role="img" aria-label="Evoluția populației la recensăminte">
      {recensaminte.map((r) => {
        const heightPct = Math.round((r.populatie / max) * 100);
        return (
          <div key={r.an} className="bar-col">
            <span className="bar-value">{r.populatie.toLocaleString("ro-RO")}</span>
            <div className="bar" style={{ height: `${heightPct}%` }} />
            <span className="bar-label">{r.an}</span>
          </div>
        );
      })}
    </div>
  );
}

function ProcentList({
  titlu,
  date,
}: {
  titlu: string;
  date: { eticheta: string; procent: number }[];
}) {
  return (
    <div className="proc-block">
      <h3>{titlu}</h3>
      <ul className="proc-list">
        {date.map((d) => (
          <li key={d.eticheta}>
            <div className="proc-head">
              <span>{d.eticheta}</span>
              <span className="proc-val">{d.procent}%</span>
            </div>
            <div className="proc-track">
              <div className="proc-fill" style={{ width: `${d.procent}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Demographics() {
  return (
    <section id="demografie" className="section">
      <div className="container">
        <h2 className="section-title">Demografie</h2>
        <p className="section-lead">
          La recensământul din 2021, comuna avea{" "}
          {demografie.populatieActuala.toLocaleString("ro-RO")} de locuitori, cu o
          densitate de aproximativ {demografie.densitateLocKm2} loc./km². Populația
          este în scădere în ultimele decenii.
        </p>

        <div className="chart-card">
          <h3>Evoluția populației (recensăminte)</h3>
          <BarChart />
        </div>

        <div className="proc-grid">
          <ProcentList titlu="Etnii (2021)" date={demografie.etnii} />
          <ProcentList titlu="Religie (2021)" date={demografie.religie} />
        </div>
      </div>
    </section>
  );
}
