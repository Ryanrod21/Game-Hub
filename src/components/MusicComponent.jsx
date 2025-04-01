import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useState } from 'react';

function MusicComponent() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg w-80">
      <h1 className="text-xl font-bold">Music Player</h1>

      <div className="w-full bg-gray-300 h-2 rounded my-3">
        <div className="bg-blue-500 h-2 rounded" style={{ width: '30%' }}></div>
      </div>

      <div className="flex gap-4 mt-2">
        <button className="p-2 bg-gray-300 rounded-full">
          <SkipBack />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 bg-blue-500 text-white rounded-full"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <button className="p-2 bg-gray-300 rounded-full">
          <SkipForward />
        </button>
      </div>
    </div>
  );
}

export default MusicComponent;
