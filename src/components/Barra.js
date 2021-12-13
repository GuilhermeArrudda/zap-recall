
import { useState } from "react";
import CarregaPagina from "./CarregaPagina";
import MiniLogo from "../assets/logo-mini.png";

export default function Barra() {
  const [voltar, setVoltar] = useState(false);

  function Voltar() {
    setVoltar(true);
    window.location.reload();
  }

  return (
    <>
      {voltar ? (
        <CarregaPagina />
      ) : (
        <div className="mini-logo" onClick={Voltar}>
          <img src={MiniLogo} alt="mini-logo" />
        </div>
      )}
    </>
  );
}