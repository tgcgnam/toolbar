
// import { useRef,useContext } from "react";
// import { GlobalContext } from "../../gLobal";
// import "./inputType.css";


// const textArea = useRef();

//  const txtToCurrentPos = (format) => {
//   const thisTxtArea = textArea.current;
//   const pos = thisTxtArea.selectionStart;
//   const end = thisTxtArea.selectionEnd;
//   const value = thisTxtArea.value;
//   thisTxtArea.value = `${value.slice(0, pos)}${format}${value.slice(pos)}`;
//   thisTxtArea.focus();
//   thisTxtArea.selectionEnd = end + format.length / 2;
// };

// function InputType() {
// const {markdown}= useContext(GlobalContext)

//   return (
//     <div className="input-type">
//       <textarea
//         ref={textArea}
//         value={markdown}
//         onChange={(e) => setMarkdown(e.target.value)}
//       />
//     </div>
//   );
// }

// export default InputType;
