import { Navbar, Hero, Features, Card, Testimonial } from './components';
import './main.scss';

function App() {
  return (
    <main className='fylo__app'>
      <Navbar />
      <Hero />
      <Features />
      <Card />
      <Testimonial />
    </main>
  );
}
export default App;
