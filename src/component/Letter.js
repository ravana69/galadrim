import "./Letter.css";

import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
const NewlineText = (text) => {
  const newText = text.split("\n").map((str) => `<p class=letter>${str}</p>`);
  return newText.join("");
};

const Letter = () => {
  const [className, setClassName] = useState(
    "Typewriter__cursor_override stop"
  );
  const [retrievedData, setRetrievedData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.reddit.com/r/unsentletters/random.json?&raw_json=1"
    ).then((url) =>
      fetch(url["url"]).then((res) =>
        res.json().then((response) => {
          try {
            if (response[0].data.children[0].data.selftext) {
              const tempo = response[0].data.children[0].data.selftext;
              const tempo2 = NewlineText(tempo);
              setRetrievedData(tempo2);
            }
          } catch (e) {
            console.log(e);
          }
        })
      )
    );
  }, []);

  return (
    <div class="center">
      <Typewriter
        options={{
          strings: retrievedData,
          cursorClassName: className,
          delay: 17,
          autoStart: true,
          loop: false,
          showCursor: false,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("")
            .callFunction(() => {})
            .callFunction(() => {
              setClassName("Typewriter__cursor_override stop");
            })
            .start();
        }}
      />
    </div>
  );
};

export default Letter;
