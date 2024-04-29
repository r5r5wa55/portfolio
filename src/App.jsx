import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutePage from "./pages/AboutePage";
import Footer from "./components/Footer";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutePage />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
