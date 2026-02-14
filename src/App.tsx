import { Hero } from './app/components/Hero';
import { Portfolio } from './app/components/Portfolio';
import { Contact } from './app/components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;