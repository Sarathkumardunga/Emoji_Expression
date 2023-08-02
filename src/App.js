import React, { useState } from "react";
import "./styles.css";

//The emoji collection
const emojiCollection = {
  "😮": "suprised",
  "👌": "Super",
  "😂": "laughing",
  "❤️": "loving",
  "😊": "smile",
  "😥": "sad",
  "👍": "like"
};

const emojisWeKnow = Object.keys(emojiCollection);

export default function App() {
  var user = "Sarath";
  var col = "orange";

  var [meaning, setMeaning] = useState("");

  const emojiInputHandler = (e) => {
    var emoji = e.target.value;
    var meaning = emojiCollection[emoji];

    if (meaning === undefined) {
      meaning = "We dont have this in out database";
    }

    setMeaning(meaning);
  };

  const emojiChangeHandler = (item) => {
    var meaning = emojiCollection[item];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: col }}>{user}!</span>
      </h1>
      <input
        type="text"
        placeholder="Enter the emoji"
        onChange={emojiInputHandler}
      ></input>
      <h2 style={{ padding: "1rem" }}>{meaning}</h2>

      <h3 style={{ float: "left" }}>Emojis we know: </h3>
      <br />
      <br />
      {emojisWeKnow.map((item) => {
        return (
          <span
            style={{ padding: " 0 1rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => emojiChangeHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
