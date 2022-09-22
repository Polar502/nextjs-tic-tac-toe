/**
 * Crea el componente Tablero dividido por 9 secciones

 * @param  {none}

 * @return  {div}

 */

const Tablero = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-8 bg-sky-700">
      {/* Tailwind style: contenido centrado, fuente con estilo semibol color blanco, borde blanco con un groso de 2px, fondo color esmeralda 400, efecto de sombra y opacidad de duración 300 milisegundos*/}

      {/* Primera Fila -> Secciones 1, 2, 3 */}
      <div className="div-totito">1</div>
      <div className="div-totito">2</div>
      <div className="div-totito">3</div>

      {/* Segunda Fila -> Secciones 4, 5, 6 */}
      <div className="div-totito">4</div>
      <div className="div-totito">5</div>
      <div className="div-totito">6</div>

      {/* Tercera Fila -> Secciones 7, 8, 9 */}
      <div className="div-totito">7</div>
      <div className="div-totito">8</div>
      <div className="div-totito">9</div>
    </div>
  );
};

export default Tablero; // Exportar por defecto la funcion Tablero
