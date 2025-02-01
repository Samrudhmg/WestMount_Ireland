'use client';

import { useState } from 'react';

interface StoriesProps {
  title: string;
  subtitle: string;
  videoUrl: string;
}

export default function Stories({ title, subtitle, videoUrl }: Readonly<StoriesProps>) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from the embed URL
  const urlObject = new URL(videoUrl);
  const videoId = urlObject.pathname.split('/').pop();
  const playlist = urlObject.searchParams.get('list'); // Extracts playlist ID if available

  return (
    <div className="bg-white py-16 font-inter">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
          <h2
            className="mb-4 text-4xl font-bold md:mb-0 md:w-1/2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-md font-medium text-muted-foreground md:w-1/2">{subtitle}</p>
        </div>
        <div className="relative aspect-[16/9]">
          {!isPlaying
            ? (
                <div
                  className="size-full rounded-lg bg-gray-900"
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsPlaying(true)}
                  onKeyDown={event => event.key === 'Enter' && setIsPlaying(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Click to play video"
                    title="Success Stories"
                    className="size-full rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="flex size-14 items-center justify-center rounded-full bg-white text-black shadow-lg"
                      aria-hidden="true"
                    >
                      ▶
                    </span>
                  </div>
                </div>
              )
            : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0${playlist ? `&list=${playlist}` : ''}`}
                  title="Inspiring Stories Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="size-full rounded-lg"
                />
              )}
        </div>
      </div>
    </div>
  );
}
