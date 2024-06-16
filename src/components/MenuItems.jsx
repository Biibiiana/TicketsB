import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export function MenuItem({ list, tipo }) {
    const getPath = (item) => {
        switch (tipo) {
            case 'ciudades':
                return `/cities/${item}`;
            case 'artistas':
                return `/artists/${item}`;
            case 'generos':
                return `/genders/${item}`;
            default:
                return '#';
        }
    };

    return (
        <ul id={tipo} className="menu-vertical">
            {list.map(item => (
                <li key={item}>
                    <NavLink to={getPath(item)}>{item}</NavLink>
                </li>
            ))}
        </ul>
    );
}

MenuItem.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    tipo: PropTypes.oneOf(['ciudades', 'artistas', 'generos']).isRequired
};