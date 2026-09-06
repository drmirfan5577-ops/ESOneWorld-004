import React from 'react';
import { NEWS_TICKER } from '@/constants/apps';

const NewsTicker: React.FC = () => {
  return (
    <div className="fixed bottom-[68px] left-0 right-0 z-30 overflow-hidden">
      <div
        className="py-1 px-3"
        style={{
          background: 'linear-gradient(90deg, rgba(30,64,175,0.92), rgba(7,89,133,0.92), rgba(30,64,175,0.92))',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255,255,255,0.3)',
          borderBottom: '1px solid rgba(255,255,255,0.3)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 flex-shrink-0">
            <span className="live-dot w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-red-400 text-[10px] font-bold">LIVE</span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="ticker-animate text-white text-[11px] font-medium">
              {NEWS_TICKER.join('   •   ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
