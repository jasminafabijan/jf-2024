import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import { useScrollToSection } from './hooks/useScrollToSection';

function App() {
    useScrollToSection();

    return (
        <div className="App d-flex flex-column min-vh-100">
            <main className="flex-grow-1">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;