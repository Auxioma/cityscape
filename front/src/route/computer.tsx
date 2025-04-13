import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Desckop from "../components/Navbar/Desckop";
import Home from "../pages/Index/Home";

// Simples composants de page pour test
const DummyPage = ({ title }: { title: string }) => <div style={{ padding: "20px" }}><h1>{title}</h1></div>;

function Computer() {
  return (
    <Router>
      <Desckop />

      <Routes>
        {/* HOME */}
        <Route path="/index.html" element={<Home />} />
        <Route path="/index-2.html" element={<DummyPage title="Home Two" />} />
        <Route path="/index-3.html" element={<DummyPage title="Home Three" />} />
        <Route path="/index-4.html" element={<DummyPage title="Home Four" />} />
        <Route path="/index-5.html" element={<DummyPage title="Home Five" />} />
        <Route path="/index-6.html" element={<DummyPage title="Home Video" />} />
        <Route path="/index-7.html" element={<DummyPage title="Home Map" />} />

        {/* PAGES */}
        <Route path="/property.html" element={<DummyPage title="Property" />} />
        <Route path="/property-sidebar.html" element={<DummyPage title="Property Sidebar" />} />
        <Route path="/property-details.html" element={<DummyPage title="Property Details" />} />
        <Route path="/add-listing.html" element={<DummyPage title="Add New Listing" />} />
        <Route path="/map-location.html" element={<DummyPage title="Map Location" />} />
        <Route path="/about.html" element={<DummyPage title="About Us" />} />
        <Route path="/faq.html" element={<DummyPage title="FAQ" />} />
        <Route path="/checkout.html" element={<DummyPage title="Checkout" />} />
        <Route path="/cart.html" element={<DummyPage title="Cart" />} />
        <Route path="/login.html" element={<DummyPage title="Login" />} />
        <Route path="/account.html" element={<DummyPage title="Account" />} />

        {/* PROJECT */}
        <Route path="/project.html" element={<DummyPage title="Project" />} />
        <Route path="/project-details.html" element={<DummyPage title="Project Details" />} />

        {/* BLOG */}
        <Route path="/blog-classic.html" element={<DummyPage title="Blog Classic" />} />
        <Route path="/blog-details.html" element={<DummyPage title="Blog Details" />} />

        {/* CONTACT */}
        <Route path="/contact.html" element={<DummyPage title="Contact" />} />

        {/* Page 404 */}
        <Route path="*" element={<DummyPage title="Page Not Found" />} />
      </Routes>
    </Router>
  );
}

export default Computer;
