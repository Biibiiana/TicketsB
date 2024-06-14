/* eslint-disable react/prop-types */
export default function Modal({ concert, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={concert.poster} className="modal-poster" alt='póster del tour' />
                <div className="modal-body">
                    <h5 className="modal-title">{concert.tourName}</h5>
                    <h6 className="modal-artist">{concert.artist}</h6>
                    <p className="modal-description">{concert.description}</p>
                    <p className="modal-date">Fecha: {concert.date}</p>
                    <p className="modal-city">Ciudad: {concert.city}</p>
                    <p className="modal-gender">Género: {concert.gender}</p>
                    <p className="modal-lugar">Lugar: {concert.Lugar}</p>
                    <div className="modal-buttons">
                        <button className="btn btn-primary">Comprar en pista - ${concert.p_pista}</button>
                        <button className="btn btn-secondary">Comprar un asiento - ${concert.p_asiento}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
