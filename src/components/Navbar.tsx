
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Film, Tv, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <div className="flex gap-4 items-center">
      <Link to="/" className="text-navy hover:text-terracotta transition-colors font-medium">
        Home
      </Link>
      <Link to="/tv" className="text-navy hover:text-terracotta transition-colors font-medium flex items-center gap-2">
        <Tv size={16} />
        TV Shows
      </Link>
      <Link to="/film" className="text-navy hover:text-terracotta transition-colors font-medium flex items-center gap-2">
        <Film size={16} />
        Films
      </Link>
    </div>
  );

  return (
    <nav className="border-b py-4 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-navy flex items-center gap-2">
          <span className="text-terracotta">Reel</span>
          <span className="text-navy">Arab</span>
          <span className="text-gold">Lens</span>
        </Link>
        
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[240px]">
              <div className="flex flex-col gap-4 mt-12">
                <Link 
                  to="/" 
                  className="px-4 py-2 hover:bg-secondary rounded-md transition-colors" 
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/tv" 
                  className="px-4 py-2 hover:bg-secondary rounded-md transition-colors flex items-center gap-2" 
                  onClick={() => setIsOpen(false)}
                >
                  <Tv size={16} />
                  TV Shows
                </Link>
                <Link 
                  to="/film" 
                  className="px-4 py-2 hover:bg-secondary rounded-md transition-colors flex items-center gap-2" 
                  onClick={() => setIsOpen(false)}
                >
                  <Film size={16} />
                  Films
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <NavLinks />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
