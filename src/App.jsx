import { useState } from 'react';
import Navbar from './UI/Navbar';
import Footer from './UI/Footer';
import Components from './UI/Components';
import ContributionGuidelines from './UI/ContributionGuidelines';
import LightRays from './UI/background';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'guidelines':
        return <ContributionGuidelines />;
      case 'home':
      default:
        return <Components />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-900" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* LightRays background + overlay */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div className="bg-overlay"></div>
      </div>

      {/* Main content (above background) */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer onNavigate={setCurrentPage} />
      </div>
    </div>
  );
}

export default App;
