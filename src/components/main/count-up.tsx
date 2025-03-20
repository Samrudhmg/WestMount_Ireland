'use client';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const getDynamicFromValue = (_to: number): number => {
  return 0; // Ensuring it always starts from 0
};

interface CountUpProps {
  to: number;
  from?: number | 'auto';
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
  index?: number;
}

export default function CountUp({
  to,
  from = 'auto',
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd,
  index,
}: Readonly<CountUpProps>) {
  const actualFrom = from === 'auto' ? getDynamicFromValue(to) : from;
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : actualFrom);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(
        direction === 'down' ? to : actualFrom,
      );
    }
  }, [actualFrom, to, direction]);

  useEffect(() => {
    if (isInView && startWhen) {
      onStart?.();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? actualFrom : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          onEnd?.();
        },
        delay * 1000 + duration * 1000,
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    actualFrom,
    to,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        const formattedNumber
                    = index === 2
                      ? `${Math.floor(latest)}.9` // Append .9 if index is 2
                      : Math.floor(latest).toLocaleString('en-US'); // Keep whole numbers for other indexes

        ref.current.textContent = formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator, index]);

  return <span className={className} ref={ref} />;
}
