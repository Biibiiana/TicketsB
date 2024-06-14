import React from 'react';
import { concerts } from '../mocks/concerts.json';
import Card from '../components/Card';
import Modal from '../components/Modal';

export function Discover() {
    const getRandomUniqueNumbers = (count, max) => {
        const indices = Array.from({ length: max }, (_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        return indices.slice(0, count);
    };

    const randomNumbers = getRandomUniqueNumbers(12, concerts.length);

    return (
        <>
            <h1>Descubre los próximos conciertos</h1>
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">
                {randomNumbers.map(index => (
                    <React.Fragment key={index}>
                        <Card concert={concerts[index]} />
                        <Modal concert={concerts[index]} />
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}