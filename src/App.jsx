import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayOut from "./Components/LayOut";
import Home from "./Components/Home";
import About from "./Components/About/Aboutus";
import Service from "./Components/Services/Service";
import Serviceone from "./Components/Services/Serviceone";
import Clienttelle from "./Components/Clienttelle/Clienttelle";
import Contact from "./Components/Contactus/Contact";
import Blog from "./Components/Blog/Blog";
import Faq from "./Components/Faq/Faq";
import Privacypolicy from "./Components/Privacypolicy/Privacypolicy";
import TermsOfService from "./Components/Termsofservice/Termsofservice";
import Careers from "./Components/Career/Career";

const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/serviceone" element={<Serviceone />} />
              <Route path="/Product" element={<Clienttelle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/Privacypolicy" element={<Privacypolicy />} />
              <Route path="/Termsofservice" element={<TermsOfService />} />
              <Route path="/career" element={<Careers />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
