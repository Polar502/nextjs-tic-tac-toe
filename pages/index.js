// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";


// Importame la funcion "Tablero" desde el archivo "tablero" en esta misma carpeta
import Tablero from "./tablero";

const Totito = () => {
  return (
    <div className="flex items-center bg-emerald-500 min-h-screen">
      {/* invocar funcion Tablero */}
      <Tablero className="max-w-4xl" />
    </div>
  );
};

export default Totito; // Exportar por defecto la funcion Totito
