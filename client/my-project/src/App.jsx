import "./App.css";
import Index from "./components/Index";
import GAuth from "./components/GAuth";
import Dashboard from "./components/Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/googleAuth" element={<GAuth />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
