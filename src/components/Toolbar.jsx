import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "./Button";
import {
  faBold,
  faItalic,
  faL,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// const icons = [faBold, faItalic, faUnderline];
function Toolbar() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const bold = "Input Bold";
  const italic = "Input Italic";
  const underline = "Input Underline";

  return (
    <>
      <div className="toolbar">
        <button onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button onClick={() => setShow1(!show1)}>
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button onClick={() => setShow2(!show2)}>
          <FontAwesomeIcon icon={faUnderline} />
        </button>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div>{show && bold}</div>
      <div>{show1 && italic}</div>
      <div>{show2 && underline}</div>
    </>
  );
}

export default Toolbar;
