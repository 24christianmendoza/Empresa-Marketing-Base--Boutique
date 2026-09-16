import { useState } from "react";
import "./masVendido.css";

export default function MasVendido() {
  const [imagenGrande, setImagenGrande] = useState<string | null>(null);

  const productos = [
    { id: 1, img: "/images/muestra1.png", alt: "Platillo 1" },
    { id: 2, img: "/images/muestra2.png", alt: "Platillo 2" },
    { id: 3, img: "/images/muestra3.png", alt: "Platillo 3" },
    { id: 4, img: "/images/muestra4.png", alt: "Platillo 4" },
  ];

  return (
    <section className="mas-vendido">
      <h2 className="titulo">Lo más nuevo</h2>
      <div className="cards">
        {productos.map((p) => (
          <div
            key={p.id}
            className="card"
            onClick={() => setImagenGrande(p.img)}
          >
            <div className="imagen">
              <img src={p.img} alt={p.alt} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal responsivo solo con imagen */}
      {imagenGrande && (
        <div className="modal" onClick={() => setImagenGrande(null)}>
          <div className="modal-contenido">
            <img src={imagenGrande} alt="Vista grande" />
          </div>
        </div>
      )}
    </section>
  );
}
