
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CategorySelectorProps {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

const CategorySelector = ({ categories, selectedCategory, onChange }: CategorySelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedCategory === 'All' ? "default" : "outline"}
        className={cn(
          "border-navy",
          selectedCategory === 'All' ? "bg-navy text-white" : "text-navy"
        )}
        onClick={() => onChange('All')}
      >
        All
        {selectedCategory === 'All' && <Check className="ml-2 h-4 w-4" />}
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={cn(
            "border-navy",
            selectedCategory === category ? "bg-navy text-white" : "text-navy"
          )}
          onClick={() => onChange(category)}
        >
          {category}
          {selectedCategory === category && <Check className="ml-2 h-4 w-4" />}
        </Button>
      ))}
    </div>
  );
};

export default CategorySelector;
