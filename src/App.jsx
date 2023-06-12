import { Contact } from "./components/Contact";
import { Events } from "./components/Events";
import { Team } from "./components/Team";
import { Home } from "./components/Home.jsx";
function App() {

  return (
    <div className="Container">
      <Home />
      <Events />
      <Team />
      <Contact />
    </div>
  )
}

export default App

