'use client';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const getDynamicFromValue = (to: number): number => {
  const numberLength = Math.abs(to).toString().length;
  if (numberLength === 3) {
    return 0;
  }
  if (numberLength === 4) {
    return 1000;
  }
  if (numberLength > 4) {
    return to - 1000;
  }
  return 0;
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
      ref.current.textContent = String(direction === 'down' ? to : actualFrom);
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
  }, [isInView, startWhen, motionValue, direction, actualFrom, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        const options = {
          useGrouping: !!separator,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        };

        const formattedNumber = Intl.NumberFormat('en-US', options).format(Math.round(latest));

        ref.current.textContent = separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator]);

  return <span className={className} ref={ref} />;
}
