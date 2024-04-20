import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutePage from "./pages/AboutePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutePage />} />
       
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
