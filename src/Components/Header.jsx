import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container header-content">
        <h1 className="site-title">
          <Link to="/">SpaceX Portfolio</Link>
        </h1>
        <nav>
          <Link to="/">Accueil</Link>
          {/* Future links such as About or Contact could go here */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
