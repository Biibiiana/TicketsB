// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Components
import { Home } from './pages/Home';
import { Artists } from './pages/Artists';
import { Cities } from './pages/Cities';
import { Genders } from './pages/Genders';
import ConcertForm from './pages/newConcertForm';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Error from './pages/errors/Error';
import NotFound from './pages/errors/NotFound';
import Header from './components/Header';
import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/artists/:artist" element={<Artists />} />
        <Route exact path="/cities/:city" element={<Cities />} />
        <Route exact path="/genders/:gender" element={<Genders />} />
        <Route exact path="/new-event" element={<ConcertForm />} />
        {/* error FE routes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
