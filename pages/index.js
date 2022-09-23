// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

// Importame la funcion "Tablero" desde el archivo "tablero" en esta misma carpeta
import Tablero from "./tablero";

const Totito = () => {
  return (
    <div className="flex flex-col bg-neutral-900 items-center justify-center h-screen">
      <div className="grow-1">
        <div className="div-score">
          <div className="div-player">
            <div className="">Player X</div>
            <div className="">-</div>
          </div>
          <div className="div-player">
            <div className="">Player O</div>
            <div className="">-</div>
          </div>
        </div>
        {/* Turn label */}
        <h1 className="h1-text">Your turn X || O </h1>
        {/* invocar funcion Tablero */}
        <Tablero />
        <div className="restart">Restart game</div>
      </div>
    </div>
  );
};

export default Totito; // Exportar por defecto la funcion Totito
