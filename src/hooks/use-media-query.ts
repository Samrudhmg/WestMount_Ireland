'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [didMatch, setDidMatch] = useState(false);

  useEffect(() => {
    const media = globalThis.matchMedia(query);
    if (media.matches !== didMatch) {
      setDidMatch(media.matches);
    }

    const listener = () => setDidMatch(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [didMatch, query]);

  return didMatch;
}
