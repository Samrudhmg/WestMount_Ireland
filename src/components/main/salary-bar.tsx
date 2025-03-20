import { Card, CardContent } from '@/components/ui/card';

import { cn } from '@/lib/utils';
import React from 'react';

interface ColorProgressProps {
  showLabels?: boolean;
}

export function ColorProgress({
  showLabels = true,
}: Readonly<ColorProgressProps>) {
  return (
    <Card
      className={cn(
        'm-0 w-full max-w-none rounded-none border-none p-0 shadow-none',
      )}
    >
      <CardContent className="">
        <div className="relative">
          {/* Markers */}
          <div className="left-0 top-5 flex h-8 w-full justify-between px-3 md:px-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="relative" key={index + 1}>
                <div className="absolute -left-1 top-6 flex flex-col items-center">
                  {/* <span>▼</span> */}
                  <div className="h-10 rounded-full border-[1px] border-dashed border-white"></div>
                </div>
              </div>
            ))}
          </div>

          {/* 3-color bar */}
          <Card className="flex h-8 overflow-hidden rounded-none border-none shadow-none">
            <Card className="w-1/3 rounded-none border-none bg-[#fcbba5] shadow-none"></Card>
            <Card className="w-1/3 rounded-none border-none bg-[#f76231] shadow-none" />
            <Card className="w-1/3 rounded-none border-none bg-[#9c2902] shadow-none" />
          </Card>

          {/* Labels */}
          {showLabels && (
            <div className="absolute -bottom-6 left-0 flex w-full justify-between text-xs text-muted-foreground">
              <span>Starting</span>
              <span>Median</span>
              <span>Peak</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
