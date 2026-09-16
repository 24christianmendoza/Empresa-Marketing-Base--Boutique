import "./promociones.css";

export default function Promociones() {
  return (
    <section className="promociones">
      <h2 className="promociones-titulo">Promociones</h2>
      <div className="promociones-cards">
        {/* Card 1 */}
        <div className="promocion-card">
          <div className="promocion-imagen">
            <img src="/images/Baner1.png" alt="Promoción 1" />
          </div>
          <div className="promocion-info">
            <h3>Promo Especial 1</h3>
            <p>Descripción breve de la promoción.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="promocion-card">
          <div className="promocion-imagen">
            <img src="/images/Baner1.png" alt="Promoción 2" />
          </div>
          <div className="promocion-info">
            <h3>Promo Especial 2</h3>
            <p>Descripción breve de la promoción.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
