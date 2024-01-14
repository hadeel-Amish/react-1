import "./App.css";
import HomeSec from "./components/Home/HomeSec";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";

import ServisrsPage from "./pages/servisrsPage";
import PackagingPage from "./pages/PackagingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeSec />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServisrsPage />} />
        <Route path="/Packages" element={<PackagingPage />} />
      </Routes>
    </>
  );
}

export default App;
