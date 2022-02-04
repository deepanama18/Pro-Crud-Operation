import "./App.css";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import Header from "./components/Header";
import SearchK from "./components/SearchK";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edituser from "./components/Edituser";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adduser" element={<Adduser />} />
            <Route exact path="/search" element={<SearchK />} />
            <Route exact path="/edituser/:id" element={<Edituser />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
