/**
 * Crea el componente Tablero dividido por 9 secciones

 * @param  {none}

 * @return  {div}

 */

const Tablero = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mx-auto p-10">
      {/* Temporalmente div */}
      {/* Tailwind style: contenido centrado, fuente con estilo semibol color blanco, borde blanco con un groso de 2px, fondo color esmeralda 400, efecto de sombra y opacidad de duración 300 milisegundos*/}
      
      {/* Primera Fila -> Secciones 1, 2, 3 */}
      <div className="flex items-center justify-center font-semibold text-white h-24 w-24 border-white border-2 bg-emerald-400 rounded-xl shadow-xl hover:bg-opacity-25 duration-300">
        1
      </div>
      <div className="flex items-center justify-center font-semibold text-white h-24 w-24 border-white border-2 bg-emerald-400 rounded-xl shadow-xl hover:bg-opacity-25 duration-300">
        2
      </div>
      <div className="flex items-center justify-center font-semibold text-white h-24 w-24 border-white border-2 bg-emerald-400 rounded-xl shadow-xl hover:bg-opacity-25 duration-300">
        3
      </div>

      {/* Segunda Fila -> Secciones 4, 5, 6 */}
      <div className="flex items-center justify-center font-semibold text-white h-24 w-24 border-white border-2 bg-emerald-400 rounded-xl shadow-xl hover:bg-opacity-25 duration-300">
        4
      </div>
      <div className="flex items-center justify-center font-semibold text-white h-24 w-24 border-white border-2 bg-emerald-400 rounded-xl shadow-xl hover:bg-opacity-25 duration-300">
        5
      </div>
      <div className="flex items-center justify-center font-semibold text-white h-24 w-24 border-white border-2 bg-emerald-400 rounded-xl shadow-xl hover:bg-opacity-25 duration-300">
        6
      </div>

      {/* Tercera Fila -> Secciones 7, 8, 9 */}
      <div className="flex items-center justify-center font-semibold text-white h-24 w-24 border-white border-2 bg-emerald-400 rounded-xl shadow-xl hover:bg-opacity-25 duration-300">
        7
      </div>
      <div className="flex items-center justify-center font-semibold text-white h-24 w-24 border-white border-2 bg-emerald-400 rounded-xl shadow-xl hover:bg-opacity-25 duration-300">
        8
      </div>
      <div className="flex items-center justify-center font-semibold text-white h-24 w-24 border-white border-2 bg-emerald-400 rounded-xl shadow-xl hover:bg-opacity-25 duration-300">
        9
      </div>
    </div>
  );
};

export default Tablero; // Exportar por defecto la funcion Tablero
