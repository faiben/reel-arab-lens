
import { useState, useMemo } from 'react';
import { getMediaByType, getGenres, getShaheenCategories } from '@/data/mediaData';
import Navbar from '@/components/Navbar';
import MediaCard from '@/components/MediaCard';
import CategorySelector from '@/components/CategorySelector';
import SearchBar from '@/components/SearchBar';
import { Tv, Filter } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const TVPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedShaheenCategory, setSelectedShaheenCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const tvShows = getMediaByType('TV');
  const genres = ['All', ...getGenres('TV')];
  const shaheenCategories = ['All', ...getShaheenCategories()];
  
  const filteredShows = useMemo(() => {
    return tvShows.filter(show => {
      const matchesCategory = selectedCategory === 'All' || show.genre === selectedCategory;
      const matchesShaheenCategory = selectedShaheenCategory === 'All' || show.shaheen_category === selectedShaheenCategory;
      const matchesSearch = searchQuery === '' || 
        show.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        show.characters.some(char => 
          char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          char.portrayal.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        show.portrayal.toLowerCase().includes(searchQuery.toLowerCase());
        
      return matchesCategory && matchesShaheenCategory && matchesSearch;
    });
  }, [tvShows, selectedCategory, selectedShaheenCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <Tv className="h-8 w-8 text-navy" />
          <h1 className="text-3xl font-bold text-navy">TV Shows</h1>
        </div>
        
        <SearchBar onSearch={setSearchQuery} />
        
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Filter className="h-5 w-5 mr-2" /> Filters
            </h3>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {isOpen ? "Hide Filters" : "Show Filters"}
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Genre:</h4>
                <CategorySelector
                  categories={genres.filter(g => g !== 'All')}
                  selectedCategory={selectedCategory}
                  onChange={setSelectedCategory}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Shaheen's Categories:</h4>
                <CategorySelector
                  categories={shaheenCategories.filter(c => c !== 'All')}
                  selectedCategory={selectedShaheenCategory}
                  onChange={setSelectedShaheenCategory}
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {filteredShows.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No TV shows found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShows.map(show => (
              <MediaCard key={show.id} media={show} />
            ))}
          </div>
        )}
        
        <div className="mt-12 p-6 bg-white rounded-lg border">
          <h2 className="text-2xl font-bold text-navy mb-4">About Jack Shaheen's Research on TV</h2>
          <p className="mb-4">
            Dr. Jack Shaheen documented how television series have historically perpetuated harmful stereotypes of Arabs and Muslims.
            His research identified that TV shows frequently portrayed Arabs as terrorists, oil sheikhs, belly dancers, or barbaric characters.
          </p>
          <p>
            The categories shown in this database reflect Shaheen's analysis of common stereotypes and occasional counter-examples in American television.
            Shaheen argued that these portrayals have real-world consequences by reinforcing prejudice and influencing public policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TVPage;
