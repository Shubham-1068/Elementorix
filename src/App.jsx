import { useState } from 'react';
import Navbar from './UI/Navbar';
import Footer from './UI/Footer';
import Components from './UI/Components';
import ContributionGuidelines from './UI/ContributionGuidelines';

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
    <div className="min-h-screen flex flex-col bg-zinc-900">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
