import "./Letter.css";

import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import TypeIt from "typeit-react";

import Timer from "./Timer";

const getRandomArbitrary = (min, max) => {
  const rand = Math.random() * (max - min) + min;
  // console.log("random : " + rand);
  return rand;
};
const NewlineText = (text) => {
  const arr = text.split("\n").map((str) =>
    str
      .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
      .split("|")
      .map((e) => `<span class=letter>${e} </span>`)
  );

  const toFilter = ["<span class=letter> </span>"];
  const newText = arr.filter((liste) => liste[0] !== toFilter[0]);
  return newText;
};

const formatLetter = (props) => {
  let stringToReturn = [
    ...props["text"],
    [
      `<p class="letter endline">  <a href=${props["url"]}> ${props["title"]} </a>, written by <span class=author> ${props["author"]} </span> </p>  `,
      `<div class="letter endline" style="font-size:0.5em;">Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a></div> <br>`,
      //`<div class="letter endline" style="font-size:0.8em;">Made with 💖 by <a href="https://www.linkedin.com/in/gautier-arcin-309405145/" title="Gautier Arcin">Gautier Arcin</a>. Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a>.</div>`,
    ],
  ];
  return stringToReturn;
};

const letterToSequence = ({
  formatedLetter,
  setterFunctionInit,
  marginBottom,
}) => {
  const tempo = () => (instance) => {
    const len = formatedLetter.length;
    // eslint-disable-next-line
    formatedLetter.map((bigArray, i) => {
      instance.type('<br style="margin-bottom: ' + marginBottom + 'em;">');
      if (i + 1 !== len) {
        bigArray.map(
          (e) => (
            // eslint-disable-next-line
            instance.type(e), instance.pause(getRandomArbitrary(400, 900))
          )
        );
        instance.pause(getRandomArbitrary(600, 1400));
      } else {
        // cursor.style.visibility = "hidden";
        instance.exec(async () => {
          document.getElementsByClassName("ti-cursor")[0].style.visibility =
            "hidden";
        });
        instance.type(formatedLetter[i][0]);
        instance.type(formatedLetter[i][1]);
        instance.break();
        instance.break();
        instance.break();
      }
    });

    // instance.move(-5, { speed: 1 });

    return instance;
  };
  console.log("séquence : " + tempo);

  setterFunctionInit(tempo);
};

const increaseValue = (value, Setter) => Setter(value + 1);

const Letter = ({ cpt, setterCpt }) => {
  const [functionTypewriter, setFunctionTypewriter] = useState(
    () => (instance) => {
      instance.type("");
      return instance;
    }
  );
  const [delay, setDelay] = useState(26);
  const [isFinished, setIsFinished] = useState(0);
  const [instance, setInstance] = useState(null);

  const refTypeIt = useRef(null);

  //Tablet or mobile
  const isTabletOrMobile = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  useEffect(() => {
    fetch(
      "https://www.reddit.com/r/unsentletters/random.json?&raw_json=1"
    ).then(
      (url) => (
        // eslint-disable-next-line
        console.log(url),
        fetch(url["url"]).then((res) =>
          res.json().then((response) => {
            try {
              if (response[0].data.children[0].data.selftext) {
                const text = NewlineText(
                  response[0].data.children[0].data.selftext
                );
                const tempDic = {
                  text: text,
                  author: "u/" + response[0].data.children[0].data.author,
                  title: response[0].data.children[0].data.title,
                  url: response[0].data.children[0].data.url,
                };
                const totalString = formatLetter(tempDic);
                letterToSequence({
                  formatedLetter: totalString,
                  setterFunctionInit: setFunctionTypewriter,
                  marginBottom: isTabletOrMobile ? "3.4" : "2.5",
                });
              }
            } catch (e) {
              console.log(e);
            }
          })
        )
      )
    );

    setDelay(isTabletOrMobile ? 46 : 36);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("value : " + isFinished);
  }, [isFinished]);

  useEffect(() => {
    console.log("instance :");
    console.log(instance);
    console.log(document.getElementsByClassName("ti-cursor")[0]);
  }, [instance]);

  useEffect(() => {
    console.log("ref :");
    console.log(refTypeIt.current.children[0]);
  }, [refTypeIt]);

  const textInput = useRef(null);
  useEffect(() => {
    console.log("ref 2 :");
    console.log(textInput);
  }, [textInput]);

  return (
    <div className="wrapper">
      <div className="center" ref={refTypeIt}>
        <TypeIt
          getBeforeInit={(e) => functionTypewriter(e)}
          ref={textInput}
          key={functionTypewriter}
          options={{
            speed: delay,
            waitUntilVisible: true,
            lifeLike: true,
            cursorChar: '<span class="cursor">|</span>',

            beforeStep: async (step, instance) => {
              setIsFinished(false);
            },
            afterComplete: async (step, instance) => {
              instance.destroy();
              setIsFinished(true);
            },
          }}
          getAfterInit={(instance) => {
            setInstance(instance);
            return instance;
          }}
        />

        {isFinished && (
          // Re-init is finished
          <Timer function={() => increaseValue(cpt, setterCpt)}></Timer>
        )}
      </div>
    </div>
  );
};

export default Letter;
