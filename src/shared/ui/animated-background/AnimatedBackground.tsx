'use client';

import { useThemeStore } from '@/entities/theme/model/store';
import { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const animationsEnabled = useThemeStore((state) => state.animationsEnabled);
  const isDark = useThemeStore((state) => state.isDark);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !animationsEnabled) {
    return null;
  }

  const starColor = isDark 
    ? 'rgba(255, 255, 255, 0.9)' 
    : 'rgba(0, 0, 0, 0.9)';

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .star {
          position: fixed;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      {[...Array(30)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            backgroundColor: starColor,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </>
  );
};
