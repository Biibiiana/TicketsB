import { Link } from 'react-router-dom';

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
                    <Link to={getPath(item)}>{item}</Link>
                </li>
            ))}
        </ul>
    );
}
