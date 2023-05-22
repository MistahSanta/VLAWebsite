import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Who } from "./components/Who";
import { Works } from "./components/Works";
import "./styles.css";

function App() {

  return (
    <div className="Container">
      <Home />
      <Who />
      {/* <Works /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default App
