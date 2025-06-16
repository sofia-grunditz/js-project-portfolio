import { ThemeProvider } from "styled-components";
import theme from "./components/theme.js";
import Header from "./components/Header";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import Thoughts from "./components/Thoughts.jsx";
import Beyond from "./components/Beyond.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import TickerTape from "./components/TickerTape.jsx";
import SquigglyDivider from "./components/SquigglyDivider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Tech />
        <Projects />
        <SquigglyDivider />
        <Thoughts />
        <SquigglyDivider />
        <Beyond />
        <Skills />
        <Contact />
        <TickerTape />
      </>
    </ThemeProvider>
  );
}

export default App;
