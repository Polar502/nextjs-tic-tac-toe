// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

// Importame la funcion "Tablero" desde el archivo "tablero" en esta misma carpeta
import Tablero from "./tablero";

const Totito = () => {
  return (
    <div className="flex flex-col bg-sky-600 items-center justify-center h-screen">
      <div className="">
        {/* No necesario (quitar) */}
        <h1 className="h1-text">Your turn Player X || O </h1>
        {/* invocar funcion Tablero */}
        <Tablero />
      </div>
    </div>
  );
};

export default Totito; // Exportar por defecto la funcion Totito
