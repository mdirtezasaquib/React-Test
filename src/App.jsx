
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Resource from './components/Resource';
import Practice from './components/Practice';

export default function App() {

  return (


    <Router>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/resource" element={<Resource />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </Router>


  );
}