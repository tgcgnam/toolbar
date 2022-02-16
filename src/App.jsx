import Toolbar from "./components/Toolbar";
import "./app.css";
import GlobalState from "./gLobal";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Toolbar></Toolbar>
      </div>
    </GlobalState>
  );
}

export default App;
