
import { Film, Tv } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger
} from "@/components/ui/dialog";
import { MediaItem, Character } from "@/data/mediaData";

interface MediaCardProps {
  media: MediaItem;
}

const CharacterAnalysis = ({ character }: { character: Character }) => (
  <div className="mb-4 p-4 border rounded-lg">
    <h4 className="font-medium text-lg mb-1">{character.name}</h4>
    <p className="text-sm text-muted-foreground">Played by {character.actor}</p>
    <p className="my-2">{character.description}</p>
    <div className="mt-2">
      <p className="text-sm italic">{character.portrayal}</p>
      <Badge className={character.stereotypical ? "bg-destructive" : "bg-emerald-600"} variant="secondary">
        {character.stereotypical ? "Stereotypical" : "Non-stereotypical"}
      </Badge>
    </div>
  </div>
);

const MediaCard = ({ media }: MediaCardProps) => {
  const { 
    title, 
    type, 
    genre, 
    year, 
    description, 
    portrayal, 
    characters, 
    imageUrl,
    rating 
  } = media;

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-navy">
            {type === 'TV' ? <Tv className="mr-1 h-3 w-3" /> : <Film className="mr-1 h-3 w-3" />}
            {type}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-terracotta">{genre}</Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-1">Representation Analysis:</h4>
          <p className="text-sm text-muted-foreground line-clamp-3">{portrayal}</p>
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-2">Rating:</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? "text-gold" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-navy hover:bg-navy/90">View Analysis</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {title} 
                <Badge className="ml-2 bg-terracotta">{genre}</Badge>
                <Badge className="bg-navy">
                  {type === 'TV' ? <Tv className="mr-1 h-3 w-3" /> : <Film className="mr-1 h-3 w-3" />}
                  {type}
                </Badge>
              </DialogTitle>
              <DialogDescription className="text-base">{year}</DialogDescription>
            </DialogHeader>
            
            <div className="my-4">
              <h3 className="text-lg font-medium mb-2">Synopsis</h3>
              <p>{description}</p>
            </div>
            
            <div className="my-6">
              <h3 className="text-lg font-medium mb-2">Overall Representation</h3>
              <p className="italic text-muted-foreground">{portrayal}</p>
            </div>
            
            <div className="my-6">
              <h3 className="text-lg font-medium mb-4">Character Analysis</h3>
              {characters.map((character, index) => (
                <CharacterAnalysis key={index} character={character} />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default MediaCard;
