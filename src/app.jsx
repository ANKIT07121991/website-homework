import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import PricingPlans from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/Contact";
import WhatsAppButton from "./components/whatsappButton";
import Services from "./components/Services";
import MyCard from "./components/MyCard";
import ExtraBlog from "./components/extrablogs/extrablog";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} /> {/* Main page route */}
        <Route path="/About Us" element={<About />} />
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/" element={<MyCard />} />
        <Route path="/ExtraBlog" element={<ExtraBlog />} />
      </Routes>
      <Footer></Footer>
      <WhatsAppButton></WhatsAppButton>
    </Router>
  );
}
