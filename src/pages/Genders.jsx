import React from 'react';
import { useParams } from 'react-router-dom';
import { concerts } from '../mocks/concerts.json';
import Card from '../components/Card';
import Modal from '../components/Modal';

export function Genders() {
    const { gender } = useParams();
    const genderConcerts = concerts.filter(concert => concert.gender === gender);

    return (
        <>
            <h1>Conciertos del género: {gender}</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {genderConcerts.length > 0 ? (
                    genderConcerts.map(concert => (
                        <React.Fragment key={concert.id}>
                            <Card concert={concert} />
                            <Modal concert={concert} />
                        </React.Fragment>
                    ))
                ) : (
                    <p>No hay conciertos disponibles del género {gender}.</p>
                )}
            </div>
        </>
    );
}
