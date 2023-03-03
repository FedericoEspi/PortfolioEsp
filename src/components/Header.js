import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="divHead">
      <h1>
        Bienvenido a mi Portfolio, mi nombre es
          <Link to="/Federico" className="linkFederico">
          <span className="federico">Federico</span>
          </Link>
        y en este espacio voy a contarte sobre mí y porque deberíamos trabajar
        juntos ¡Adelante!
      </h1>
    </div>
  );
};

export default Header;
