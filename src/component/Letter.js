import "./Letter.css";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import TypeIt from "typeit-react";

const letterToSequence = ({ setterFunctionInit, marginBottom }) => {
  const tempo = () => (instance) => {
    instance.type("<span class=letter>Salut Galadrim 👋 !</span>");
    instance.pause(2500);
    instance.type('<br style="margin-bottom: ' + marginBottom + 'em;">');

    instance.type("<span class=letter>Je m'appelle gautier arcin.</span>");
    instance.pause(1000);
    instance.move(-5, { speed: 45 });
    instance.pause(300);
    instance.delete(1);
    instance.pause(300);
    instance.type("<span class=letter>A</span>");
    instance.pause(300);
    instance.move(-8, { speed: 45 });
    instance.pause(300);
    instance.delete(1);
    instance.pause(300);
    instance.type("<span class=letter>G</span>");
    instance.pause(700);
    instance.move("END", { speed: 40 });
    instance.pause(1000);

    instance.type("<span class=letter> Je suis ingénieur full-st<span>");
    instance.pause(400);
    instance.delete(7, { speed: 200 });
    instance.pause(300);
    instance.type("<span class=letter> robotique,</span>");
    instance.pause(300);
    instance.type(
      "<span class=letter> désireux de se reconvertir en ingénieur full-stack <span>"
    );
    instance.pause(300);
    instance.type("<span class=letter>(full-remote).<span>", { speed: 60 });
    instance.pause(2000);
    instance.type('<br style="margin-bottom: ' + marginBottom + 'em;">');
    instance.pause(500);

    instance.type(
      "<span class=letter>Je suis diplômé de l'école d'ingénieur Upssitech, </span>"
    );
    instance.pause(300);
    instance.type(
      '<span class=letter style="font-size: 1.3em !important; "> (une glorieuse rang C), </span>'
    );
    instance.pause(300);
    instance.type(
      "<span class=letter> en <b>S</b>ystèmes <b>R</b>obotiques et <b>I</b>nteractifs. </span>"
    );
    instance.pause(1500);

    instance.type(
      "<span class=letter>Concernant mon parcours professionnel,</span>"
    );
    instance.pause(300);
    instance.type(
      "<span class=letter> j'ai eu l'opportunité d'effectuer un stage en Espagne, </span>"
    );
    instance.pause(300);
    instance.type("<span class=letter> en M1,</span>");
    instance.pause(200);
    instance.type(
      '<span class=letter> qui a abouti sur la publication d\'un <a href="https://link.springer.com/article/10.1007/s00170-020-06234-5" >article scientifique</a>. </span>'
    );
    instance.pause(1500);

    instance.type(
      "<span class=letter>J'ai ensuite pû travailler en tant qu'ingénieur robotique spatiale </span>"
    );
    instance.pause(300);
    instance.type(
      '<span class=letter style="font-size: 1.3em !important; ">(en alternance)</span>'
    );
    instance.pause(300);
    instance.type(
      '<span class=letter> sur le projet <a href="https://www.h2020-pulsar.eu/" > H2020 Pulsar</a>,</span>'
    );
    instance.pause(300);
    instance.type(
      '<span class=letter> issu du plan <a href="https://www.esa.int/Enabling_Support/Space_Engineering_Technology/PERASPERA_Space_Robotic_Technologies" >PERESPERA</a> de l\'<b>E</b>uropean <b>S</b>pace <b>A</b>gency.</span>'
    );
    instance.pause(1500);

    instance.type("<span class=letter> Finalement,</span>");
    instance.pause(300);
    instance.type(
      "<span class=letter> j'occupe actuellement un poste d'ingénieur d'études à l'IRIT,</span>"
    );
    instance.pause(300);
    instance.type(
      '<span class=letter> sur le <a href="https://linto.ai/"> projet Linto</a>, </span>'
    );
    instance.pause(300);
    instance.type(
      "<span class=letter> où je travaille sur des thématiques de data scientist.</span>"
    );
    instance.pause(2000);
    instance.type('<br style="margin-bottom: ' + marginBottom + 'em;">');
    instance.pause(500);

    instance.type(
      "<span class=letter>J'ai découvert ✨ Galadrim ✨ au contact de Mathieu,</span>"
    );
    instance.type("<span class=letter> Valentin et Pierre. </span>");
    instance.pause(1500);
    instance.type("<span class=letter>Grâce à eux,</span>");
    instance.pause(300);
    instance.type(
      "<span class=letter> j'ai pu découvrir le métier d'ingénieur full-stack, </span>"
    );
    instance.pause(300);
    instance.type(
      "<span class=letter> dans lequel j'ai envie de me reconvertir, </span>"
    );
    instance.pause(300);
    instance.type(
      "<span class=letter> de par la polyvalence et l'excellence technique nécessaires pour l'exercer. </span>"
    );
    instance.pause(1500);

    instance.type(
      "<span class=letter>J'ai aujourd'hui des compétences en front-end (react) via des sites que j'ai pû réaliser </span>"
    );
    instance.pause(300);
    instance.type(
      '<span class=letter>(<a href="https://demo-linto.netlify.app/">Linto-demo</a>,</span>'
    );
    instance.pause(300);
    instance.type("<span class=letter> par exemple, </span>");
    instance.pause(300);
    instance.type(
      "<span class=letter> un site pour présenter des travaux de recherches), </span>"
    );
    instance.pause(300);
    instance.type(
      "<span class=letter>mais il me reste un nombre de compétences manquantes en backend. </span>"
    );
    instance.pause(1500);
    instance.type(
      "<span class=letter>Je travaille actuellement à les acquerir en multipliants les projets personnels.</span>"
    );
    instance.pause(2000);
    instance.type('<br style="margin-bottom: ' + marginBottom + 'em;">');
    instance.pause(500);

    instance.type(
      '<span class=letter>Vous pouvez me joindre sur mon <a href="https://www.linkedin.com/in/gautier-arcin-309405145/"> Linkedin</a>, </span>'
    );
    instance.pause(300);
    instance.type(
      '<span class=letter>mon mail <a href="mailto:gautierarcin@gmail.com"> gautierarcin@gmail.com</a>, </span>'
    );
    instance.pause(300);
    instance.type(
      '<span class=letter>ou au <span style="color:blue"> 0606792898. </span> </span>'
    );

    instance.pause(2000);
    instance.type('<br style="margin-bottom: ' + marginBottom + 'em;">');
    instance.pause(500);

    instance.type(
      '<span class=letter style="font-size: 2.4em !important;">Merci pour votre attention ! 😁<span>'
    );
    instance.pause(1500);

    return instance;
  };
  // console.log("séquence : " + tempo);

  console.log("Salut :)");
  setterFunctionInit(tempo);
};

const Letter = ({ cpt, setterCpt }) => {
  const [functionTypewriter, setFunctionTypewriter] = useState(
    () => (instance) => {
      instance.type("");
      return instance;
    }
  );
  const [delay, setDelay] = useState(26);
  const [instance, setInstance] = useState(null);
  const [paused, setPaused] = useState(false);

  //Tablet or mobile
  const isTabletOrMobile = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  useEffect(() => {
    setDelay(isTabletOrMobile ? 46 : 36);
    letterToSequence({
      setterFunctionInit: setFunctionTypewriter,
      marginBottom: isTabletOrMobile ? "3.4" : "2.5",
    });
    // eslint-disable-next-line
  }, []);

  const [allowChange, setAllowChange] = useState(true);

  useEffect(() => {
    if (instance != null) {
      if (paused) {
        if (!instance.is("frozen")) {
          instance.freeze();
        }
      } else {
        if (instance.is("frozen")) {
          setTimeout(() => {
            instance.unfreeze();
            setAllowChange(true);
          }, 300);
        }
      }
    }
  }, [paused, instance]);

  const pause = () => {
    if (allowChange) setPaused(true);
  };

  const run = () => {
    if (allowChange) {
      setAllowChange(false);
      setPaused(false);
    }
  };

  return (
    <div
      onMouseDown={(e) => {
        pause();
      }}
      onTouchStart={(e) => {
        pause();
      }}
      onMouseUp={(e) => {
        run();
      }}
      onTouchEnd={(e) => {
        run();
      }}
      className="wrapper"
    >
      <div className="center">
        <TypeIt
          getBeforeInit={(e) => functionTypewriter(e)}
          key={functionTypewriter}
          options={{
            speed: delay,
            waitUntilVisible: true,
            lifeLike: true,
            cursorChar: '<span class="cursor letter">|</span>',

            beforeStep: async (step, instance) => {},
            afterComplete: async (step, instance) => {
              instance.destroy();
            },
          }}
          getAfterInit={(instance) => {
            setInstance(instance);
            return instance;
          }}
        />
      </div>
    </div>
  );
};

export default Letter;
