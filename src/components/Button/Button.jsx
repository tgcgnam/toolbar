// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonIcon({ handleClick, children }) {
  return <button onClick={()=>handleClick(console.log("click"))}>{children}</button>;
}

export default ButtonIcon;
