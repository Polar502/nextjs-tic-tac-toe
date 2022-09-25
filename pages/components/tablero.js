import { useState } from "react";
import Cuadro from "./cuadro";

const Tablero = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(""));
  const [turno, setTurno] = useState("X");
  const [sacudir, setSacudir] = useState(false);

  const pintaFigura = (indexItem) => {
    const misCuadritos = cuadros.slice();
    misCuadritos.splice(indexItem, 1, turno);

    //Si el cuadro esta vacio permitir llenar
    if (cuadros[indexItem] === "") {
      setCuadros(misCuadritos);
      if (turno === "X") {
        setTurno("O");
      } else {
        setTurno("X");
      }
      setSacudir(false);
    } //De lo contario sacudir 
    else {
      setSacudir(true);
    }
  };

  return (
    <div className="board">
      {/* Llenado del tablero */}
      {cuadros.map((item, indexItem) => {
        return (
          <Cuadro
            // Llave identificador del cuadro
            key={indexItem}
            // valor del item del cuadro
            valor={item}
            //Animacion sacudir si esta lleno
            animacion={sacudir}
            //accion al hacer click en el cuadro
            alHacerClick={() => pintaFigura(indexItem)}
          />
        );
      })}
    </div>
  );
};

export default Tablero;
