import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import NavBar from "./components/navbar"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
library.add(fas)