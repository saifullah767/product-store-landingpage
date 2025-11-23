import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date("2024-12-15T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 border-b border-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left side - Compelling text */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-white">
              <span className="font-semibold">🎉 Early Bird Special!</span> Lock in <span className="font-semibold">$300 OFF</span> the regular price — Limited time offer ending December 15th!
            </p>
          </div>

          {/* Right side - Countdown */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 min-w-[44px] sm:min-w-[56px]">
                  <div className="text-white tabular-nums text-lg sm:text-2xl">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs text-white/80 mt-1">Days</div>
              </div>
              <div className="text-white/60 text-lg sm:text-2xl pb-4">:</div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 min-w-[44px] sm:min-w-[56px]">
                  <div className="text-white tabular-nums text-lg sm:text-2xl">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs text-white/80 mt-1">Hours</div>
              </div>
              <div className="text-white/60 text-lg sm:text-2xl pb-4">:</div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 min-w-[44px] sm:min-w-[56px]">
                  <div className="text-white tabular-nums text-lg sm:text-2xl">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs text-white/80 mt-1">Mins</div>
              </div>
              <div className="text-white/60 text-lg sm:text-2xl pb-4">:</div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 min-w-[44px] sm:min-w-[56px]">
                  <div className="text-white tabular-nums text-lg sm:text-2xl">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs text-white/80 mt-1">Secs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
