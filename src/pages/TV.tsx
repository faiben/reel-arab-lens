
import { useState, useMemo } from 'react';
import { getMediaByType, getGenres } from '@/data/mediaData';
import Navbar from '@/components/Navbar';
import MediaCard from '@/components/MediaCard';
import CategorySelector from '@/components/CategorySelector';
import SearchBar from '@/components/SearchBar';
import { Tv } from 'lucide-react';

const TVPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const tvShows = getMediaByType('TV');
  const genres = ['All', ...getGenres('TV')];
  
  const filteredShows = useMemo(() => {
    return tvShows.filter(show => {
      const matchesCategory = selectedCategory === 'All' || show.genre === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        show.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        show.characters.some(char => 
          char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          char.portrayal.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        show.portrayal.toLowerCase().includes(searchQuery.toLowerCase());
        
      return matchesCategory && matchesSearch;
    });
  }, [tvShows, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <Tv className="h-8 w-8 text-navy" />
          <h1 className="text-3xl font-bold text-navy">TV Shows</h1>
        </div>
        
        <SearchBar onSearch={setSearchQuery} />
        
        <CategorySelector 
          categories={genres.filter(g => g !== 'All')} 
          selectedCategory={selectedCategory} 
          onChange={setSelectedCategory}
        />
        
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
      </div>
    </div>
  );
};

export default TVPage;
