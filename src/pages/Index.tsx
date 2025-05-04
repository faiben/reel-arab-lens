
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedMedia } from '@/data/mediaData';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MediaCard from '@/components/MediaCard';
import { Button } from "@/components/ui/button";
import { Film, Tv, BarChart2 } from 'lucide-react';

const Index = () => {
  const featuredMedia = getFeaturedMedia();
  const [activeTab, setActiveTab] = useState<'all' | 'tv' | 'film'>('all');
  
  const filteredMedia = 
    activeTab === 'all' ? featuredMedia : 
    activeTab === 'tv' ? featuredMedia.filter(item => item.type === 'TV') :
    featuredMedia.filter(item => item.type === 'Film');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="my-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Featured Analysis</h2>
            <div className="flex gap-2">
              <Button 
                variant={activeTab === 'all' ? 'default' : 'outline'} 
                onClick={() => setActiveTab('all')} 
                className={activeTab === 'all' ? 'bg-navy text-white' : 'text-navy'}
              >
                All
              </Button>
              <Button 
                variant={activeTab === 'tv' ? 'default' : 'outline'} 
                onClick={() => setActiveTab('tv')}
                className={activeTab === 'tv' ? 'bg-navy text-white' : 'text-navy'}
              >
                <Tv className="mr-2 h-4 w-4" /> TV
              </Button>
              <Button 
                variant={activeTab === 'film' ? 'default' : 'outline'} 
                onClick={() => setActiveTab('film')}
                className={activeTab === 'film' ? 'bg-navy text-white' : 'text-navy'}
              >
                <Film className="mr-2 h-4 w-4" /> Film
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map(media => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <Link to="/tv" className="block group">
                <div className="border rounded-lg p-8 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <Tv className="h-12 w-12 text-navy mb-4 group-hover:text-terracotta transition-colors" />
                  <h3 className="text-xl font-bold mb-2">Explore TV Shows</h3>
                  <p className="text-muted-foreground mb-4">
                    Analyze how Arab and Muslim characters have been portrayed in television series over time.
                  </p>
                  <Button className="bg-navy hover:bg-navy/90">
                    Browse TV Shows
                  </Button>
                </div>
              </Link>
              
              <Link to="/film" className="block group">
                <div className="border rounded-lg p-8 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <Film className="h-12 w-12 text-navy mb-4 group-hover:text-terracotta transition-colors" />
                  <h3 className="text-xl font-bold mb-2">Explore Films</h3>
                  <p className="text-muted-foreground mb-4">
                    Examine the evolution of Arab and Muslim representation in cinema throughout film history.
                  </p>
                  <Button className="bg-navy hover:bg-navy/90">
                    Browse Films
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-16 pb-12">
          <div className="text-center max-w-2xl mx-auto">
            <BarChart2 className="mx-auto h-12 w-12 text-navy mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">About This Project</h2>
            <p className="text-muted-foreground mb-6">
              Reel Arab Lens analyzes the portrayal of Arab and Muslim characters in television and film, 
              highlighting both problematic stereotypes and positive, authentic representation. Our goal is to 
              raise awareness about media representation and its impact on public perception.
            </p>
            <p className="text-navy font-medium">
              Explore our database to learn more about how Arab and Muslim characters are portrayed in media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
