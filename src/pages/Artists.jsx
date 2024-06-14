import React from 'react';
import { useParams } from 'react-router-dom';
import { concerts } from '../mocks/concerts.json';
import Card from '../components/Card';
import Modal from '../components/Modal';

export function Artists() {
    const { artist } = useParams();
    const artistConcerts = concerts.filter(concert => concert.artist === artist);

    return (
        <>
            <h1>Conciertos de {artist}</h1>
            <div className="row justify-content-evenly">
                {artistConcerts.length > 0 ? (
                    artistConcerts.map(concert => (
                        <React.Fragment key={concert.id}>
                            <Card concert={concert} />
                            <Modal concert={concert} />
                        </React.Fragment>
                    ))
                ) : (
                    <p>No hay conciertos disponibles de {artist}.</p>
                )}
            </div>
        </>
    );
}