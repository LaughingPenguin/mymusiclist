import { Routes, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Home from './views/homeView'
import Login from './views/loginView'
import SignUp from './views/signupView'
import ReviewsPage from './views/reviewView'
import PrivateRoute from './middleware/privateRoute'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/reviews"
          element={
            <PrivateRoute>
              <ReviewsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
library.add(fas)