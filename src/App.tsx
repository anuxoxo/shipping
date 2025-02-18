import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/index.scss";

import { BoxProvider } from "./context/BoxContext";
import Navbar from "./components/Navbar";
// import AddBox from "./pages/AddBox";
// import BoxList from "./pages/BoxList";

function App() {
  return (
    <BoxProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<AddBox />} />
          <Route path="/list" element={<BoxList />} /> */}
        </Routes>
      </Router>
    </BoxProvider>
  );
}

export default App;
