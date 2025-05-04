
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedMedia } from '@/data/mediaData';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MediaCard from '@/components/MediaCard';
import { Button } from "@/components/ui/button";
import { Film, Tv, BarChart2, BookOpen } from 'lucide-react';

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
                    Analyze how Arab and Muslim characters have been stereotyped and vilified in television shows.
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
                    Examine the century-long history of Arab stereotyping in Hollywood films documented by Jack Shaheen.
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
            <BookOpen className="mx-auto h-12 w-12 text-navy mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">About Jack Shaheen's Work</h2>
            <p className="text-muted-foreground mb-4">
              Dr. Jack Shaheen (1935-2017) was a pioneering media scholar who dedicated his career to 
              documenting and challenging the stereotypical portrayals of Arabs and Muslims in Western media.
            </p>
            <p className="text-muted-foreground mb-6">
              His groundbreaking book "Reel Bad Arabs: How Hollywood Vilifies a People" (2001) analyzed over 
              1,000 films, revealing how the entertainment industry has consistently portrayed Arabs as villains,
              reinforcing harmful stereotypes that have real-world consequences.
            </p>
            <p className="text-navy font-medium">
              This project is inspired by Shaheen's work and aims to continue his legacy by 
              analyzing media representation of Arabs and Muslims.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
