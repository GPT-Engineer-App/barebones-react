import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MonstersPage from "./pages/MonstersPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/monsters" element={<MonstersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
