import { useState } from 'react';
import Modal from './Modal';

export default function Card({ concert }) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="col">
                <div className="card mb-3 custom-card">
                    <img src={concert.poster} className="card-img-top custom-img" alt='póster del tour' />
                    <div className="card-body">
                        <h5 className="card-title">{concert.tourName}</h5>
                        <h6 className="card-title">{concert.artist}</h6>
                        <p className="card-text">{concert.description}</p>
                        <p className="card-text"><small className="text-muted">{concert.date}</small></p>
                        <button className="btn btn-primary" onClick={handleClick}>Ver concierto</button>
                    </div>
                </div>
            </div>

            {showModal && (
                <Modal concert={concert} onClose={handleClose} />
            )}
        </>
    );
}
