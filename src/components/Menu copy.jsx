import { MenuItem } from './MenuItems';
import { ListOfCities, ListOfArtists, ListOfGenders } from './../context/listsOf'; 
import { Link } from 'react-router-dom';

export function Menu() {
    const uniqueCities = ListOfCities(); 
    const uniqueArtists = ListOfArtists(); 
    const uniqueGenders = ListOfGenders(); 

    function logIn(event) {
        event.preventDefault();
        // lógica para iniciar sesión
    }

    function newUser(event) {
        event.preventDefault();
        // lógica para registrar un nuevo usuario
    }

    return (
        <nav>
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
                    <Link to="/new-event">Nuevo evento</Link>
                </li>
            </ul>
            <div className="gap-3 justify-content-center">
                <div>
                    <button type="button" className="btn bg-white btn-lg" data-bs-toggle="modal" data-bs-target="#loginModal">
                        Iniciar sesión
                    </button>
                </div>
                <div>
                    <button type="button" className="btn btn-lg text-white" data-bs-toggle="modal" data-bs-target="#signUpModal">
                        Registrarse
                    </button>
                </div>
            </div>

            {/* Modal para iniciar sesión */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h2 className="modal-title text-white text-center fs-2" id="loginModalLabel">Iniciar sesión</h2>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="logIn">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" placeholder="name@example.com" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña</label>
                                    <input type="password" name="selectorPassw" className="form-control" placeholder="Inserte su contraseña." required/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary bg-light text-dark" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-primary bg-light text-dark" onClick={logIn}>Iniciar sesión</button>
                                    <button type="button" className="btn btn-secondary bg-light text-dark" data-bs-toggle="modal" data-bs-target="#signUpModal" data-bs-dismiss="modal">Registrarme</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para registrarse */}
            <div className="modal fade" id="signUpModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h2 className="modal-title text-white text-center fs-1" id="signUpModalLabel">Registrarse</h2>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="psw" name="selectorPassw" placeholder="Inserte su contraseña." required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Repite la contraseña</label>
                                    <input type="password" className="form-control" id="psw_repeat" name="selectorPassw" placeholder="Inserte su contraseña." required/>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />
                                    <label className="form-check-label">
                                        Estoy de acuerdo con los términos y condiciones.
                                    </label>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary bg-light text-dark" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-primary bg-light text-dark" onClick={newUser}>Registrarme</button>
                                    <button type="button" className="btn btn-secondary bg-light text-dark" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-dismiss="modal">Ya estoy registrado</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
