import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carrusel } from '../components/Carrusel';
import { Discover } from './Discover';

export function Home () {
    return (
        <>
            <Carrusel />
            <Discover />
        </>
    );
}