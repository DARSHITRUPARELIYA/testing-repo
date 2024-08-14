// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from 'C:/Users/eHeuristic/first/src/Components/Home/home';
import AboutUs from 'C:/Users/eHeuristic/first/src/Components/About/about';
import Services from 'C:/Users/eHeuristic/first/src/Components/Services/services';
import WhyUs from 'C:/Users/eHeuristic/first/src/Components/Why Us/whyus';
import Gallery from './Components/Gallery/gallery';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Nav from './Components/Nav/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <AboutUs />
      <Services />
      <WhyUs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/services">Services</Link></li>
//             <li><Link to="/whyus">WhyUs</Link></li>
//             <li><Link to="/gallery">Gallery</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>

//         {/* Define the routes */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/whyus" element={<WhyUs />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


