import { useState , ChangeEvent } from 'react';
import { Star, Pause, Play, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import guitarBackground from '@/assets/guitar-background.jpg';

const MusicPlayer = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(75);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event)React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(event.target.value));
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div 
        className="relative h-80 rounded-xl overflow-hidden shadow-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${guitarBackground})` }}
      >
        {/* Dark overlay with blur effect */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-between">
          {/* Song info and favorite */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="text-primary font-semibold text-lg">It's You</h2>
              <p className="text-muted-foreground text-sm">Ali Gatie</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleFavorite}
              className={`${isFavorite ? 'text-love' : 'text-muted-foreground'} hover:bg-love/20 transition-colors`}
            >
              <Star className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
            </Button>
          </div>

          {/* Volume control */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--accent)) 0%, hsl(var(--accent)) ${volume}%, hsl(var(--border)) ${volume}%, hsl(var(--border)) 100%)`
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground w-8">{volume}</span>
            </div>
          </div>

          {/* Play/Pause button */}
          <div className="flex items-center justify-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={togglePlayPause}
              className="h-12 w-12 text-primary hover:bg-primary/20 shadow-glow transition-all"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;