import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// import Button from "./Button";
import {
  faBold,
  faItalic,
  faUnderline,
 
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

function Toolbar() {
  const textArea = useRef();
  const [markdown, setMarkdown] = useState();

  const bold = "****";
  const italic = "**";
  const underline = "++++";
  const h1 = "# "
  const h2 = "## "
  const h3 = "### "

  const txtToCurrentPos = (format) => {
    const thisTxtArea = textArea.current;
    const pos = thisTxtArea.selectionStart;
    const end = thisTxtArea.selectionEnd;
    const value = thisTxtArea.value;
    thisTxtArea.value = `${value.slice(0, pos)}${format}${value.slice(pos)}`;
    thisTxtArea.focus();
    thisTxtArea.selectionEnd = end + format.length / 2;
  };

  return (
    <div className="app">
      <div className="toolbar">
        <div className="toolbar-left">
          <button onClick={() => txtToCurrentPos(h1 + " ")}>
            <FontAwesomeIcon icon="fa-solid fa-h1" />
            H1
          </button>
          <button onClick={() => txtToCurrentPos(h2 + "  ")}>
            <FontAwesomeIcon icon="fa-solid fa-h1" />
            H2
          </button>
          <button onClick={() => txtToCurrentPos(h3 + "   ")}>
            <FontAwesomeIcon icon="fa-solid fa-h1" />
            H3
          </button>
          <button onClick={() => txtToCurrentPos(bold)}>
            <FontAwesomeIcon icon={faBold} />
          </button>
          <button onClick={() => txtToCurrentPos(italic)}>
            <FontAwesomeIcon icon={faItalic} />
          </button>
          <button onClick={() => txtToCurrentPos(underline)}>
            <FontAwesomeIcon icon={faUnderline} />
          </button>
        </div>
        <div className="toolbar-right">
          <button>A</button>
        </div>
      </div>
      <div className="markdown__container">
        <div className="input-type">
          <textarea
            ref={textArea}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>
        <div className="preview">
          <ReactMarkdown children={markdown} className="markdown__preview" />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
