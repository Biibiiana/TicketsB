import React from 'react';
import { useParams } from 'react-router-dom';
// import { concerts } from '../mocks/concerts.json';
import Card from '../components/Card';
import Modal from '../components/Modal';
import service from '../services/config';

export function Cities() {
    const { city } = useParams();
    const cityConcerts = async () => {
        const response = await service.get(`/events/${city}`)
        console.log(response.data);
        return response.data;
    };
    // const cityConcerts = concerts.filter(concert => concert.city === city);

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