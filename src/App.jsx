import React from 'react';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { useScrollToSection } from './hooks/useScrollToSection';

function App() {
    useScrollToSection();

    return (
        <div className="App d-flex flex-column min-vh-100">
            <main className="flex-grow-1">
                <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;