import { Link } from "@remix-run/react";

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu">
        <li className="menu">
          <Link to="/gisp">GISP</Link>
        </li>
        <li className="menu">
          <Link to="/customer">KUNDER</Link>
        </li>
        <li className="menu">
          <Link to="/contract">AVTAL</Link>
        </li>
        <li className="menu">
          <Link to="/export">EXPORT</Link>
        </li>
      </ul>
      <br />
      <br />
    </nav>
  );
}
