import quince from "../assets/15.png";
import chica from "../assets/Chica.png";
import marco from "../assets/Marco8.png"
import mariposa from "../assets/Mariposa.png"

import ReproductorMusic from '../views/ReproductorMusic'


const Portada = () => {
  return (
    <section className="d-flex flex-column align-items-center  portada">
      <aside>
         <ReproductorMusic></ReproductorMusic>
         <aside className="linea">
        <h2 className="enfoque mis">
          {"mis".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
        <img src={quince} alt="" width={300} />
        <h2 className="enfoque años">
          {"años".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
      </aside>

      <h1 className="enfoque">
        {"Melody".split("").map((letra, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {letra}
          </span>
        ))}
      </h1>
      <img src={chica} alt="" width={410} className="chica"/>
      </aside>
     <img src={mariposa} alt="" className="mariposa mariposa-top"/>
      <img src={marco} alt=""  width={400} className="cuadro-fondo"/>
    </section>
  );
};

export default Portada;
