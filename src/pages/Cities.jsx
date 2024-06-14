import React from 'react';
import { useParams } from 'react-router-dom';
import { concerts } from '../mocks/concerts.json';
import Card from '../components/Card';
import Modal from '../components/Modal';

export function Cities() {
    const { city } = useParams();
    const cityConcerts = concerts.filter(concert => concert.city === city);

    return (
        <>
            <h1>Conciertos en {city}</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {cityConcerts.length > 0 ? (
                    cityConcerts.map(concert => (
                        <React.Fragment key={concert.id}>
                            <Card concert={concert} />
                            <Modal concert={concert} />
                        </React.Fragment>
                    ))
                ) : (
                    <p>No hay conciertos disponibles en esta ciudad.</p>
                )}
            </div>
        </>
    );
}