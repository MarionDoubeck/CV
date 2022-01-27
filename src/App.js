import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cognition from './pages/Cognition';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact="true" path="/" element={<Home />}/>
        <Route exact="true" path="/contact" element={<Contact />}/>
        <Route exact="true" path="/Knowledges" element={<Knowledges />}/>
        <Route exact="true" path="/Cognition" element={<Cognition />}/>
        <Route exact="true" path="/Portfolio" element={<Portfolio />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;