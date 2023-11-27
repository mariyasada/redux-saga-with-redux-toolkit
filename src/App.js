import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compoenent/Home";
import Cat from "./compoenent/Cat";
import SingleCatDetails from "./compoenent/SingleCatDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breed/:id" element={<Cat />} />
          <Route path="/cat/:name" element={<SingleCatDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
