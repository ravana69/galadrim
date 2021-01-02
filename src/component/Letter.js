import "./Letter.css";

import { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";

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
      // `<div class="letter endline" style="font-size:0.5em;">Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a></div> <br>`,
      `<div class="letter endline" style="font-size:0.5em;">Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a></div>`,
    ],
  ];
  return stringToReturn;
};

const letterToSequence = ({
  formatedLetter,
  setterClassName,
  setterFunctionInit,
  setterFunctionFinished,
  marginBottom,
}) => {
  const tempo = () => (typewriter) => (
    typewriter.callFunction(() => {
      console.log("");
      // eslint-disable-next-line
    }),
    formatedLetter.map(
      (bigArray) => (
        typewriter.typeString(
          '<br style="margin-bottom: ' + marginBottom + '%;">'
          // eslint-disable-next-line
        ),
        bigArray.map(
          (e) => (
            // eslint-disable-next-line
            typewriter.typeString(e),
            typewriter.pauseFor(getRandomArbitrary(400, 900))
          )
        ),
        typewriter.pauseFor(getRandomArbitrary(600, 1400))
      )
    ),
    typewriter.callFunction(() => {
      setterFunctionFinished(true);
    }),
    typewriter.start()
  );

  setterFunctionInit(tempo);
};

const increaseValue = (value, Setter) => Setter(value + 1);

const Letter = ({ cpt, setterCpt }) => {
  const [className, setClassName] = useState(
    "Typewriter__cursor_override stop"
  );
  const [functionTypewriter, setFunctionTypewriter] = useState();
  const [delay, setDelay] = useState(26);
  const [isFinished, setIsFinished] = useState(false);

  const refTypeWriter = useRef(null);

  //Tablet or mobile
  const isTabletOrMobile = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  //Tablet
  // const isTabletOrMobile = useMediaQuery({
  //   query: "(max-device-width: 768px)",
  // });

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
                  setterClassName: setClassName,
                  setterFunctionInit: setFunctionTypewriter,
                  setterFunctionFinished: setIsFinished,
                  marginBottom: isTabletOrMobile ? "16" : "4",
                });
              }
            } catch (e) {
              console.log(e);
            }
          })
        )
      )
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setDelay(isTabletOrMobile ? 400 : 24);
    // setDelay(isTabletOrMobile ? 1 : 1);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper">
      <div className="center">
        <Typewriter
          key={functionTypewriter}
          ref={refTypeWriter}
          options={{
            strings: "",
            cursorClassName: className,
            delay: delay,
            autoStart: true,
            loop: false,
            showCursor: true,
          }}
          onInit={functionTypewriter}
        />
        {isFinished && (
          <Timer function={() => increaseValue(cpt, setterCpt)}>
            New letter in:{" "}
          </Timer>
        )}
      </div>
    </div>
  );
};

export default Letter;
