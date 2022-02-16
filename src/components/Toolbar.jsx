import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useContext } from "react";
import { GlobalContext } from "../gLobal";
import {
  faBold,
  faItalic,
  faUnderline,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import Preview from "./Preview/Preview";
import ButtonIcon from "./Button/Button";

import "../app.css";

function Toolbar() {
  const bold = "****";
  const italic = "**";
  const underline = "++++";

  const { markdown, setMarkdown } = useContext(GlobalContext);

  const textArea = useRef();

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
          <ButtonIcon handleClick={() => txtToCurrentPos(bold)}>
            <FontAwesomeIcon icon={faBold} />
          </ButtonIcon>
          <ButtonIcon handleClick={() => txtToCurrentPos(italic)}>
            <FontAwesomeIcon icon={faItalic} />
          </ButtonIcon>
          <ButtonIcon handleClick={() => txtToCurrentPos(underline)}>
            <FontAwesomeIcon icon={faUnderline} />
          </ButtonIcon>
        </div>
        <div className="toolbar-right">
          <ButtonIcon handleClick={underline}>
            <FontAwesomeIcon icon={faMaximize} />
          </ButtonIcon>
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
        <Preview />
      </div>
    </div>
  );
}

export default Toolbar;
