import { useState, useEffect, useRef  } from "react";
import style from "./Initial.module.css";
import { SiCsharp } from "react-icons/si";
import { FaCloudRain } from "react-icons/fa6";
import { Rainify } from "rainify";

import { First } from "../components/First";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export function Initial() {
  const [isRaining, setIsRaining] = useState(false);
  const rainSoundRef = useRef(null)
  const [volume, setVolume] = useState(0.10);

  const openPdf = () => {
    window.open(`${process.env.PUBLIC_URL}resume.pdf`, "_blank");
  };

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  }

  const toogleRain = () => {
    setIsRaining(!isRaining)
  }

  useEffect(() => {
    if (rainSoundRef.current) {
      rainSoundRef.current.volume = volume
      if (isRaining) {
        rainSoundRef.current.play();
      } else {
        rainSoundRef.current.pause(); 
      }
    }
  }, [isRaining]); 

  return (
    <div className={style.grid}>
      <audio ref={rainSoundRef} loop>
        <source src={`${process.env.PUBLIC_URL}/rain-sound.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Rainify
        isRaining={isRaining}
        wind={-4}
        speed={10}
        thickness={1}
        intensity={50}
        splashDuration={4}
        color="rgba(255,255,255,0.2)"
        splashColor="rgba(255,255,255,0.2)"
      />
      <header>
        <div className={style.iconContainer}>
          <SiCsharp className={style.icon} />
        </div>

        <nav className={style.buttonContainer}>
          <button
            className={style.button}
            onClick={() => scrollToSection("first")}
          >
            Sobre
          </button>
          <button className={style.button}>Contato</button>
          <button
            className={style.buttonResume} 
            onClick={openPdf}
          >Currículo</button>
          <button
            className={style.rainifyButton}
            onClick={toogleRain}
          ><FaCloudRain color={"white"}/></button>
        </nav>
      </header>

      <First id="first" className={style.first} />
      <About className={style.about} />
      <Footer className={style.footer} />
    </div>
  );
}
