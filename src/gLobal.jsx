import { createContext, useState } from "react";

export const GlobalContext = createContext();


function GlobalState({ children }) {
  const [markdown, setMarkdown] = useState();

  return (
    <GlobalContext.Provider
      value={{
        markdown,
        setMarkdown,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
