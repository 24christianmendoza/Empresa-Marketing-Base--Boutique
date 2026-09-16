import { useState } from "react";
import "./menuProductos.css";

export default function MenuProductos() {
    const [search, setSearch] = useState("");
    const [categoria, setCategoria] = useState("todos");
    const [imagenGrande, setImagenGrande] = useState<string | null>(null);

    const productos = [
        { id: 1, nombre: "Vestido", precio: "", img: "/images/muestra5.png", categoria: "vestidos" },
        { id: 2, nombre: "Camisa", precio: "$4,500", img: "/images/muestra5.png", categoria: "camisas" },
        { id: 3, nombre: "Pantalón", precio: "$1,200", img: "/images/muestra5.png", categoria: "pantalones" },
        { id: 4, nombre: "Bolsa", precio: "$800", img: "/images/muestra5.png", categoria: "bolsas" },
        { id: 5, nombre: "Bolsa", precio: "$3,200", img: "/images/muestra5.png", categoria: "bolsas" },
        { id: 6, nombre: "Vestido", precio: "$2,500", img: "/images/muestra5.png", categoria: "vestidos" },
        { id: 7, nombre: "Para hombres", precio: "$12,000", img: "/images/muestra5.png", categoria: "para hombres" },
        { id: 8, nombre: "Vestido", precio: "$7,000", img: "/images/muestra5.png", categoria: "vestidos" },
        { id: 9, nombre: "Camisa", precio: "$9,500", img: "/images/muestra5.png", categoria: "camisas" },
        { id: 10, nombre: "Camisa", precio: "$1,800", img: "/images/muestra5.png", categoria: "camisas" },
    ];

    // Filtrado por búsqueda y categoría
    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(search.toLowerCase()) &&
        (categoria === "todos" || p.categoria === categoria)
    );

    return (
        <section className="menu-productos">
            <h2 className="menu-productos-titulo">Productos</h2>

            {/* Contenedor de filtros y búsqueda */}
            <div className="menu-productos-controles">
                <div className="menu-productos-filtros">
                    <button onClick={() => setCategoria("todos")}>Todos</button>
                    <button onClick={() => setCategoria("vestidos")}>Vestidos</button>
                    <button onClick={() => setCategoria("camisas")}>Camisas</button>
                    <button onClick={() => setCategoria("pantalones")}>Pantalones</button>
                    <button onClick={() => setCategoria("para hombres")}>Para hombres</button>
                    <button onClick={() => setCategoria("bolsas")}>Bolsas</button>
                </div>

                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="menu-productos-busqueda"
                />
            </div>

            {/* Cards */}
            <div className="menu-productos-cards">
                {filtrados.map((p) => (
                    <div key={p.id} className="menu-productos-card" onClick={() => setImagenGrande(p.img)}>
                        <div className="menu-productos-imagen">
                            <img src={p.img} alt={p.nombre} />
                        </div>
                        <div className="menu-productos-descripcion">{p.nombre}</div>
                        <div className="menu-productos-precio">{p.precio}</div>
                    </div>
                ))}
            </div>

            {/* Modal responsivo */}
            {imagenGrande && (
                <div className="modal" onClick={() => setImagenGrande(null)}>
                    <img src={imagenGrande} alt="Vista grande" />
                </div>
            )}
        </section>
    );
}
