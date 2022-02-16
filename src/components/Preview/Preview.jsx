import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useContext } from "react";
import "./Preview.css"
import { GlobalContext } from "../../gLobal";

function Preview() {
    const {markdown} = useContext(GlobalContext)
    return (
      <div className="preview">
        <ReactMarkdown children={markdown} className="markdown__preview" />
      </div>
    );
}

export default Preview;