import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/index.scss";

import { BoxProvider } from "./context/BoxContext";
import Loading from "./components/Loading";
const Navbar = lazy(() => import("./components/Navbar"));
const AddBox = lazy(() => import("./pages/AddBox"));
const BoxList = lazy(() => import("./pages/BoxList"));

function App() {
  return (
    <BoxProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<AddBox />} />
            <Route path="/table" element={<BoxList />} />
          </Routes>
        </Suspense>
      </Router>
    </BoxProvider>
  );
}

export default App;
