
import { useState, useMemo } from 'react';
import { getMediaByType, getGenres, getShaheenCategories } from '@/data/mediaData';
import Navbar from '@/components/Navbar';
import MediaCard from '@/components/MediaCard';
import CategorySelector from '@/components/CategorySelector';
import SearchBar from '@/components/SearchBar';
import { Film, Filter } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const FilmPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedShaheenCategory, setSelectedShaheenCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const films = getMediaByType('Film');
  const genres = ['All', ...getGenres('Film')];
  const shaheenCategories = ['All', ...getShaheenCategories()];
  
  const filteredFilms = useMemo(() => {
    return films.filter(film => {
      const matchesCategory = selectedCategory === 'All' || film.genre === selectedCategory;
      const matchesShaheenCategory = selectedShaheenCategory === 'All' || film.shaheen_category === selectedShaheenCategory;
      const matchesSearch = searchQuery === '' || 
        film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.characters.some(char => 
          char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          char.portrayal.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        film.portrayal.toLowerCase().includes(searchQuery.toLowerCase());
        
      return matchesCategory && matchesShaheenCategory && matchesSearch;
    });
  }, [films, selectedCategory, selectedShaheenCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <Film className="h-8 w-8 text-navy" />
          <h1 className="text-3xl font-bold text-navy">Films</h1>
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
        
        {filteredFilms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No films found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFilms.map(film => (
              <MediaCard key={film.id} media={film} />
            ))}
          </div>
        )}
        
        <div className="mt-12 p-6 bg-white rounded-lg border">
          <h2 className="text-2xl font-bold text-navy mb-4">About "Reel Bad Arabs"</h2>
          <p className="mb-4">
            In his groundbreaking book and documentary "Reel Bad Arabs," Dr. Jack Shaheen analyzed over 1,000 films 
            featuring Arab and Muslim characters made between 1896 and 2000.
          </p>
          <p className="mb-4">
            His research found that Hollywood has overwhelmingly portrayed Arabs as villains, terrorists, or otherwise 
            threatening characters, with over 900 films containing negative stereotypes. These portrayals have evolved 
            over time but continued to perpetuate harmful myths.
          </p>
          <p>
            Shaheen categorized these portrayals into stereotypes including villains, sheikhs, maidens, Egyptians, 
            Palestinians, and other recurring caricatures that have shaped public perception about Arabs and Muslims.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilmPage;
