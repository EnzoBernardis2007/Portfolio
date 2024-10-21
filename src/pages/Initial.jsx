import style from "./Initial.module.css";
import { SiCsharp } from "react-icons/si";

import { About } from "../components/About";

export function Initial() {
  const openPdf = () => {
    window.open(`${process.env.PUBLIC_URL}resume.pdf`, '_blank');
  };

  return (
    <div className={style.grid}>
      <header>
        <div className={style.iconContainer}>
          <SiCsharp className={style.icon} />
        </div>

        <nav className={style.buttonContainer}>
          <button className={style.button}>1. Sobre</button>
          <button className={style.button}>Contato</button>
          <button 
            className={style.buttonResume}
            onClick={openPdf}
          >Currículo</button>
        </nav>
      </header>

      <About className={style.about} />
    </div>
  );
}
