import './App.css';
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Dashboard from './components/register/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/api/register" element={<Register />} />
           <Route path="/api/dashboard" element={<Dashboard />} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;