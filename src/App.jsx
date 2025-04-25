import { ThemeProvider } from "styled-components";
import theme from "./components/theme.js";
import Header from "./components/Header";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import Thoughts from "./components/Thoughts.jsx";
import Beyond from './components/Beyond.jsx';
import Skills from "./components/Skills.jsx";
import Contact from './components/Contact.jsx';
import TickerTape from "./components/TickerTape.jsx"; // Lägg till denna rad

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Tech />
        <Projects />
        <div className="squiggly-container">
          <img src="/divider.svg" alt="Squiggly Divider" className="squiggly-line" />
        </div>
        <Thoughts />

        {/* Squiggly divider mellan Thoughts och Beyond */}
        <div className="squiggly-container">
          <img src="/divider.svg" alt="Squiggly Divider" className="squiggly-line" />
        </div>

        <Beyond />
        <Skills />
        <Contact />
        <TickerTape />
      </>
    </ThemeProvider>
  );
}

export default App;

