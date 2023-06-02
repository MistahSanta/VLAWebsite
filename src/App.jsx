import { Contact } from "./components/Contact";
import { Events } from "./components/Events";
import { Team } from "./components/Team";
import { Home } from "./components/Home.jsx";

import "./styles.css";

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


/*
- Add on hover over lotus - share link to the 3d model 
- Add event page 

*/