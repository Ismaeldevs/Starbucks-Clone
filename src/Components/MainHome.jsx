import bannerA from "../assets/bannerBatidos.png";
import imgPostulantes from "../assets/imgPostulantes.png";
import {Link} from 'react-router-dom'
import "../css/Home.css";

const MainHome = () => {
  return (
    <div className="home">
      <div className="block-content">
        <div className="block-image">
          <picture>
            <img src={bannerA} alt="nuevoProducto" />
          </picture>
          <div className="block-info">
            <div className="text-center info-product">
              <h3>¡UN MOMENTO PARA BRILLAR!</h3>
              <p>
                Key Lime Pie & Cookies and Cream llegan para que disfrutes al
                máximo tu verano
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block-content2">
        <div className="block-image2">
          <div className="block-info2">
            <h3 className="text-center">Unite a algo más grande</h3>
            <p>Revisa las oportunidades que tenemos para vos</p>
            <a>
              <Link className="button">Postular acá</Link>
            </a>
          </div>
          <picture className="d-flex justify-content-end">
            <img src={imgPostulantes} alt="postulantes" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
