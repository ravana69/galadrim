import "./Letter.css";

import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const NewlineText = (text) => {
  const newText = text.split("\n").map((str) => `<p class=letter>${str}</p>`);
  return newText.join("");
};

const formatLetter = (props) => {
  let stringToReturn;
  stringToReturn = props["text"];
  stringToReturn += `<p class="letter endline">  <a href=${props["url"]}> <span class=title> ${props["title"]} </span> </a>, written by <span class=author> ${props["author"]} </span> </p>  `;
  // stringToReturn += `<br/> <span class=url> <a href=${props["url"]}> ${props["url"]} </a> </span> </p>`;
  return stringToReturn;
};

const Letter = () => {
  const [className, setClassName] = useState(
    "Typewriter__cursor_override stop"
  );
  const [retrievedData, setRetrievedData] = useState([]);

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
                setRetrievedData(totalString);
              }
            } catch (e) {
              console.log(e);
            }
          })
        )
      )
    );
  }, []);

  return (
    <div className="wrapper">
      <div className="center">
        <Typewriter
          options={{
            strings: retrievedData,
            cursorClassName: className,
            // delay: 19,
            delay: 2,
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
    </div>
  );
};

export default Letter;
