import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carrusel } from '../components/Carrusel';
import { Discover } from './Discover';
import { Prueba } from './../components/Prueba';

export function Home () {
    return (
        <>
            <Carrusel />
            <Discover />
            <Prueba />
        </>
    );
}