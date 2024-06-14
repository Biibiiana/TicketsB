import { useState } from 'react';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';

export default function Modal({ concert }) {
    const [pistaCount, setPistaCount] = useState(0);
    const [asientoCount, setAsientoCount] = useState(0);

    const totalPistaPrice = pistaCount * concert.p_pista;
    const totalAsientoPrice = asientoCount * concert.p_asiento;
    const totalPrice = totalPistaPrice + totalAsientoPrice;

    const handlePistaChange = (event) => {
        const value = Math.min(event.target.value, concert.disp_pista);
        setPistaCount(value);
    };

    const handleAsientoChange = (event) => {
        const value = Math.min(event.target.value, concert.disp_asientos);
        setAsientoCount(value);
    };

    const handleCompra = () => {
        // Restar del total disponible las entradas seleccionadas
        concert.disp_pista -= pistaCount;
        concert.disp_asientos -= asientoCount;

        // Generar PDF con datos de la compra
        const doc = new jsPDF();
        doc.text(`Compra de entradas - ${concert.tourName}`, 10, 10);
        doc.text(`Artista: ${concert.artist}`, 10, 20);
        doc.text(`Fecha: ${concert.date}`, 10, 30);
        doc.text(`Ciudad: ${concert.city}`, 10, 40);
        doc.text(`Lugar: ${concert.Lugar}`, 10, 50);
        doc.text(`Entradas de pista: ${pistaCount} x $${concert.p_pista} = $${totalPistaPrice}`, 10, 60);
        doc.text(`Entradas de asiento: ${asientoCount} x $${concert.p_asiento} = $${totalAsientoPrice}`, 10, 70);
        doc.text(`Total: $${totalPrice}`, 10, 80);
        doc.save('CompraEntradas.pdf');

        // Resetear los campos de entrada
        setPistaCount(0);
        setAsientoCount(0);

        // Cerrar el modal
        onClose();
    };
    
    return (
        <div className="modal fade" id="comprarEntradasModal" tabIndex="-1" aria-labelledby="comprarEntradasModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel title-card"></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body info-concert align-Elements-center">
                        <div className="n-left">
                            <img src="" alt="" id="img-card" />
                            <img src={concert.poster} alt="" className="modal-poster" />
                        </div>
                        <div className="n-right">
                            <h5 className="modal-title">{concert.tourName}</h5>
                            <h6 className="modal-artist">{concert.artist}</h6>
                            <p className="modal-description">{concert.description}</p>
                            <p className="modal-date">Fecha: {concert.date}</p>
                            <p className="modal-city">Ciudad: {concert.city}</p>
                            <p className="modal-gender">Género: {concert.gender}</p>
                            <p className="modal-lugar">Lugar: {concert.Lugar}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Entradas de pista (${concert.p_pista}): </label>
                            <input type="number" value={pistaCount} onChange={handlePistaChange} min="0" max={concert.disp_pista} />
                        </div>
                        <div>
                            <label>Entradas de asiento (${concert.p_asiento}): </label>
                            <input type="number" value={asientoCount} onChange={handleAsientoChange} min="0" max={concert.disp_asientos} />
                        </div>
                        <p>Total: ${totalPrice}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn bg-ligth-blue text-dark" onClick={handleCompra} data-bs-dismiss="modal">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
  concert: PropTypes.object.isRequired
}
