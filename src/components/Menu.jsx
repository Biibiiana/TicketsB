import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { MenuItem } from "./MenuItems";
import {
  ListOfCities,
  ListOfArtists,
  ListOfGenders,
} from "./../context/listsOf";

export function Menu() {
  const navigate = useNavigate();

  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  // const [showTransition, setShowTransition] = useState(false);
  const uniqueCities = ListOfCities();
  const uniqueArtists = ListOfArtists();
  const uniqueGenders = ListOfGenders();

  const handleLogOut = () => {
    window.alert("You are logged out");
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/login");
  };

  if (isLoggedIn) {
    return (
      <nav id="Nav" className={"menu"}>
        <div className="navbar2">
          <ul className="menu-horizontal">
            <li>
              Ciudades
              <MenuItem list={uniqueCities} tipo="ciudades" />
            </li>
            <li>
              Artistas
              <MenuItem list={uniqueArtists} tipo="artistas" />
            </li>
            <li>
              Géneros
              <MenuItem list={uniqueGenders} tipo="generos" />
            </li>
            <li>
              <NavLink to="/new-event">Nuevo evento</NavLink>
            </li>
            <li>
              <button className="logOut" onClick={handleLogOut}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav id="Nav" className={"menu"}>
        <div className="navbar2">
          <span className="navspan">
            <NavLink to="/signup"> Sign up </NavLink>
          </span>

          <span className="navspan">
            <NavLink to="/login"> Log in </NavLink>
          </span>
        </div>
      </nav>
    );
  }
}