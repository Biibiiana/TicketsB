import 'bootstrap/dist/css/bootstrap.min.css';

export function Carrusel() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://okdiario.com/img/2017/09/07/foto-principal.png" className="d-block w-100" alt="carousel1" />
                </div>
                <div className="carousel-item">
                    <img src="http://gritaradio.com/wp-content/uploads/2020/03/METALLICA-ORGULLO-PASI%C3%93N-Y-GLORIA.jpg" className="d-block w-100" alt="carousel2" />
                </div>
                <div className="carousel-item">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.fc9wTMt3yAlMzWOQFbbIQAHaEK&pid=Api&P=0&h=180" className="d-block w-100" alt="carousel3" />
                </div>
            </div>
        </div>
    );
}
