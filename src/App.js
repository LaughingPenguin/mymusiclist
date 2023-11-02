import { Router, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Home from './views/homeView'
import Login from './views/loginView'
import SignUp from './views/signupView'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" componenet={Login} />
      <Route path="/signup" componenet={SignUp} />
      <Route path="/reviews" componenet={Review} />
    </Switch>
  );
}

export default App;
library.add(fas)