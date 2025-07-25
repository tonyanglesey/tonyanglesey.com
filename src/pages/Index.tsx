import Header from '@/components/Header';
import Hero from '@/components/Hero.jsx';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
