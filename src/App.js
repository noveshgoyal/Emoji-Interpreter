import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "🐱": "cat face",
  "🤫": "Shushing Face",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "👉": "Backhand Index Pointing Right",
  "✅": "Check Mark Button",
  "🎉": "Party Popper",
  "😍": "Smiling Face with Heart-Eyes",
  "👀": "Eyes",
  "😉": "Winking Face",
  "👇": "Backhand Index Pointing Down",
  "🤔": "Thinking Face",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "⭐": "Star",
  "😭": "Loudly Crying Face",
  "🥳": "Partying Face",
  "🥺": "Pleading Face",
  "🥲": "Smiling Face with Tear",
  "🤍": "White Heart",
  "🙏": "Folded Hands",
  "🤲": "Palms Up Together",
  "🛕": "Hindu Temple",
  "🛺": "Auto Rickshaw",
  "🌟": "Glowing Star",
  "🌠": "Shooting Star",
  "🌈": "Rainbow",
  "🎆": "Fireworks",
  "🎇": "Sparkler",
  "✨": "Sparkles",
  "🥻": "Sari",
  "💡": "Light Bulb",
  "🪔": "Diya Lamp",
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "🫱": "Rightwards Hand",
  "🫲": "Leftwards Hand",
  "🫳": "Palm Down Hand",
  "🫴": " Palm Up Hand",
  "👌": " OK Hand",
  "🤌": "Pinched Fingers",
  "🤏": "Pinching Hand",
  "✌": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🫰": "Hand with Index Finger and Thumb Crossed",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "👈": "Backhand Index Pointing Left",
  "👆": "Backhand Index Pointing Up",
  "🖕": " Middle Finger",
  "☝": "Index Pointing Up",
  "🫵": "Index Pointing at the Viewer",
  "👍": " Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "🫶": "Heart Hands",
  "👐": "Open Hands",
  "🤝": "Handshake",
  "✍": "Writing Hand",
  "🗻": "Mount Fuji",
  "🏟️": "Stadium",
  "🏤": "Post Office",
  "🚏": "Bus Stop",
  "️🕉": "Om"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database as of now!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <div className="text-container">
        <h1>Demystify Emoji</h1>
        <input placeholder="search your emoji" onChange={emojiInputHandler} />
        <div id="meaning"> {meaning} </div>
        <div id="emoji-head">Emojis we have:</div>
      </div>
      <div className="emoji-container">
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              className = "emoji"
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
