
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-navy text-white">
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Exploring Arab & Muslim Representation in Media
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Analyzing how Arab and Muslim characters are portrayed in television and film — 
            from harmful stereotypes to authentic representation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-terracotta hover:bg-terracotta/90 text-white">
              <Link to="/tv">Explore TV Shows</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
              <Link to="/film">Explore Films</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
