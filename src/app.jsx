import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import BearCounterPage from "./pages/bear-counter-page";
import BlogPage from "./pages/blogs-page";
import ContactPage from "./pages/contact-page";
import Footer from "./components/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Routes and Route */}
      {/* NOTE : Always use Route tag inside Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/bear-counter" element={<BearCounterPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
