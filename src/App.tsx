import "./App.css";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import StyledJSX from "./components/StyledJSX";
function App() {
  return (
    <div>
      <InlineStyle />
      <CssModules />
      <StyledJSX />
    </div>
  );
}

export default App;
