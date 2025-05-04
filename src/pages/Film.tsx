
import { useState, useMemo } from 'react';
import { getMediaByType, getGenres } from '@/data/mediaData';
import Navbar from '@/components/Navbar';
import MediaCard from '@/components/MediaCard';
import CategorySelector from '@/components/CategorySelector';
import SearchBar from '@/components/SearchBar';
import { Film } from 'lucide-react';

const FilmPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const films = getMediaByType('Film');
  const genres = ['All', ...getGenres('Film')];
  
  const filteredFilms = useMemo(() => {
    return films.filter(film => {
      const matchesCategory = selectedCategory === 'All' || film.genre === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.characters.some(char => 
          char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          char.portrayal.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        film.portrayal.toLowerCase().includes(searchQuery.toLowerCase());
        
      return matchesCategory && matchesSearch;
    });
  }, [films, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <Film className="h-8 w-8 text-navy" />
          <h1 className="text-3xl font-bold text-navy">Films</h1>
        </div>
        
        <SearchBar onSearch={setSearchQuery} />
        
        <CategorySelector 
          categories={genres.filter(g => g !== 'All')} 
          selectedCategory={selectedCategory} 
          onChange={setSelectedCategory}
        />
        
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
      </div>
    </div>
  );
};

export default FilmPage;
