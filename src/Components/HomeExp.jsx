import {Link} from 'react-router-dom'
import "../css/ExpStarbuck.css";

const HomeExp = () => {
  return (
    <div>
      <div className="title-general">
        <div className="title-exp">
          <h3>Experiencia Starbucks</h3>
        </div>
      </div>
      <div className="description">
        <h2 className="text-center">
          Para cada momento hay una forma de vivir la Experiencia Starbucks como
          vos quieras.
        </h2>
      </div>
      <br />
      <div className="store-content">
        <div className="store-image">
          <div className="store-desc">
            <div className="text-center">
              <h2>In Store</h2>
              <p className="desc">
                En nuestras tiendas te esperan nuestros baristas capacitados
                para ofrecerte una bebida muy especial. El ambiente cálido y los
                detalles de nuestros productos elaborados artesanalmente hacen
                que la experiencia sea única e inigualable.
              </p>
            </div>
          </div>
          <picture>
            <img
              height={350}
              src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67487_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
              alt="InStore"
            />
          </picture>
        </div>
      </div>
      <div className="drive-content">
        <div className="drive-image">
        <picture>
            <img
              height={350}
              src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67488_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
              alt="DriveThru"
            />
          </picture>
          <div className="drive-desc">
            <div className="text-center">
              <h2>Drive Thru</h2>
              <p className="desc">
              Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery-content">
        <div className="delivery-image">
        <picture>
            <img
              height={350}
              src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67485_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
              alt="DeliveryImg"
            />
          </picture>
          <div className="delivery-desc">
            <div className="text-center">
              <h2>Delivery</h2>
              <p className="desc">
              Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya.
              </p>
              <a>
              <Link className="btnDelivery">Pedí Delivery</Link>
            </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HomeExp;
