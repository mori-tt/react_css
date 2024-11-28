import "./App.css";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import StyledJSX from "./components/StyledJSX";
import { StyledComponents } from "./components/StyledComponents";

function App() {
  return (
    <div>
      <InlineStyle />
      <CssModules />
      <StyledJSX />
      <StyledComponents />
    </div>
  );
}

export default App;
