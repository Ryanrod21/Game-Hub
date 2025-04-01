import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

function MusicButton() {
  return (
    <div className="flex gap-4">
      <SkipBack size={24} />
      <Play size={24} />
      <Pause size={24} />
      <SkipForward size={24} />
    </div>
  );
}

export default MusicButton;
