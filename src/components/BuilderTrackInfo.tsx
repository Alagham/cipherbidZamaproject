import { useEffect, useState } from 'react';
import { Trophy, Zap } from 'lucide-react';

export function BuilderTrackInfo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 8,
    minutes: 54,
    seconds: 6,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-1 px-4 py-3">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-secondary-foreground" />
          <span className="text-sm font-display font-semibold text-secondary-foreground">
            Builder Track
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-secondary-foreground">
          <span className="text-sm font-medium">
            December {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-full">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs font-medium text-secondary-foreground">Live</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-secondary-foreground" />
          <span className="text-sm font-semibold text-secondary-foreground">
            Prize: $10,000
          </span>
        </div>
      </div>
    </div>
  );
}
