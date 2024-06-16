import PropTypes from 'prop-types';

export default function Card({ concert }) {
    return (
        <div className="col-md-3 m-1 align-center" id="card">
            <div className="card align-Elements-center border bg-medium-ligth-blue custom-card">
                <div className='card-header'>
                    <img src={concert.poster} className="card-img-top h-imagenes" alt="" id="img-card" />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{concert.tourName}</h5>
                    <h6 className="card-title">{concert.artist}</h6>
                    <p className="card-text">{concert.description}</p>
                    <p className="card-text"><small className="text-muted">{concert.date}</small></p>
                    <button type="button" className="btn botton-card bg-ligth-blue text-dark" data-bs-toggle="modal" data-bs-target="#comprarEntradasModal">
                        Comprar entradas
                    </button>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    concert: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster: PropTypes.string.isRequired,
        tourName: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        description: PropTypes.string,
        date: PropTypes.string.isRequired,
    }).isRequired,
};
