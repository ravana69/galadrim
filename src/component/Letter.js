import "./Letter.css";

import { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";

import useMediaQuery from "react-responsive";

const getRandomArbitrary = (min, max) => {
  const rand = Math.random() * (max - min) + min;
  console.log("random : " + rand);
  return rand;
};
const NewlineText = (text) => {
  const arr = text.split("\n").map((str) =>
    str
      .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
      .split("|")
      .map((e) => `<span class=letter>${e}</span>`)
  );

  const toFilter = ["<span class=letter></span>"];
  const newText = arr.filter((liste) => liste[0] !== toFilter[0]);
  // console.log(toFilter);
  // console.log(newText);
  return newText;
};

const formatLetter = (props) => {
  let stringToReturn = [
    ...props["text"],
    [
      `<p class="letter endline">  <a href=${props["url"]}> ${props["title"]} </a>, written by <span class=author> ${props["author"]} </span> </p>  `,
    ],
  ];
  // console.log("hey cc 1");
  // console.log(stringToReturn);
  return stringToReturn;
};

const letterToSequence = ({
  formatedLetter,
  setterClassName,
  setterFunctionInit,
}) => {
  const tempo = () => (typewriter) => (
    typewriter.callFunction(() => {
      console.log("");
      // eslint-disable-next-line
    }),
    formatedLetter.map(
      (bigArray) => (
        // eslint-disable-next-line
        typewriter.typeString("<p>"),
        bigArray.map(
          (e) => (
            // eslint-disable-next-line
            typewriter.typeString(e + "<span class=letter> </span>"),
            typewriter.pauseFor(getRandomArbitrary(400, 900))
          )
        ),
        typewriter.pauseFor(getRandomArbitrary(600, 1400))
      )
    ),
    typewriter.callFunction(() => {
      console.log("");
    }),
    typewriter.start()
  );

  setterFunctionInit(tempo);
};

const Letter = () => {
  const [className, setClassName] = useState(
    "Typewriter__cursor_override stop"
  );
  const [functionTypewriter, setFunctionTypewriter] = useState();

  const refTypeWriter = useRef(null);

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
                });
                // setRetrievedData(totalString);
              }
            } catch (e) {
              console.log(e);
            }
          })
        )
      )
    );
  }, []);

  // Check if phone/tablet or desktop
  const tertiaryOperator = useMediaQuery({ query: "(max-width: 1224px)" })
    ? 33
    : 26;

  return (
    <div className="wrapper">
      <div className="center">
        <Typewriter
          key={functionTypewriter}
          ref={refTypeWriter}
          options={{
            strings: "",
            cursorClassName: className,
            delay: tertiaryOperator,
            autoStart: true,
            loop: false,
            showCursor: true,
          }}
          onInit={functionTypewriter}
        />
      </div>
    </div>
  );
};

export default Letter;
