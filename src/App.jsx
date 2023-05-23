import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Events } from "./components/Events";
import { Works } from "./components/Works";
import "./styles.css";

function App() {

  return (
    <div className="Container">
      <Home />
      <Events />
      <Works />
      <Contact />
    </div>
  )
}

export default App
