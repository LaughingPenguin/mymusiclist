import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Toaster } from "react-hot-toast";
import Home from "./views/homeView";
import Login from "./views/loginView";
import SignUp from "./views/signupView";
import ReviewsPage from "./views/reviewView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
library.add(fas);
