import {Link} from 'react-router-dom'
import "../css/Cafe.css";

const HomeCafe = () => {
  return (
    <div>
      <div className="title-content">
        <h4 className="text-center">Nuestro café</h4>
      </div>
      <div className="about-cafe">
        <div className="paragraph-main-cafe">
          <p>
            El olor al café, a unos granos recién tostados, es la mejor
            bienvenida que cada día planificamos para brindarles cuando abrimos
            las puertas de nuestras tiendas. Pero eso es sólo el comienzo.
          </p>
        </div>
      </div>
      <div className="image-content">
        <img
          loading='lazy'
          src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FNuestro%20Caf%C3%A9.png?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max"
          alt=""
        />
      </div>
      <div className="paragraph-extra-cafe">
        <p>
          De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte
          presencia de chocolate…el desafío que tenemos constantemente es que
          cada uno de nuestros clientes encuentre su mezcla favorita y a la vez,
          que explore nuestras amplias selecciones más singulares.
        </p>
      </div>
      <div className="paragraph-end-cafe">
        <p>
          Para alcanzarlo nos abastecemos de los mejores granos de café arábicos
          siguiendo siempre estrictos principios éticos.
        </p>
      </div>
      <br />
      <div className="about-tostado">
        <div className="title">
          <h3>Nuestro tostado Starbucks</h3>
        </div>
        <br />
        <br />
        <div className="paragraph-tostado">
          <p>
            Cada café que ofrecemos exige un perfil de tostado único para crear
            una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en
            un delicado balance en calor, tiempo y arte, nuestros maestros en el
            tostado hacen resaltar estas únicas características de cada grano de
            café.
          </p>
        </div>
      </div>
      <div className="image-content">
        <img
          loading='lazy'
          src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2Fcurva.jpg?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max"
          alt=""
        />
      </div>
      <div className="about-rubio">
        <div className="title-rubio">
          <h3>Rubio</h3>
        </div>
      </div>
      <div className="paragraph-rubio">
        <p className="mt-4">
          El café Starbucks tostado rubio es tostado en menos tiempo, tiene un
          cuerpo ligero y sabores suaves.
        </p>
      </div>
      <div className="about-medio">
        <div className="title-medio">
          <h3 className="mt-5">Medio</h3>
        </div>
      </div>
      <div className="paragraph-medio">
        <p className="mt-4">
          El café con tostado medio es balanceado con sabores agradables y
          enriquecidos.
        </p>
      </div>
      <div className="about-oscuro">
        <div className="title-oscuro">
          <h3 className="mt-5">Oscuro</h3>
        </div>
      </div>
      <div className="paragraph-oscuro">
        <p className="mt-4">
          Los cafés con tostado oscuro presentan un cuerpo completo y sabores
          fuertes y robustos.
        </p>
      </div>
      <div className="mt-3 about-metodos">
        <div className="title-metodos">
          <h3>
            Descubre los métodos de preparación en Starbucks, ¿Cuál es el
            correcto para vos?
          </h3>
        </div>
        <br />
        <br />
        <div className="paragraph-metodos">
          <p>
            Desde el cultivo responsable hasta el tostado, cada detalle en la
            elaboración de manera artesanal es fundamental para poder disfrutar
            de una taza de café Starbucks. Y además de la esencia de los granos,
            sabemos que la forma en la que se prepara el café tiene un efecto
            sorprendente en el sabor de cada taza y define su cuerpo.
          </p>
        </div>
      </div>
      <div className="image-content">
        <img
          loading='lazy'
          src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMetodos.png?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max"
          alt=""
        />
      </div>
      <div className="paragraph-end">
        <p>
          Es por eso que nuestros magníficos baristas se enfocan en crear
          diariamente rituales escogiendo diferentes métodos de preparación para
          que sean nuestros clientes quienes se sorprenden. Así, de la mano de
          las explicaciones de nuestros expertos, no sólo cultivarán la
          curiosidad sino que podrán seleccionar el mejor método para su
          experiencia Starbucks.
        </p>
      </div>
      <a className='btn'>
        <Link className='button-metodos'>Conocé nuestros métodos</Link>
      </a>
      <br />
      <br />
    </div>
  );
};

export default HomeCafe;
