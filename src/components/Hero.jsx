import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Send, Github, Linkedin, Twitter, Mail, Phone, MapPin, Instagram } from 'lucide-react';
// import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Video2 from '@/assets/NycTrafficH264.mp4';
import './styles.scss'; // Assuming you have a styles.css for custom styles

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Suspense fallback={<p>Loading video...</p>}>
      <div className="video-container bg-slate-500 opacity-20">
        <video
          className="background-video"
          loop
          autoPlay
          muted
          src={Video2}
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="home-content bg-slate-50 p-10 opacity-7"></div>
      {/* <CTA /> */}
    </Suspense>
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        // backgroundImage: `linear-gradient(rgba(34, 42, 69, 0.8), rgba(34, 42, 69, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[50px] font-bold mb-6">
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tony Anglesey
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-stack developer passionate about creating beautiful, 
            functional web applications with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToPortfolio}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              View My Work
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-white bg-accent hover:bg-opacity-50 rounded-full">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 rounded-full">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 rounded-full">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 rounded-full">
                <Instagram size={20} />
              </Button>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToPortfolio}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary"
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
    </>
  );
};

export default Hero;