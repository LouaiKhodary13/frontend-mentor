import { Navbar, Hero, Features, Card, Testimonial } from './components';
import Footer from './components/Footer';
import './main.scss';

function App() {
  return (
    <main className='fylo__app'>
      <Navbar />
      <Hero />
      <Features />
      <Card />
      <Testimonial />
      <Footer />
    </main>
  );
}
export default App;
