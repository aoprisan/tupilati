import { useState } from "react";

const navItems = [
  { href: "#despre", label: "Despre" },
  { href: "#sate", label: "Sate" },
  { href: "#istorie", label: "Istorie" },
  { href: "#hanul-ancutei", label: "Hanul Ancuței" },
  { href: "#monumente", label: "Monumente" },
  { href: "#demografie", label: "Demografie" },
  { href: "#harta", label: "Hartă" },
  { href: "#administratie", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="masthead">
      <div className="container masthead-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-name">
            <em>Tupilați</em>
          </span>
          <span className="brand-sub">Județul Neamț · Moldova</span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Comută meniul"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
